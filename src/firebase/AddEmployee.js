// src/firebase/AddEmployee.js
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase"; // Import db from firebase.js

const addEmployee = async (employeeData) => {
  try {
    const docRef = await addDoc(collection(db, "employees"), employeeData);
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
};

export default addEmployee;