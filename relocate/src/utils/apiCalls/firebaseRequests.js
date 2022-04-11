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


export const login = (path, set, setError) => {
  const q = query(collection(db, path));
  return onSnapshot(q, (snapshot) => {
    const doc = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    doc.length === 0
        ? setError(true)
        : set(doc[0].isAdmin);
  })
};