import styles from "./CategoryPage.module.scss";
import { useEffect, useState } from "react";
import { onSnapshot, collection, orderBy, query } from "firebase/firestore";


import OffersCards from "../../Atom/OfferCards/OfferCards";
import Navbar from "../../Atom/Navbar/Navbar";
import Footer from  "../../Atom/Footer/Footer"
import { db } from "../../firebase-config";
import { getCategories } from "../../utils/apiCalls/firebaseRequests";


const CategoryPage= () => {

  return (
    <div className={styles.container}>
      <Navbar />
<h1>CategoryPage</h1>
      <Footer />
    </div>
  );
};

export default CategoryPage;
