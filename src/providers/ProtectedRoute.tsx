import { Navigate } from "react-router-dom";

import { useAuthContext } from "./AuthProvider";

interface ProtectedPageProps {
    children: JSX.Element;
}

const ProtectedRoute = (props: ProtectedPageProps) => {
    const { user } = useAuthContext();
    if (!user) {
        return <Navigate to="/signin" replace />
    }
    return props.children;
}

export default ProtectedRoute;