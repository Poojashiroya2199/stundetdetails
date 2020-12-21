import React from "react";

export default function ViewDetails({ student }) {
  return (
    <>
      <div>{student.name}</div>
      <div>{student.class}</div>
      <div>{student.hobbies}</div>
    </>
  );
}
