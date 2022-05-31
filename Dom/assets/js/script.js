let course= {
    No:"Code", 
    Students:["stu1","stu2","stu3","stu4"]
};

const tbody=document.querySelector("tbody");

course.Students.forEach((student,index) => {
const tr =document.createElement("tr");
const no =document.createElement("td");
const name =document.createElement("td");
name.innerText=student;
no.innerText=index+1;
tr.appendChild(no);
tr.appendChild(name);
tbody.appendChild(tr);
})
