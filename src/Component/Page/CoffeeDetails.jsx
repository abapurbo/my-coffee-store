import { useParams } from "react-router-dom";

const CoffeeDetails = () => {
    const id=useParams()
    return (
        <div className="mt-16">
            <h1>coffee{id}</h1>
        </div>
    );
};

export default CoffeeDetails;