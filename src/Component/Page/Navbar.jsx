import { NavLink } from "react-router-dom";
import { useState } from "react";
import { RiMenuLine } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import './Navbar.css'
const Navbar = () => {
    const [open,setOpen]=useState(false)
    return (
        <div className=" backdrop-blur-xl bg-white/30 z-50 fixed w-full">
        <nav className="flex justify-between mx-4 items-center p-4 ">
            <h1 className="text-3xl">COOK_BOOK</h1>
            <div onClick={()=>setOpen(!open)} className="md:hidden">
                {
                    open===true?<MdClose className="text-2xl"/>: <RiMenuLine className="text-2xl"/>
                }
           
            </div>
            <div className={` text-xl ${open?'right-2 top-20 backdrop-blur-2xl text-blue-500 shadow-lg border-2  p-4 rounded-lg':'-right-32  top-20'} md:shadow-none md:text-blue-500 md:backdrop-blur-none border-none duration-1000 flex flex-col md:flex-row md:static absolute`}>
                <NavLink to='/' className={({isActive})=>`mr-5 ${isActive?'active':''}`}>Home</NavLink>
                <NavLink to='coffees' className={({isActive})=>`mr-5 ${isActive?'active':''}`}>Coffees</NavLink>
                <NavLink to='dashboard' className={({isActive})=>`mr-5 ${isActive?'active':''}`}>Dashboard</NavLink>
            </div>
        </nav>
    </div>
    );
};

export default Navbar;