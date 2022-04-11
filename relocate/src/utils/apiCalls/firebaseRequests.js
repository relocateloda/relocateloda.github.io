import { collection, onSnapshot, orderBy, query, doc, setDoc, deleteDoc } from "firebase/firestore";
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

export const getPoposalsByCategory= (category, setData) => {
  const q = query(collection(db, `${category}_proposals`));
  return onSnapshot(q, (snapshot) => {
    setData(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  })
};

export const getOffersByCategory= (category, setData) => {
  const q = query(collection(db, `${category}_confirmed`));
  return onSnapshot(q, (snapshot) => {
    setData(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  })
};

export const editExistingProposal = async (category, payload, id) => {
  const docRef = doc(db, `${category}_proposals`, id);
  await setDoc(docRef, payload)
};

export const editExistingOffer = async (category, payload, id) => {
  const docRef = doc(db, `${category}_confirmed`, id);
  await setDoc(docRef, payload)
};

export const deleteProposal = async (category, id) => {
  const docRef = doc(db, `${category}_proposals`, id);
  await deleteDoc(docRef)
};

export const deleteOffer = async (category, id) => {
  const docRef = doc(db, `${category}_confirmed`, id);
  await deleteDoc(docRef)
};