import json
import os
from deep_translator import GoogleTranslator
from threading import Thread
DIR="data/"

def getExistingCourses():
    existingCourses = []
    with open(f"{DIR}courseList.txt", "r") as f:
        data = f.read()
        data = data.split(",\n")
        data = data[:-1]
        for item in data:
            existingCourses.append(json.loads(item))
    return existingCourses

def getExistingReviews(COURSEID):
    commentList = []
    with open(f"{DIR}/reviews/{COURSEID}.txt", "r") as f:
        data = f.read()
        data = data.split(",\n")
        data = data[:-1]
        print("Found existing reviews:", len(data), "for", COURSEID)
        count = 1
        for item in data:
            commentList.append(json.loads(item))

        for comment in commentList:
            comment["content"] = GoogleTranslator(source='auto', target='en').translate(comment["content"])
            print("Translated", count, "of", len(commentList), "for", COURSEID)
            count += 1
    print("Translated", COURSEID)
    writeTranslatedReviews(COURSEID, commentList)


def writeTranslatedReviews(COURSEID, commentList):
    with open(f"{DIR}translatedReviews/{COURSEID}.txt", "w") as f:
        for comment in commentList:
            f.write(json.dumps(comment))
            f.write(",\n")
    print("Wrote translated comments for", COURSEID)
    print("=====================================")
    print("=====================================")
    print("\n")

def main():
    threadCount = 2
    existingCourses = getExistingCourses()
    print("Detected existing courses:", len(existingCourses))
    threads = [Thread(target=getExistingReviews, args=(course["code"],)) 
        for course in existingCourses]
    for i in range(0, len(threads), threadCount):
        for thread in threads[i:i+threadCount]:
            thread.start()
        for thread in threads[i:i+threadCount]:
            thread.join()

if __name__ == "__main__":
    main()