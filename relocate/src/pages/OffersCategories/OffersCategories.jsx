import styles from "./OffersCategories.module.scss";
import { useEffect, useState } from "react";
import { onSnapshot, collection, orderBy, query } from "firebase/firestore";


import OffersCards from "../../Atom/OfferCards/OfferCards";
import Navbar from "../../Atom/Navbar/Navbar";
import Footer from  "../../Atom/Footer/Footer"
import { db } from "../../firebase-config";


const OffersCategories= () => {
    const [categories, setCategories] = useState(null);
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
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.wrapper}>
          { categories && categories.map(cat => <OffersCards categorie={cat} />)}
      </div>
      <Footer />
    </div>
  );
};

export default OffersCategories;
