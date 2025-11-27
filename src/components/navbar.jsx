import { House, Code, User, Github, Twitter, Linkedin } from "lucide-react";

import Themetoggle from "@/components/Themetoggle";


export default function Navbar() {
    return (

        <div className="
            w-[300px] sm:w-[400px] md:w-[600px] lg:w-[800px] py-1.5 sm:py-1.5 md:py-2 px-4 sm:px-10 md:px-20 lg:px-40
            flex fixed left-1/2 -translate-x-1/2 mt-6
            border rounded-3xl
            justify-between items-center
            backdrop-blur-sm bg-white/10 shadow-md
            z-50
            ">


            <a>
                <button 
                    className="nav-icon"><House /></button>
            </a>

            <a>
                <button 
                    className="nav-icon"><Code /></button>
            </a>

            <a>
                <button className="nav-icon"><User /></button>
            </a>


            <p>|</p>

            <a href="https://github.com/deepsxdhu">
                <div className="nav-icon"><Github /></div>
            </a>

            <a href="https://x.com/deepsxdhu">
                <div className="nav-icon"><Twitter /></div>
            </a>

            <a href="https://www.linkedin.com/in/deepsxdhu">
                <div className="nav-icon"><Linkedin /></div>
            </a>

            <p>|</p>

            <div className="nav-icon"><Themetoggle /></div>
        </div>

    )
}
