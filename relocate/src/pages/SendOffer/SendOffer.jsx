import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase-config";


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
        <div>
            <h1 onClick={handleSendNew}>SendOffer Form</h1>
        </div>
    )
}

export default SendOffer