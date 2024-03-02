"use client";
import React, { useEffect } from "react";
import StudentInformationComponent from "./studentInfo";
import ClubRoleComponent from "./clubRoles";

import { useState } from 'react';
import createStudent from "@/server_actions/createStudent";
import AlertCustomCloseIcon from "@/components/alert";

export default function CreateStudentPage() {
  const [state, setState] = useState(1);
  const [clubRoles, setClubRoles] = useState([]); // [clubName, role]
  const [studentInfo, setStudentInfo] = useState({ name: "", email: "", department: "", batch: "", session: "" });

  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState("");


  useEffect(() => {
    if (state === 3) {
      async function ff() {
        try {
          // console.log(clubRoles)
          const newStudentInfo = { ...studentInfo, clubRoles: clubRoles };
          const response = await createStudent(newStudentInfo);
          setMessage(response.message);
          setShowAlert(true);
        } catch (error) {
          setMessage("Error occurred while creating student");
          setShowAlert(true);
        } finally {
          setState(1);
          setClubRoles([]);
          setStudentInfo({ name: "", email: "", department: "", batch: "", session: "" });
        }
      }
      ff();
    }
  }, [state]);

  return (
    <>
      {showAlert && (
        <AlertCustomCloseIcon message={message} setShowAlert={setShowAlert} setMessage={setMessage} />
      )}
      {state === 1 && (
        // Render content when state is 1
        <StudentInformationComponent
          state={state}
          setState={setState}
          studentInfo={studentInfo}
          setStudentInfo={setStudentInfo}
        />
      )}
      {state === 2 && (
        // Render content when state is 2
        <ClubRoleComponent
          state={state}
          setState={setState}
          clubRoles={clubRoles}
          setClubRoles={setClubRoles}
        />
      )}
      {state === 3 && (
        // Render content when state is 3
        <div></div>
      )}
    </>
  )
}


