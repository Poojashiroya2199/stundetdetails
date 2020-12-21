import React, { useState } from "react";
import "./styles.css";
import Studentlist from "./Studentlist";
import ViewDetails from "./ViewDetails";
export default function App() {
  const studentlist = [
    {
      name: "Pooja",
      id: 1,
      about: "good",
      class: 10,
      hobbies: "singing , playing"
    },
    {
      name: "Drashti",
      id: 2,
      about: "good",
      class: 11,
      hobbies: "singing , playing"
    },
    {
      name: "Kajal",
      id: 3,
      about: "good",
      class: 12,
      hobbies: "singing , playing"
    },
    {
      name: "Arti",
      id: 4,
      about: "good",
      class: 8,
      hobbies: "singing , playing"
    }
  ];
  const [students, setstudents] = useState(studentlist);
  const [studentindex, setstudentindex] = useState(-1);
  const handleClick = (index) => {
    setstudentindex(index);
  };
  const handlechange = (event) => {
    const filtervalue = event.target.value;
    const filteredstudent = studentlist.filter((student) =>
      student.name.toLowerCase().includes(filtervalue)
    );
    setstudentindex(-1);
    setstudents(filteredstudent);
  };
  return (
    <div>
      <Studentlist
        studentlist={students}
        handleclick={handleClick}
        handlechange={handlechange}
      />
      {studentindex !== -1 && <ViewDetails student={students[studentindex]} />}
    </div>
  );
}
