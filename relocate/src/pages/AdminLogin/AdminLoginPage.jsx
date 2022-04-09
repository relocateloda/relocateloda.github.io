import { encryptStorageAdmin } from "../../utils/encryptStorage";


const AdminLoginPage = () => {
    encryptStorageAdmin.setItem("au", true);
    return (
        <div>
            <h1>Login form for admin here</h1>
        </div>
    )
}

export default AdminLoginPage