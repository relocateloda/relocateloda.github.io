import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase-config";
import styles from  "./SendOffer.module.scss"
import Navbar from "../../Atom/Navbar/Navbar";
import Footer from "../../Atom/Footer/Footer";
import OfferForm from "../../Atom/OfferForm/OfferForm";


const SendOffer = () => {
   const handleSendNew = async () => {
       const collectionRef = collection(db, "other_proposals")
        const payload = {
           name: "234",
           phone: "234" ,
           img: "23423" ,
           contact_person: "234234",
           code: "234",
           description: "234",
           proposal: "234234",
        }
       const docRef = await addDoc(collectionRef, payload);
       // console.log(docRef.id);
   }
    return (
        <div className={styles.container}>
            <Navbar />
            <OfferForm />
            <Footer />
        </div>
    )
}

export default SendOffer