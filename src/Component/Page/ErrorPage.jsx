import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log('error' ,error.message )
    return (
        <div>
         
        </div>
    );
};

export default ErrorPage;