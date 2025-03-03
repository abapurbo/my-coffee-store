import { NavLink, useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";
const CoffeesCards = () => {
    const cards = useLoaderData()
    // useparams die amra routing jodi amra loader kore thaki thahole amra useparams die 
    const { category } = useParams()
  console.log(category)

    const [coffees, setCoffees] = useState([]);
    useEffect(() => {
        if (category) {
            const filteredByCategroy = [...cards].filter(card => card.category === category)
            setCoffees(filteredByCategroy)
        }
        else {
            setCoffees(cards.slice(0, 6))
        }
        

    }, [cards, category])

    return (
        <div className="space-y-7">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 mt-7">

                {
                    coffees.map((coffee,index)=>( <Card key={index} coffee={coffee}></Card>))
                }
             
            </div>
            <NavLink className="btn btn-warning text-xl font-semibold hover:shadow-lg hover:shadow-amber-300" to='/coffees' >View all</NavLink>
        </div>

    );
};

export default CoffeesCards;