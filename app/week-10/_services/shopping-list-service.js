import { db } from "../_utils/firebase";    
import { collection, getDocs, addDoc, query } from "firebase/firestore";

// Service for managing shopping list items

export async function getItems({ userId }) {
    const itemsCollection = collection(db, "shopping-items");
    const q = query(itemsCollection);
    const query = await getDocs(q);
    const snapshot = await getDocs(q);
    const items = [];   
    snapshot.forEach((doc) => {
        const data = doc.data();
        if (data.userId === userId) {
            items.push({ id: doc.id, ...data });
        }
    });


    return items;   

}

export async function addItem({ userId, item }) {
    const itemsCollection = collection(db, "shopping-items");
    const newItem = { userId, ...item };
    const docRef = await addDoc(itemsCollection, newItem);
    return docRef.id ;
  
}