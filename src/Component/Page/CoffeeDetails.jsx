

import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addCardLocalStorage, getLocalStorage } from "../../utilities/localstorage";
import { ToastContainer, toast } from 'react-toastify';

const CoffeeDetails = () => {
    const { id } = useParams()
    const data = useLoaderData()
    console.log(data)
    const [search, setSearch] = useState([]);
    const [isFavorite,setFavorite]=useState(false)
    useEffect(() => {
        const check = [...data].find(data => data.id === parseInt(id));
        setSearch(check)
    }, [data, id])
    const { image, description, type, nutrition_info, origin, making_process, name, category, rating, popularity } = search
    const { calories, carbohydrates, fat } = nutrition_info || {}

    //   react toast 
    const notify = () => toast.success("Your favorite card add your dashbo",
        {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",

        });
    const error = () => toast.error('Your card already add', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",

    })
    const handleCheckLocalStorage = Id => {
        const checks = getLocalStorage()
        const remainingSearchCard = checks.find(check => check == Id)
        if (remainingSearchCard) {
            error()
        } else {
            notify()
            addCardLocalStorage(Id)
            setFavorite(!false)
        }
    }
    return (
        <div className="my-16 mx-16 space-y-8">
            <div className=" space-y-5">
                <p className="text-4xl font-thin">{description}</p>
                <img className="w-full bg-center bg-cover object-right-top h-[600px]  rounded-2xl" src={image} alt="" />
            </div>
            <div className="flex justify-between items-center text-[`8px]">
                <h1>
                    <p className="text-3xl font-medium">{name}</p>
                    <p><span className="text-xl font-medium">Popularity</span> :{popularity}</p>
                    <p><span className="text-xl font-medium">Rating</span> :{rating}</p>
                    <p><span className="text-xl font-medium">Origin</span> :{origin}</p>

                </h1>

                <button disabled={isFavorite} onClick={() => {
    
                    handleCheckLocalStorage(search.id)
                }} className="btn bg-warning text-[17px] ">Add Favorite</button>

            </div>
            {/*  */}
            <div>
                <h1 className=" text-2xl font-medium"><span className="text-3xl font-semibold ">Category: </span>{category}</h1>
                <h1 className="text-2xl font-medium">Type:<span className="text-xl ">{type}</span></h1>
                <p className="text-2xl">Making Process</p>
                <p className="text-xl font-extralight">{making_process}</p>
            </div>
            <div className="flex justify-between items-center ">
                <div >
                <h1 className="text-3xl font-medium">Nutrition Information</h1>
                <p className="flex flex-col text-2xl">
                    <span>Calories:{calories}</span>
                    <span>Fat:{fat}</span>
                    <span>Carbohydrates:{carbohydrates}</span>
                </p>
                </div>
                <div>
                    <img className="w-86 bg-cover object-center bg-center" src='/public/nutrition.png' alt="" />
                </div>
              
            </div>
            <ToastContainer />
        </div>

    );
};

export default CoffeeDetails;