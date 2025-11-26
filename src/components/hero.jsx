import myPic from "@/assets/spidey.jpg"


export default function Hero() {
    // { scrollToContact }

    // const gotoform = () => {
    //     scrollToContact();   // ⭐ Smooth scroll
    // };


    return (
        <div className="relative">

            {/* image  */}
            <div className="pt-[200px] flex justify-center relative  ">
                <img src={myPic} className="rounded-full w-[110px] h-[110px]" />
            </div>


            {/* head name */}
            <div className="pt-[60px]">
                <div className="text-5xl font-[bricolage] font-bold font-stretch-expanded">
                    <h1>Hi, I'm Deepsxdhu</h1>
                </div>

                <div className="font-[bricolage] pl-[290px]  ">
                    — A Full Stack Web Developer
                </div>
            </div>


            {/* about */}

            <div className="pt-[22px] font-sans font-medium ">
                <p>
                    19 , Computer Science student and MERN-stack developer.
                    I like to build clean, <br /> functional, and user-focused web experiences.
                    When I’m not coding, you’ll find me cooking, journaling or playing.<br />
                    Always open to projects, teamwork, and real-world impact.

                </p>
            </div>


            {/* buttons */}

            <div className="pt-[50px] ">
                <button className="border relative rounded-xl text-xs  bg-black text-white dark:bg-white dark:text-black mx-[11px]  py-[11px] px-[22px] transition duration-200">
                    Resume/CV
                </button>
                {/* onClick={gotoform} */}
                <button  className="border relative  rounded-xl text-xs  bg-black text-white dark:bg-white dark:text-black   mx-[11px]  py-[11px] px-[22px] transition duration-200">
                    Get in touch
                </button>
            </div>

        </div>
    )
}