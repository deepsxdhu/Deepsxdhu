import { House, Code, User, Github, Twitter, Linkedin } from "lucide-react";

import Themetoggle from "@/components/Themetoggle";


export default function Navbar() {
    return (

        <div className="
            w-[800px] py-[7px] px-[165px]
            flex fixed left-1/2 -translate-x-1/2 mt-6
            border rounded-3xl
            justify-between items-center
            backdrop-blur-sm bg-white/10 shadow-md
            z-50
            ">


            <a>
                <p className="nav-icon"><House /></p>
            </a>

            <a>
                <div className="nav-icon"><Code /></div>
            </a>

            <a>
                <div className="nav-icon"><User /></div>
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
