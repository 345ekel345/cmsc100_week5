import needle from 'needle';

const data1 = {
    age: 44
}
const addData = {
    stdnum: '11',
    fname: "Megan",
    lname: "Cruz",
    age: 25
}
needle.post('http://localhost:3000/add-students', {
   student: addData.stdnum,
   fname: addData.fname,
   lname: addData.lname,
   age: addData.age
}, (req, res) => {
    console.log(res.body);
})
needle.post('http://localhost:3000/find-students-post', {
    age: data1.age
}, (req, res) => {
    console.log(res.body);
})