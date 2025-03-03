import { useLoaderData } from "react-router-dom";
import { getLocalStorage, removeCardLocalStorage } from "../../utilities/localstorage";
import { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';

const DashBoard = () => {
    const [favoriteData, setFavoriteData] = useState([]);
    const data = useLoaderData();
    console.log(favoriteData)
    useEffect(() => {

        if (data.length > 0) {
            const localData = getLocalStorage()
            const saveCard = [];
            for (const id of localData) {
                const favorite = [...data].find(data => data.id === id);
                if (favorite) {
                    saveCard.push(favorite)
                }
            }
            setFavoriteData(saveCard)
        }
    }, [data])
    // react toast successful remove
    const removeData = () => toast.success("Your Card remove successful", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });


    // delete my localStorage data
    const handleRemoveData = (id) => {

        const remainingCard = favoriteData.filter(data => data.id !== id);
        setFavoriteData(remainingCard);
        removeCardLocalStorage(id)

    }
    return (
        <div className="my-16 mx-12 space-y-7">
            <div className="flex flex-col justify-center items-center ">
                <h1 className="text-4xl font-thin">Welcome to Dashboard</h1>
                <p className="text-xl font-thin">Manage coffee that you have previously added as favorite.You can view or remove them from here</p>
            </div>
            <div className="flex flex-wrap gap-3.5">
                {
                    favoriteData.map(item =>
                        <div className="w-96 h-76 rounded-xl relative ">
                            <MdDeleteForever onClick={() => {
                                removeData ()
                                handleRemoveData(item.id)
                            }} className="text-black text-2xl bg-red-500 rounded-xl transition hover:scale-150 absolute -right-1 -top-2 " />
                            <img className="w-full bg-center rounded-xl bg-cover h-full" src={item.image} alt="" />
                        </div>)
                }
            </div>
            <ToastContainer />
        </div>
    );
};

export default DashBoard;