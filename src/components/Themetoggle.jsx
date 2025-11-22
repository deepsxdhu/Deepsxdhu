import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react"

export default function Themetoggle() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedtheme = localStorage.getItem("theme");
        if (storedtheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark")
        } else {
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }
    }, [])

    const toggletheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    }


    return (
        <>
            <button onClick={toggletheme} className="">
                {isDarkMode ? <Sun className="w-5 h-5 text-black-300" /> : <Moon className=" w-5 h-5 text-dark-900" />}
            </button>


        </>
    )

}