//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const jwt = require("jsonwebtoken");

JWTPRIVATEKEY = "urppissmol"

const cors = require("cors");

const app = express();

app.set('view engine','ejs');
//app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(cors());

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const mongoose = require('mongoose');
const { join } = require("path");
const { Console } = require("console");
mongoose.connect('mongodb://localhost:27017/richku2',{useNewURLParser: true});
mongoose.set('strictQuery', true);

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

// BEGIN USER SCHEMAS

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
})

userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, JWTPRIVATEKEY, {
		expiresIn: "7d",
	});
	return token;
};

const User = mongoose.model("User", userSchema)

const cartSchema = new mongoose.Schema({
    id: String,
    courseCode: String
})

const Cart = mongoose.model("Cart", cartSchema)

app.post("/auth", async function (req, res){
	try {
		const { error } = validateLogin(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email });
		if (!user)
			return res.status(401).send({ message: "Invalid Email or Password" });

		const validPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);
		if (!validPassword)
			return res.status(401).send({ message: "Invalid Password" });
        
        console.log("User verified")
        try {
            const token = user.generateAuthToken();
            console.log("Generated auth token")
            res.status(200).send({ data: token, message: "logged in successfully" });
        } catch (error) {
            return res.status(402).send({message: "Session expired"})
        }
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
})

app.post("/reg", async (req, res) => {
    console.log(req.body.email)
	try {
		const { error } = validateReg(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

        const user = await User.findOne({ email: req.body.email });
		if (user)
			return res
				.status(409)
				.send({ message: "User with given email already Exist!" });
		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);
        const emailAddr = req.body.email
        console.log("Password salted and email ready for entering into database!")
        const obj = new User({email: emailAddr, password: hashPassword})
        obj.save(function (err) {
            if (err) throw err;
        });
		res.status(201).send({ message: "User created successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

app.post("/verify", async function(req, res){
    console.log(req.body.token)
    const token = req.body.token;
    jwt.verify(token, JWTPRIVATEKEY, (err) => {
        if (err) {
            return res.status(403).send({message: "Forbidden"});
        }
        else {
            return res.status(200).send({message: "Verified"});
        }
    })
})



const validateReg = (data) => {
	const schema = Joi.object({
		email: Joi.string().email().required().label("Email"),
		password: Joi.string().required().label("Password"),
        confirm: Joi.string().required().label("Confirm")
	});
	return schema.validate(data);
};

const validateLogin = (data) => {
	const schema = Joi.object({
		email: Joi.string().email().required().label("Email"),
		password: Joi.string().required().label("Password"),
	});
	return schema.validate(data);
};

app.post("/addCourse", async function(req, res){
    if (req.body.token == null){
        return res.status(403).send({message: "User not logged in"});
    }
    else{
        const decodedData = jwt.verify(req.body.token, JWTPRIVATEKEY);
        const data = await Cart.find({ id: decodedData._id });
        let count = 0;
        for (var item of data){
            if (item.courseCode === req.body.title){
                return res.status(200).send({message: "This course already exists"})
            }
            count++;
            if (count >= 6){
                return res.status(200).send({message: "Maximum number of courses added"})
            }
        }
    
        const obj = new Cart({id:decodedData._id, courseCode:req.body.title});
        obj.save();
        console.log("Added course " + req.body.title + " to user <" + decodedData._id + ">'s cart")
        return res.status(200).send({message: "Course added to the cart"})
    }
})

app.post("/removeCourse", async function(req, res){
    if (req.body.token == null){
        return res.status(403).send({message: "User not logged in"});
    }
    const decodedData = jwt.verify(req.body.token, JWTPRIVATEKEY);
    console.log("PURGING COURSE " + req.body.title + " for user " + decodedData._id)
    const items = await Cart.find({id:decodedData._id})
    for (var item of items){
        if (item.courseCode===req.body.title){
            Cart.findByIdAndDelete(item._id, function(err, docs){
                if(err){
                    console.log("Error: " + err)
                }
                else{
                    console.log(docs)
                }
            })
        }
    }
})

app.post("/getCartData", async function (req, res) {
    if (req.body.token == null){
        return res.status(403).send({message: "User not logged in"});
    }
    const decodedData = jwt.verify(req.body.token, JWTPRIVATEKEY);
    const userData = await Cart.find({ id:decodedData._id });
    let sentData=[]
    for (var item of userData){
        const courseData = await Grade.findOne({courseCode: item.courseCode})
        const grades = courseData.gradeListDetailed
        let count = 0;
        let MAXGPA = 4.3;
        let GPA = 0;
        for (var grade of grades){
            count+=grade;
            GPA += grade * MAXGPA;
            MAXGPA -= 0.3;
        }
        GPA = GPA/count;
        courseInfo = {
            courseCode: item.courseCode,
            gpa: GPA
        }
        sentData.push(courseInfo)
    }
    let count = 0;
    let GPA = 0;
    for (var item of sentData)
    {
        GPA+=item.gpa;
        count++
    }
    if (GPA!=0){
        sentData.push({courseCode: "AVERAGE", gpa:GPA/count})
    }
    
    return res.status(200).send({data:sentData})
})

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