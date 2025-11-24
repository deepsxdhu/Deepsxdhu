import { GitHubCalendar } from "react-github-calendar";

export default function Activity() {
    return (
        <div className="pt-[100px] text-center relative ">
            <h1 className="text-4xl font-bold font-[bricolage]">GitHub Activity</h1>
            <div className="flex justify-center pt-[20px] ">
                <span className="border border-dashed border-[2px] p-[20px] rounded-xl">
                    <GitHubCalendar
                    username="deepsxdhu"
                    blockSize={10}
                    blockMargin={3}
                    // theme={{
                    //     light: ["#1e1e2f", "#5a3e7a", "#7e5aa2", "#a87cc3", "#d9a9e6"],
                    //     dark: ["#1e1e2f", "#5a3e7a", "#7e5aa2", "#a87cc3", "#d9a9e6"]
                    // }}

                />
                </span>
            </div>
        </div>
    );
}
