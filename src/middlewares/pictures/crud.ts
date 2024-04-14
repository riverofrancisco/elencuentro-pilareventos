import { db } from "../../config/firebase";
import { Section } from "../../interfaces/interfaces";
import { collection, doc, addDoc, setDoc, deleteDoc, getDocs } from "firebase/firestore"; 


const currentCollection: string = "pictures";

//GET
export const getPictures = async () => {
    const querySnapshot = await getDocs(collection(db, currentCollection));
    const myData = querySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})
    );
    return myData
}

//ADD
export const addPicture = async (item: Section) => {
    try{
        await addDoc(collection(db, currentCollection), {
            ...item
             })
        console.log(`Section ${item.en} added Succesfully`)
    } catch(error) {
        console.log(error)
    }
}

//DELETE
export const deletePicture = async (id: string) => {
   try{
    await deleteDoc(doc(db, currentCollection, id));
    console.log("Section Item deleted Succesfully")
   }catch(error){
    console.log({Error: error})
   }
}

//EDIT
export const setPicture = async (id: string, item: any) => {
    await setDoc(doc(db, currentCollection, id), {
...item
      });
      console.log(`Section ${item.en} updated succesfully.`)
}
