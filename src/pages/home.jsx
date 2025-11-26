// import { useRef } from "react";
import ContactForm from "@/components/contactform";
import Footer from "@/components/footer";
import Github from "@/components/github";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Starbackground from "@/components/starbackground";


export default function Home() {

    // const contactRef = useRef(null);

    return (
        <div className="">

            {/* themetoggle */}


            {/* starbackground */}
            <div>
                <Starbackground />
            </div>

            {/* navbar */}
            <div>
                <Navbar />
            </div>

            {/* hero  */}
            <div>
                <Hero  />
                {/* scrollToContact={() => contactRef.current.scrollIntoView({ behavior: "smooth" })} */}
            </div>

            {/* links */}

            {/* skills */}
            <div>
                <Skills />
            </div>

            {/* projects */}
            <div>
                <Projects />
            </div>

            {/* git */}
            <div>
                <Github />
            </div>

            {/* exp/ache. */}

            {/* contact */}
            <div >
                {/* ref={contactRef} */}
                <ContactForm />
            </div>


            {/* footer */}
            <div>
                <Footer />
            </div>


        </div>
    )
}