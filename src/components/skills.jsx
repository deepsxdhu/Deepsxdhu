
export default function Skills() {

    const data = ["Javascript", "Redux", "Node.js", "React", "MongoDB", "Express", "REST", "EJS" , "Tailwind", "Hoopscotch", "Bootstrap"];

    return (
        <div className="relative">

            {/* skills heading */}
            <h1 className="text-4xl pt-[200px] font-bold font-[bricolage] ">
                Skills
            </h1>


            {/* skills list  */}
            <div className="pt-[20px] flex flex-wrap gap-2 mx-[350px] justify-center text-sm  ">
                {data.map((skill, idx) => (
                    <span key={idx} className="relative px-4 py-2 border rounded-lg text-sm bg-black text-white dark:bg-white dark:text-black mx-[5px]">
                        {skill}
                    </span>

                ))}
            </div>



        </div>
    )
}