import { useEffect, useState } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import db from "../../firebase-config";

const OffersCategories = () => {
  const [categories, setCAtegories] = useState();
  useEffect(() => {
    onSnapshot(collection(db, "categories"),(snapshot) => {
      console.log(snapshot.docs.map( doc => doc.data() ));
    })
  }, []);
  return (
    <div>
      <h1>OffersCategories</h1>
    </div>
  );
};

export default OffersCategories;
