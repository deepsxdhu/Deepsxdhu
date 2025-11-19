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
            <button onClick={toggletheme} className="fixed right-5 top-5 ">
                {isDarkMode ? <Sun className="h-6 w-10 text-yellow-300" /> : <Moon className="h-6 w-10 text-dark-900" />}
            </button>
        </>
    )

}