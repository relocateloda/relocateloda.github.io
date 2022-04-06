import styles from "./TeamCard.module.scss";
import logo from "../../assets/logo.png"


const TeamCard = () => {
  return (
    <div className={styles.navbar}>
      <p>Львівська Обласна</p> 
      <img className={styles.logo} src={logo} />
      <p>Державна Aдмінісрація</p>
    </div>
  );
};


export default TeamCard;