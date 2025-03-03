import { Link} from "react-router-dom";


const Coffee = ({ coffee}) => {

    const { id, image, name, popularity, rating, origin, type, category } =coffee
 
    return (
        <div>
        
           <Link to={`/details/${id}`}  className="card transition hover:scale-105 bg-base-100 w-96 shadow-sm">
                <figure>
                    <img className="h-[230px] w-full bg-center object-center"
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="p-3">
                    <h1 className="text-2xl">{name}</h1>
                    <h1 className="text-[15px] font-medium">Category:{category}</h1>
                    <h1 className="text-[15px] font-medium">Type:{type}</h1>
                    <h1 className="text-[15px] font-medium">Origin:{origin}</h1>
                    <h1 className="text-[15px] font-medium">Popularity:{popularity}</h1>
                    <h1 className="text-[15px] font-medium">Rating:{rating}</h1>

                </div>
            </Link>
         
        </div>
    );
};

export default Coffee;