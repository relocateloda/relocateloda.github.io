import { encryptStorageAdmin } from "../../utils/encryptStorage";
import styles from "./AdminProposals.module.scss"
import Navbar from "../../Atom/Navbar/Navbar";

const AdminProposals = () => {
    return (
        <div className={styles.container}>
            <Navbar />
            <h1 className={styles.headerText}>Редагування погоджених та неперевірених пропозицій</h1>
            <div className={styles.flexBox}>
                <div>
                    <h3>Редагування погоджених пропозицій</h3>
                </div>
                <div>
                    <h3>Редагування неперевірених пропозицій</h3>
                </div>
            </div>
        </div>
    )
}

export default AdminProposals