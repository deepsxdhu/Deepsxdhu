import myPic from "@/assets/spidey.jpg"


export default function Hero() {


    return (
        <div className="relative" id="herosection">

            {/* image  */}
            <div className="pt-32 md:pt-40 lg:pt-52 flex justify-center relative  ">
                <img src={myPic} className="rounded-full w-24 md:w-28 h-24 md:h-28" />
            </div>


            {/* head name */}
            <div className=" pt-10 md:pt-14 lg:pt-16 ">
                <div className="text-3xl md:text-4xl lg:text-5xl font-[bricolage] font-bold font-stretch-expanded ">
                    <h1>Hi, I'm Deepsxdhu</h1>
                </div>

                <div className="font-[bricolage] pl-0 md:pl-40 lg:pl-64">
                    — A Full Stack Web Developer
                </div>
            </div>


            {/* about */}

            <div className="pt-4 md:pt-6 px-6 md:px-8text-xs sm:text-sm md:text-base  font-sans font-medium ">
                <p>
                    19 , Computer Science student and MERN-stack developer.
                    I like to build clean, <br /> functional, and user-focused web experiences.
                    When I’m not coding, you’ll find me cooking, journaling or playing.<br />
                    Always open to projects, teamwork, and real-world impact.

                </p>
            </div>


            {/* buttons */}

            <div className="pt-6 md:pt-10 ">
                <button className="border relative rounded-xl text-xs  bg-black text-white dark:bg-white dark:text-black mx-2 md:mx-3  py-2.5 px-4 md:px-5 transition duration-200">
                    Resume/CV
                </button>
                <button 
                    className="border relative  rounded-xl text-xs  bg-black text-white dark:bg-white dark:text-black   mx-2 md:mx-3  py-2.5 px-4 md:px-5 transition duration-200">
                    Get in touch
                </button>
            </div>

        </div>
    )
}