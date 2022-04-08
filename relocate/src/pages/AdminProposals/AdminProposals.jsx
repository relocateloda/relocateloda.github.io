import { encryptStorageAdmin } from "../../utils/encryptStorage";


const AdminProposals = () => {
    encryptStorageAdmin.setItem("au", false);
    return (
        <div>
            <h1>Admin PAGE WITH Proposals</h1>
        </div>
    )
}

export default AdminProposals