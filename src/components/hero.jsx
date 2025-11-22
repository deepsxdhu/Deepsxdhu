import myPic from "@/assets/spidey.jpg"


export default function Hero() {
    return (
        <div>

            {/* image  */}
            <div className="pt-[165px] absolute left-1/2 -translate-x-1/2 mt-6 ">
                <img src={myPic} className="rounded-full w-[110px] h-[110px]" />
            </div>


            {/* head name */}
            <div className="pt-[340px]">
                <div className="text-5xl font-[bricolage] font-bold font-stretch-expanded">
                    <h1>Hi, I'm Deepsxdhu</h1>
                </div>

                <div className="pl-[318px]  font-[bricolage]  ">
                    — A Full Stack Web Developer
                </div>
            </div>


            {/* about */}

            <div className="pt-[22px] font-sans ">
                <p>
                    19 , Computer Science student and MERN-stack developer.
                    I like to build clean, <br /> functional, and user-focused web experiences.
                    When I’m not coding, you’ll find me cooking, journaling or playing.<br />
                    Always open to projects, teamwork, and real-world impact.

                </p>
            </div>


            {/* buttons */}

            <div className="pt-[50px]">
                <button className="border rounded-xl text-xs  bg-black text-white dark:bg-white dark:text-black mr-[22px] py-[11px] px-[22px] transition duration-200">
                    Resume/CV
                </button>
                <button className="border rounded-xl text-xs  bg-black text-white dark:bg-white dark:text-black mr-[22px] py-[11px] px-[22px] transition duration-200">
                    Get in touch
                </button>
            </div>

        </div>
    )
}