import { Navigate, useLocation } from 'react-router';
import Loading from '../Pages/LoadingPage/Loading';
import useAuth from '../Hook/useAuth';

const PrivateRoutes = ({children}) => {

    const { user, loading } = useAuth();

    const location = useLocation();

    if(loading) {
        return <Loading></Loading>;
    }

    if(!user) {
        return <Navigate to="/login" state={location.pathname}></Navigate>
    }

    return children
};

export default PrivateRoutes;