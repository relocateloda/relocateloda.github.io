import styles from "./OffersCategories.module.scss";


import OffersCards from "../../Atom/OfferCards/OfferCards";


const OffersCategories= () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <OffersCards />
        <OffersCards />
        <OffersCards />
        <OffersCards />
        <OffersCards />
        <OffersCards />
      </div>
    </div>
  );
};

export default OffersCategories;
