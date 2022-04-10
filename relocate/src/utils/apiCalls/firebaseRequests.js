import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase-config";

export const getCategories = (setData) => {
  const q = query(collection(db, "categories"), orderBy("position", "asc"));
  return onSnapshot(q, (snapshot) => {
    setData(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  })
};
