import mongoose from 'mongoose';


// connection string
await mongoose.connect('mongodb://127.0.0.1:27017/ICS', { useNewUrlParser: true, useUnifiedTopology: true });
const Student = mongoose.model('students',{
    //object structure
    stdnum: String,
    fname: String,
    lname: String,
    age: Number,
});

const newStudent = new Student({
    stdnum: "12345678",
    fname: "Juan",
    lname: "dela Cruz",
    age: 20
});
await newStudent.save();
// let data = await Student.findOne({ fname: "Peter", lname: "Parker" });
// let data = await Student.find({ age: 17 });
// console.log(data);

// console.log(data);
let updateStudent = await Student.updateOne(
    { age: 17 },
    {$set: {fname: "John"}}
  );
console.log(updateStudent);  
process.exit();