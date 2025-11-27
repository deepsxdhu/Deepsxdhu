
export default function Skills() {

    const data = ["Javascript", "React", "Tailwind", "Bootstrap", "Node.js", "Express",  "MongoDB", "MySQL" , "Git" , "GitHub" ,"Hoopscotch", "Redux",];

    return (
        <div className="relative">

            {/* skills heading */}
            <h1 className="text-3xl md:text-4xl  pt-32 md:pt-40 lg:pt-52  font-bold font-[bricolage] ">
                Skills
            </h1>


            {/* skills list  */}
            <div className="px-4 md:px-5 py-4 md:py-6 flex flex-wrap gap-2 md:gap-4 mx-0 md:mx-40 lg:mx-60 justify-center text-xs md:text-sm  ">
                {data.map((skill, idx) => (
                    <span key={idx} className="relative text-xs sm:text-sm md:text-base  px-3 py-2 md:px-4 md:py-2 border rounded-lg text-sm bg-black text-white dark:bg-white dark:text-black mx-0.5 md:mx-0.75 ">
                        {skill}
                    </span>
                ))}
            </div>



        </div>
    )
}