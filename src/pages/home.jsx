import ContactForm from "@/components/contactform";
import Footer from "@/components/footer";
import Github from "@/components/github";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Starbackground from "@/components/starbackground";


export default function Home() {

    return (
        <div className="">


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
                <Hero />
            </div>

            {/* links */}

            {/* skills */}
            {/* Add my stack */}
            <div>
                <Skills />
            </div>

            {/* About me */}


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
                <ContactForm  />
            </div>


            {/* footer */}
            <div>
                <Footer />
            </div>


        </div>
    )
}