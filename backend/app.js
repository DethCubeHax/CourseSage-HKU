//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");

const cors = require("cors");

const app = express();

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(cors());

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
    courseInstructor: [{
        type: String
    }],
    bestReview: Array,
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


// const facultySchema = new mongoose.Schema({
//     facultyName: {
//         type: String,
//         required: [true, "Faculty name must be specified"]
//     },
//     sortedByGrades: [courseforGradeSchema],
//     sortedByReviews: [courseforReviewSchema]
// });


// const Faculty = mongoose.model("Faculty", facultySchema);


const masterSchema = new mongoose.Schema({
    facultyName: {
        type: String,
        required: [true, "Faculty name must be specified"]
    },
    sortedByGrades: [],
    sortedByReviews: []
});


const Master = mongoose.model("Master", masterSchema);






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

app.get("/search/:name", function(req,res) {
    //check coursecode present, even as a substring in how many matches
    //return as an array
    //render that array when people search for courses on the website'
    const finder = req.params.name;
    console.log(finder)
    let searchHits = []
    // if (finder.length <= 8) {
        Grade.find({courseCode: {$regex: /^[finder]*/}}, function(err, foundList) {
                if (!err) {
                    console.log("Bingo!")
                    // (foundList.sortedByReviews).findOne({courseCode: "ECON1210"},)
                    // console.log(foundList)
                    const check = foundList;
                    for (var i in check) {
                        if (check[i].courseCode.includes(finder)) {
                            console.log(check[i])
                            searchHits.push(check[i])
                            
                        }
                    }
                    console.log(searchHits)
                    res.send(searchHits)
                }
                else {
                    console.log("Err!")
                }
            })
});

app.get("/reviews/:name", function(req,res) {
    //check coursecode present, even as a substring in how many matches
    //return as an array
    //render that array when people search for courses on the website'

    const finder = req.params.name;
    console.log(finder)
    let searchHits = []
    Review.findOne({courseCode: finder}, function(err, foundList) {
        if (!err) {
            console.log("Bingo!")
            res.send(foundList)
        }
        else {
            console.log("Err!")
        }
    })
});


//starts server at TCP port 3000
app.listen(8000, () => {
    console.log("Server started on port 8000.");
})