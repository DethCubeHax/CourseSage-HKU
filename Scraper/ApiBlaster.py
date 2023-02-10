import json
import requests
import random
import os
from time import sleep

URL="https://api.richku.com"
USERNAME = "u3583557@connect.hku.hk"
PASSWORD = "Nafis0034--"
excludes=["description", "grade_pass", "grade_fail"]
includes=["code", "title", "offer_dept"]

DIR="data/"

def generatePayload(type, CURRENT, PAGESIZE):
    if (type == "login"):
        payload = {
            "email": USERNAME, 
            "password": PASSWORD, 
        }
        return payload
    elif (type == "course"):
        payload = {
            "search": "",
            "current": CURRENT,
            "page_size": PAGESIZE,
            "order": "asc",
            "sort": "course_code"
        }
        return payload
    return None

def getExistingCourses():
    existingCourses = []
    with open(f"{DIR}courseList.txt", "r") as f:
        data = f.read()
        data = data.split(",\n")
        data = data[:-1]
        for item in data:
            existingCourses.append(json.loads(item))
    return existingCourses

session_requests=requests.session()

def generateHeaders(METHOD, PATH, token):
    TOKENSTR=f"Bearer {token}"
    headers={
        'authority':'api.richku.com',
        'method':METHOD,
        'path':PATH,
        'scheme':'https',
        "accept":"application/json, text/plain, */*",
        "accept-language":"en-GB,en;q=0.9",
        "authorization":TOKENSTR,
        "origin":"https://richku.com",
        "referer":"https://richku.com/",
        "sec-ch-ua":"Not?A_Brand';v='8', 'Chromium';v='108', 'Microsoft Edge';v='108",
        "sec-ch-ua-mobile":"?0",
        "sec-ch-ua-platform":"Linux",
        "sec-fetch-dest":"empty",
        "sec-fetch-mode":"cors",
        "sec-fetch-site":"same-site",
        "user-agent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36 Edg/108.0.1462.54"
    }

    if (PATH == "/v1/auth"):
        headers["content-type"] = "application/json"

    return headers

def updateCourseList(CURR, SIZE, headers, existingCourses):
    while(CURR*10 < SIZE+10):
        PATH="/v1/courses?search=&current="+str(CURR)+"&page_size=10&order=asc&sort=code"
        resp = session_requests.get(URL+PATH, headers=headers)
        if (resp.status_code != 200):
            print("Unable to get course list for batch: " + str(CURR))
            return 1
        processedData = json.loads(resp.text)['data']['list']
        for item in processedData:
            tmpDict = {}
            for key in item:
                if key in includes:
                    tmpDict[key] = item[key]
            with open(f"{DIR}courseList.txt", "a") as f:
                if tmpDict not in existingCourses:
                    f.write(json.dumps(tmpDict)+",\n")
                    print("Course added: " + str(tmpDict["code"]))
                else:
                    print("Course already exists: " + str(tmpDict["code"]))

        CURR+=1
        sleep(random.randint(5,10))
    return 0

def updateReviews(CURR, SIZE, headers, COURSEID):
    commentList = []
    exists = False
    tmpLst = []
    if os.path.isfile(f"{DIR}/reviews/{COURSEID}.txt"):
        exists = True
        with open(f"{DIR}/reviews/{COURSEID}.txt", "r") as f:
            data = f.read()
            data = data.split(",\n")
            data = data[:-1]
            for item in data:
                commentList.append(json.loads(item))
    PATH=f"/v1/courses/{COURSEID}/reviews?current="+str(CURR)+"&page_size=10&order=desc&sort=liked_count"
    resp = session_requests.get(URL+PATH, headers=headers)
    if (resp.status_code != 200):
        print("Unable to get comment list for batch: " + str(CURR))
        return 1
    SIZE = json.loads(resp.text)['data']["total"]
    if (SIZE > len(commentList) or not exists):
        while(CURR*10 < SIZE+10):
            excludes=["course_code", "deleted_at", "has_liked"]
            PATH=f"/v1/courses/{COURSEID}/reviews?current="+str(CURR)+"&page_size=10&order=desc&sort=liked_count"
            resp = session_requests.get(URL+PATH, headers=headers)
            if (resp.status_code != 200):
                print("Unable to get comment list for batch: " + str(CURR))
                return 1
            processedData = json.loads(resp.text)['data']["list"]
            for item in processedData:
                tmpLst.append(item)
            CURR+=1
            #sleep(random.randint(5,10))
    else:
        print("No new comments for course: " + str(COURSEID))
    if not exists or SIZE > len(commentList):
        with open(f"{DIR}/reviews/{COURSEID}.txt", "w") as f:
            for item in tmpLst:
                f.write(json.dumps(item)+",\n")
        print("Updated comments for course: " + str(COURSEID))

def getGrades(CURR, SIZE, headers, COURSEID):
    includes = ["code", "grade_a_plus", "grade_a", "grade_a_minus",
                        "grade_b_plus", "grade_b", "grade_b_minus",
                        "grade_c_plus", "grade_c", "grade_c_minus",
                        "grade_d_plus", "grade_d", "grade_d_minus",
                        "grade_fail", "subclasses"]

    for item in COURSEID:
        PATH=f"/v1/courses/{item['code']}"
        resp = session_requests.get(URL+PATH, headers=headers)
        if (resp.status_code != 200):
            print("Unable to get comment list for batch: " + str(CURR))
            return 1
        processedData = json.loads(resp.text)['data']

        tmpDict = {}
        for key in processedData:
            if key in includes:
                if key == "subclasses":
                    classArr = []
                    for subclass in processedData[key]:
                        classArr.append({"instructor": subclass["instructor"]})
                    tmpDict["instructors"] = classArr
                    continue
                tmpDict[key] = processedData[key]
        with open(f"{DIR}grades.txt", "a") as f:
            f.write(json.dumps(tmpDict)+",\n")
            print("Course added: " + str(tmpDict["code"]))


def main():
    existingCourses = []
    updatedCourseList = False
    token = None
    val = 0
    METHOD = "POST"
    PATH = "/v1/auth"
    SIZE = 10
    CURR = 1
    payload = generatePayload("login", CURR, SIZE)
    headers = generateHeaders(METHOD, PATH, token)
    resp = session_requests.post(URL+PATH, headers = headers ,data=json.dumps(payload))
    if (resp.status_code != 201):
        print("Login failed")
        return
    token = json.loads(resp.text)['data']
    payload = generatePayload("course",CURR, SIZE)
    METHOD = "GET"
    PATH = "/v1/courses?search=&current=1&page_size=10&order=asc&sort=code"
    
    headers = generateHeaders(METHOD, PATH, token)
    resp = session_requests.get(URL+PATH, headers=headers)

    if (resp.status_code != 200):
        print("Unable to get course list")
        return
    SIZE = json.loads(resp.text)['data']['total']
    
    existingCourses = getExistingCourses()

    if (SIZE > len(existingCourses)):
        updatedCourseList = True

    if (updatedCourseList):    
        val = updateCourseList(CURR, SIZE, headers, existingCourses)
        existingCourses = []
        existingCourses = getExistingCourses()
    else:
        print("Course list is up to date")

    if (val == 1):
        print("Unable to update course list")
        return
    
    CURR = 1
    for item in existingCourses:
        updateReviews(CURR, SIZE, headers, item['code'])
    
    getGrades(CURR, SIZE, headers, existingCourses)
        #sleep(random.randint(5,10))
    print("Done fetching data")

if __name__ == "__main__":
    main()

    