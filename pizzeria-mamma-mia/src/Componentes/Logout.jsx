import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSession } from "../context/SessionContext";

const Logout = () => {
    const { logout } = useSession();
    const navigate = useNavigate();

    useEffect(() => {
        logout();
        navigate("/Login");
    }, []);

    return null;
};

export default Logout;
