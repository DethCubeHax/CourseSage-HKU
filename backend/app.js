//jshint esversion:6

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/courseListDB',{useNewURLParser: true});


//for the grades for each course
const courseforGradeSchema = new mongoose.Schema({
    courseCode: {
        type: String,
        required: [true, "Course code is needed for course-for-grade-schema!"]
    },
    courseName: {
        type: String,
        required: [true, "Course name is needed for course-for-grade-schema!"]
    },
    courseInstructors: [{
        type: String
    }],
    bestReview: {
        type: String,
        required: false
    },
    gradeList: Array,
    gradeListDetailed: Array
});

const Grade = mongoose.model("Grade",courseforGradeSchema);

const courseforReviewSchema = new mongoose.Schema({
    courseCode: {
        type: String,
        required: [true, "Course code is needed for course-for-review-schema!"]
    },
    courseName: {
        type: String,
        required: [true, "Course name is needed for course-for-review-schema!"]
    },
    reviewRanges: {
        type: Array  //need to use data type number maybe? also is the way i used for defining string arrays correct?
    },
    allReviews: [{
        actualReview: String,
        positivityScore: Number
    }]
});

const Review = mongoose.model("Review",courseforReviewSchema);

const grade1 = new Grade({
    courseCode: "ACCT1101",
    courseName: "Introduction to Financial Accounting",
    courseInstructors: ["Kyungran Lee","Jasmine Qing","She Ghouman"],
    bestReview: "Best course I took no cap!",
    gradeList: [15,3,20,2,5],
    gradeListDetailed: [1,2,3,4,5,6,7,8,9,10]
});
// grade1.save();

const grade2 = new Grade({
    courseCode: "ACCT1102",
    courseName: "Introduction to Financial Accounting",
    courseInstructors: ["Kyungran Lee","Jasmine Qing","She Ghouman"],
    bestReview: "Best course I took no cap!",
    gradeList: [15,3,20,2,5],
    gradeListDetailed: [1,2,3,4,5,6,7,8,9,10]
});
// grade2.save();

const grade3 = new Grade({
    courseCode: "ACCT1103",
    courseName: "Introduction to Financial Accounting",
    courseInstructors: ["Kyungran Lee","Jasmine Qing","She Ghouman"],
    bestReview: "Best course I took no cap!",
    gradeList: [15,3,20,2,5],
    gradeListDetailed: [1,2,3,4,5,6,7,8,9,10]
});
// grade3.save();

const review1 = new Review({
    courseCode: "ACCT1101",
    courseName: "Introduction to Financial Accounting",
    reviewRanges: [1,2,3,4,5],
    allReviews: [{
        actualReview: "Best course no cap",
        positivityScore: 0.67
    },
    {
        actualReview: "I love the course",
        positivityScore: 0.79
    }]
});

// review1.save();

const review2 = new Review({
    courseCode: "ACCT1102",
    courseName: "Introduction to Financial Accounting",
    reviewRanges: [1,2,3,4,5],
    allReviews: [{
        actualReview: "Best course no cap",
        positivityScore: 0.67
    },
    {
        actualReview: "I love the course",
        positivityScore: 0.79
    }]
});

// review2.save();

const review3 = new Review({
    courseCode: "ACCT1103",
    courseName: "Introduction to Financial Accounting",
    reviewRanges: [1,2,3,4,5],
    allReviews: [{
        actualReview: "Best course no cap",
        positivityScore: 0.67
    },
    {
        actualReview: "I love the course",
        positivityScore: 0.79
    }]
});

// review3.save();

const facultySchema = new mongoose.Schema({
    facultyName: {
        type: String,
        required: [true, "Faculty name must be specified"]
    },
    sortedByGrades: [courseforGradeSchema],
    sortedByReviews: [courseforReviewSchema]
});


const Faculty = mongoose.model("Faculty", facultySchema);

const fbe = new Faculty({
    facultyName: "Business",
    sortedByGrades: [grade1,grade2,grade3],
    sortedByReviews:[review1,review2,review3]
});
// fbe.save()


const express = require("express");
const bodyParser = require("body-parser");

const cors = require("cors");

const app = express();

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(cors());


app.get("/" , function (req,res) {
    Grade.findOne({courseCode: "ACCT1101"}, function(err,foundList) {
        if (!err) {
            console.log("found bro"+ foundList)
            res.send(foundList);
        }
        else {
            console.log("error bro!")
        }
    })
    console.log("something work plx");
    
})



//starts server at TCP port 3000
app.listen(8000, () => {
    console.log("Server started on port 8000.");
})