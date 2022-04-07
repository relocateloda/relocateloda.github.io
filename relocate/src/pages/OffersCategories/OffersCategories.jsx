import { useEffect, useState } from "react";
import { onSnapshot, collection, orderBy, query } from "firebase/firestore";
import db from "../../firebase-config";

const OffersCategories = () => {
  const [categories, setCategories] = useState([]);
  const q = query(collection(db, "categories"), orderBy("position", "asc"));
  useEffect(
    () =>
      onSnapshot(q, (snapshot) => {
        setCategories(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      }),
    []
  );
  console.log(categories);
  return (
    <div>
      <h1>OffersCategories</h1>
    </div>
  );
};

export default OffersCategories;
