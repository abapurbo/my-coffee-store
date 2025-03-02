import { useLoaderData } from "react-router-dom";
import Coffee from "./Coffee";
import {  useState } from "react";


const Coffees = () => {

    const datas = useLoaderData();
    const [coffees,setCoffees] = useState(datas)
    console.log('aa' ,coffees)
    const handleSort=sortBy=>{
        if(sortBy==='popularity'){
            //sorting popularity
            const sorted=[...datas].sort((a,b)=>b.popularity-a.popularity)
            setCoffees(sorted)
        }else if(sortBy==='rating'){
            //sorting rating
            const ratingSort=[...datas].sort((a,b)=>a.rating-b.rating);
            setCoffees(ratingSort)
        }
    }
  
    return (
        <div>

            <div className="flex justify-between items-center mt-12 px-12">
                <div className="text-2xl font-thin">
                    <h1>Sort Coffee&apos;s By Popularity & Rating-&gt;</h1>
                </div>
                <div className="space-x-2">
                    <button onClick={() =>handleSort('popularity')} className="btn btn-warning text-xl font-semibold">Sort By Popularity</button>
                    <button onClick={() =>handleSort('rating')} className="btn btn-warning text-xl font-semibold">Sort By Rating</button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9  container p-12">

                {

                    coffees.map(coffee => <Coffee key={coffee.id} coffee={coffee}></Coffee>)
                }
            </div>
        </div>

    );
};

export default Coffees;