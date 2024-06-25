import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase';

export const addEmployee = async (employee) => {
  try {
    await addDoc(collection(db, 'employees'), employee);
    console.log("Employee added successfully");
  } catch (error) {
    console.error("Error adding employee: ", error);
  }
};