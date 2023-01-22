//jshint esversion:6

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/richku2',{useNewURLParser: true});


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


const grade2 = new Grade({
    courseCode: "ACCT1102",
    courseName: "Introduction to Financial Accounting",
    courseInstructors: ["Kyungran Lee","Jasmine Qing","She Ghouman"],
    bestReview: "Best course I took no cap!",
    gradeList: [15,3,20,2,5],
    gradeListDetailed: [1,2,3,4,5,6,7,8,9,10]
});


const grade3 = new Grade({
    courseCode: "ACCT1103",
    courseName: "Introduction to Financial Accounting",
    courseInstructors: ["Kyungran Lee","Jasmine Qing","She Ghouman"],
    bestReview: "Best course I took no cap!",
    gradeList: [15,3,20,2,5],
    gradeListDetailed: [1,2,3,4,5,6,7,8,9,10]
});


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
    },
    {
        actualReview: "I love the course",
        positivityScore: 0.79
    },
    {
        actualReview: "I love the coursekjernvkljdrnkrenkjrenvjkerfdnvjkernvkjerfnkjernvkejrnvdrkjfnderfkjjkdfndfkjvndfvkjdfkjndfbvkjdfv kjdf kdfjvn dkfjv dfvk",
        positivityScore: 0.79
    },
    {
        actualReview: "I love the coursekdjsfnvjfkdnvkldfsnkjsfnvkjsdnoernjoerijo ciunewriunewj chrberinciunsrfiuerbiurnv irv ireuneriuviunrvnvjniunfiurnvijdfr",
        positivityScore: 0.79
    }
]
});



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
    },
    {
        actualReview: "I love the course",
        positivityScore: 0.79
    },
    {
        actualReview: "I love the coursekjernvkljdrnkrenkjrenvjkerfdnvjkernvkjerfnkjernvkejrnvdrkjfnderfkjjkdfndfkjvndfvkjdfkjndfbvkjdfv kjdf kdfjvn dkfjv dfvk",
        positivityScore: 0.79
    },
    {
        actualReview: "I love the coursekdjsfnvjfkdnvkldfsnkjsfnvkjsdnoernjoerijo ciunewriunewj chrberinciunsrfiuerbiurnv irv ireuneriuviunrvnvjniunfiurnvijdfr",
        positivityScore: 0.79
    }
]
});

const review4 = new Review({
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
    },
    {
        actualReview: "I love the course",
        positivityScore: 0.79
    },
    {
        actualReview: "I love the coursekjernvkljdrnkrenkjrenvjkerfdnvjkernvkjerfnkjernvkejrnvdrkjfnderfkjjkdfndfkjvndfvkjdfkjndfbvkjdfv kjdf kdfjvn dkfjv dfvk",
        positivityScore: 0.79
    },
    {
        actualReview: "I love the coursekdjsfnvjfkdnvkldfsnkjsfnvkjsdnoernjoerijo ciunewriunewj chrberinciunsrfiuerbiurnv irv ireuneriuviunrvnvjniunfiurnvijdfr",
        positivityScore: 0.79
    }
]
});

const review5 = new Review({
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
    },
    {
        actualReview: "I love the course",
        positivityScore: 0.79
    },
    {
        actualReview: "I love the coursekjernvkljdrnkrenkjrenvjkerfdnvjkernvkjerfnkjernvkejrnvdrkjfnderfkjjkdfndfkjvndfvkjdfkjndfbvkjdfv kjdf kdfjvn dkfjv dfvk",
        positivityScore: 0.79
    },
    {
        actualReview: "I love the coursekdjsfnvjfkdnvkldfsnkjsfnvkjsdnoernjoerijo ciunewriunewj chrberinciunsrfiuerbiurnv irv ireuneriuviunrvnvjniunfiurnvijdfr",
        positivityScore: 0.79
    }
]
});



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
    sortedByReviews:[review1,review2,review3,review4,review5]
});

const masterSchema = new mongoose.Schema({
    facultyName: {
        type: String,
        required: [true, "Faculty name must be specified"]
    },
    sortedByGrades: [],
    sortedByReviews: []
});


const Master = mongoose.model("Master", masterSchema);


// grade1.save();
// grade2.save();
// grade3.save();
// review1.save();
// review2.save();
// review3.save();
// review4.save();
// review5.save();
// fbe.save()


const express = require("express");
const bodyParser = require("body-parser");

const cors = require("cors");

const app = express();

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(cors());


app.get("/FBE" , function (req,res) {
    Master.findOne({facultyName: "Faculty of Business and Economics"}, function(err,foundList) {
        if (!err) {
            console.log("Found Successfully");
            // console.log(foundList);
            res.send(foundList);
        }
        else {
            console.log("Error Logged")
        }
    })
    console.log("This GET req runs");
    
})

app.get("/CAES" , function (req,res) {
    Master.findOne({facultyName: "Center for Applied English Studies"}, function(err,foundList) {
        if (!err) {
            console.log("Found Successfully");
            // console.log(foundList);
            res.send(foundList);
        }
        else {
            console.log("Error Logged")
        }
    })
    console.log("This GET req runs");
    
})

app.get("/social" , function (req,res) {
    Master.findOne({facultyName: "Faculty of Social Sciences"}, function(err,foundList) {
        if (!err) {
            console.log("Found Successfully");
            // console.log(foundList);
            res.send(foundList);
        }
        else {
            console.log("Error Logged")
        }
    })
    console.log("This GET req runs");
    
})

app.get("/arts" , function (req,res) {
    Master.findOne({facultyName: "Faculty of Arts"}, function(err,foundList) {
        if (!err) {
            console.log("Found Successfully");
            // console.log(foundList);
            res.send(foundList);
        }
        else {
            console.log("Error Logged")
        }
    })
    console.log("This GET req runs");
    
});

app.get("/science" , function (req,res) {
    Master.findOne({facultyName: "Faculty of Science"}, function(err,foundList) {
        if (!err) {
            console.log("Found Successfully");
            // console.log(foundList);
            res.send(foundList);
        }
        else {
            console.log("Error Logged")
        }
    })
    console.log("This GET req runs");
    
});

app.get("/education" , function (req,res) {
    Master.findOne({facultyName: "Faculty of Education"}, function(err,foundList) {
        if (!err) {
            console.log("Found Successfully");
            // console.log(foundList);
            res.send(foundList);
        }
        else {
            console.log("Error Logged")
        }
    })
    console.log("This GET req runs");
    
});

app.get("/medicine" , function (req,res) {
    Master.findOne({facultyName: "Faculty of Medicine"}, function(err,foundList) {
        if (!err) {
            console.log("found bro");
            // console.log(foundList);
            res.send(foundList);
        }
        else {
            console.log("Error Logged")
        }
    })
    console.log("This GET req runs");
    
});

app.get("/engineering" , function (req,res) {
    Master.findOne({facultyName: "Faculty of Engineering"}, function(err,foundList) {
        if (!err) {
            console.log("Found Successfully");
            // console.log(foundList);
            res.send(foundList);
        }
        else {
            console.log("Error Logged")
        }
    })
    console.log("This GET req runs");
    
});

app.get("/law" , function (req,res) {
    Master.findOne({facultyName: "Faculty of Law"}, function(err,foundList) {
        if (!err) {
            console.log("Found Successfully");
            // console.log(foundList);
            res.send(foundList);
        }
        else {
            console.log("Error Logged")
        }
    })
    console.log("This GET req runs");
    
});

app.get("/engineering" , function (req,res) {
    Master.findOne({facultyName: "Faculty of Engineering"}, function(err,foundList) {
        if (!err) {
            console.log("Found Successfully");
            // console.log(foundList);
            res.send(foundList);
        }
        else {
            console.log("Error Logged")
        }
    })
    console.log("This GET req runs");
    
});

app.get("/graduate" , function (req,res) {
    Master.findOne({facultyName: "Graduate School"}, function(err,foundList) {
        if (!err) {
            console.log("Found Successfully");
            // console.log(foundList);
            res.send(foundList);
        }
        else {
            console.log("Error Logged")
        }
    })
    console.log("This GET req runs");
    
});

app.get("/CCST" , function (req,res) {
    Master.findOne({facultyName: "CCST"}, function(err,foundList) {
        if (!err) {
            console.log("Found Successfully");
            // console.log(foundList);
            res.send(foundList);
        }
        else {
            console.log("Error Logged")
        }
    })
    console.log("This GET req runs");
    
});

app.get("/CCGL" , function (req,res) {
    Master.findOne({facultyName: "CCGL"}, function(err,foundList) {
        if (!err) {
            console.log("Found Successfully");
            // console.log(foundList);
            res.send(foundList);
        }
        else {
            console.log("Error Logged")
        }
    })
    console.log("This GET req runs");
    
});

app.get("/CCHU" , function (req,res) {
    Master.findOne({facultyName: "CCHU"}, function(err,foundList) {
        if (!err) {
            console.log("Found Successfully");
            // console.log(foundList);
            res.send(foundList);
        }
        else {
            console.log("Error Logged")
        }
    })
    console.log("This GET req runs");
    
});

app.get("/CCCH" , function (req,res) {
    Master.findOne({facultyName: "CCCH"}, function(err,foundList) {
        if (!err) {
            console.log("Found Successfully");
            // console.log(foundList);
            res.send(foundList);
        }
        else {
            console.log("Error Logged")
        }
    })
    console.log("This GET req runs");
    
});

// app.get("/:name", function(req,res) {
//     const finder = req.params.name;
//     Master.findOne({courseCode: finder}, function(err, foundList) {
//         if (!err) {
//             console.log("Bingo!")
//             (foundList.sortedByReviews).findOne({courseCode: "ECON1210"},)
//             console.log(foundList.sortedByReviews.courseCode === "ECON1210")
//         }
//         else {
//             console.log("Err!")
//         }
//     })
// })


//starts server at TCP port 3000
app.listen(8000, () => {
    console.log("Server started on port 8000.");
})