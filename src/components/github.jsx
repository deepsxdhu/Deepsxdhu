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
                    theme={{
                        light: ["#ebedf0", "#9be9a8", "#30c463", "#30a14e", "#19863cff"],
                        dark: ["#ebedf0", "#9be9a8", "#30c463", "#30a14e", "#19863cff"]
                    }}

                />
                </span>
            </div>
        </div>
    );
}
