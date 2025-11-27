import { GitHubCalendar } from "react-github-calendar";

export default function Activity() {
    return (
        <div className="hidden md:flex flex flex-nowrap justify-center ">
            <a href="https://github.com/deepsxdhu">
                <div className="pt-24 md:pt-28 lg:pt-32 relative  ">
                    <h1 className="text-3xl md:text-4xl   font-bold font-[bricolage]">GitHub Activity</h1>
                    <div className="flex justify-center w-full sm:w-[31.25] md:w-[37.5] lg:w-[46.25] px-4 md:px-5 py-4 md:py-6  ">
                        <span className="border border-dashed  border-2 px-6 md:px-10  py-4 md:py-6 rounded-xl">
                            <GitHubCalendar
                                username="deepsxdhu"
                                blockSize={10}
                                blockMargin={3}
                                theme={{
                                    light: ["#ebedf0", "#19863cff", "#30a14e", "#30c463", "#56d364"],
                                    dark: ["#ebedf0", "#19863cff", "#30a14e", "#30c463", "#56d364"]
                                }}

                            />
                        </span>
                    </div>
                </div>
            </a>
        </div>
    );
}
