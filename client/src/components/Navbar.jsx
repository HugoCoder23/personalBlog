import { useState } from "react";
import { BlogImage } from "./BlogImage";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

export const Navbar = ()=>{

    const [open, setOpen] = useState(false)

    return(
        <div className="w-full h-16 md:h-20 flex items-center justify-between">
            
            {/* {/* <Logo/> */}
            <Link to="/" className="flex items-center gap-4 text-3xl font-bold">
                <BlogImage src="logoCobal.png" alt="Logo" w={40} h={40}/>
                {/* <img src="/logo.png" width={32} height={32} alt="" /> */}
                <span>Christopher Alvarez</span>
            </Link>
            {/* <MobileMenu/> */}
            <div className="md:hidden">
                {/* Mobile Button */}
                <div className="cursor-pointer text-4xl" onClick={
                    ()=> setOpen(!open)    
                }>
                    {open ? "X" : "☰"}
                </div>
                {/* Mobile Link List */}
                <div className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 bg-[#e6e6ff] transition-all ease-in-out 
                    ${open ? "-right-0" : "-right-[100%]"}`}>
                    <Link to="/">Inicio</Link>
                    <Link to="/">Tendencias</Link>
                    <Link to="/">Más Popular</Link>
                    <Link to="/">Sobre Mí</Link>
                    <Link to="/">
                        <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
                            Login👋
                        </button>
                    </Link>
                </div>
            </div>
            {/* <DesktopMenu/> */}
            <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
                <Link to="/">Inicio</Link>
                <Link to="/">Tendencias</Link>
                <Link to="/">Más Popular</Link>
                <Link to="/">Sobre Mí</Link>
                <SignedOut>
                    <Link to="/login">
                        <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
                            Login👋
                        </button>
                    </Link>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>

        </div>
    )
}