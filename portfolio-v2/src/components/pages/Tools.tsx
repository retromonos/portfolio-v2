import { Tooltip } from "react-tooltip";

export const LangList = [
    "TypeScript", "Python", "Java", "Lua", "C", "C#", "C++"
]

export const ToolList = [
    "JWT", "Unity", "React", "Tailwind", "Clerk", "MySQL", "MongoDB", "Prisma", "Docker",
    "Zx", "ExpressJS", "tRPC", "Websockets", "Google Gemini", "OpenCV", "MediaPipe"
]

export const ToolInfo:{[index:string]: {image:string, fg:string, bg:string}} = {
    "React": {image:"tools/react.svg", fg:"text-[#61dafb]", bg:"from-zinc-800 to-zinc-950"},
    "C": {image:"tools/C_Programming_Language.svg", fg:"text-[#61dafb]", bg:"from-zinc-800 to-zinc-950"},
    "Clerk": {image:"tools/clerklogo.svg", fg:"text-[#61dafb]", bg:"from-zinc-100 to-zinc-300"},
    "TypeScript": {image:"tools/Typescript_logo_2020.svg", fg:"text-[#61dafb]", bg:"from-zinc-800 to-zinc-950"},
    "Python": {image:"tools/python-svgrepo-com.svg", fg:"text-[#61dafb]", bg:"from-zinc-800 to-zinc-950"},
    "Java": {image:"tools/java-icon.svg", fg:"text-[#61dafb]", bg:"from-zinc-800 to-zinc-950"},
    "Lua": {image:"tools/lua-official.svg", fg:"text-[#61dafb]", bg:"from-zinc-800 to-zinc-950"},
    "C#": {image:"tools/Logo_C_sharp.svg", fg:"text-[#61dafb]", bg:"from-zinc-800 to-zinc-950"},
    "C++": {image:"tools/ISO_C++_Logo.svg", fg:"text-[#61dafb]", bg:"from-zinc-800 to-zinc-950"},
    "JWT": {image:"tools/jwt-flower.png", fg:"text-[#61dafb]", bg:"from-purple-300 to-indigo-500"},
    "Unity": {image:"tools/unity.svg", fg:"text-[#61dafb]", bg:"from-zinc-100 to-zinc-300"},
    "Tailwind": {image:"tools/tailwindcss-mark.svg", fg:"text-[#61dafb]", bg:"from-zinc-800 to-zinc-950"},
    "MySQL": {image:"tools/mysql-icon.svg", fg:"text-[#61dafb]", bg:"from-orange-500 to-orange-600"},
    "MongoDB": {image:"tools/mongodb-icon-2.svg", fg:"text-[#61dafb]", bg:"from-green-800 to-green-950"},
    "Prisma": {image:"tools/Prisma-LightSymbol.svg", fg:"text-[#61dafb]", bg:"from-zinc-800 to-zinc-950"},
    "Docker": {image:"tools/docker-mark-white.svg", fg:"text-[#61dafb]", bg:"from-[#1D63ED] to-[#1D63ED]"},
    "Zx": {image:"tools/zx.svg", fg:"text-[#61dafb]", bg:"from-zinc-800 to-zinc-950"},
    "ExpressJS": {image:"tools/express-js.png", fg:"text-[#61dafb]", bg:"from-zinc-200 to-zinc-300"},
    "tRPC": {image:"tools/trpc.svg", fg:"text-[#61dafb]", bg:"from-zinc-800 to-zinc-950"},
    "Websockets": {image:"tools/WebSocket_colored_logo.svg", fg:"text-[#61dafb]", bg:"from-zinc-800 to-zinc-950"},
    "Google Gemini": {image:"tools/Google-gemini-icon.svg", fg:"text-[#61dafb]", bg:"from-zinc-100 to-zinc-300"},
    "OpenCV": {image:"tools/OpenCV.svg", fg:"text-[#61dafb]", bg:"from-zinc-100 to-zinc-300"},
    "MediaPipe": {image:"tools/mediapipe.png", fg:"text-[#61dafb]", bg:"from-zinc-100 to-zinc-300"}
}

export function Tools()
{
    return(
        <>
            <div className="font-(family-name:--font-haas-grot-disp-55-roman) text-xl tracking-wide sticky -top-2 lg:top-0 w-full bg-gray-950 pb-2">LANGUAGES</div>
            <div className="text-xl/9 font-(family-name:--font-haas-grot-disp-55-roman) overflow-y-scroll gap-2 flex flex-wrap flex-row justify-start size-fit mb-4">
            {
                LangList.map((v,i)=>{
                    return(
                        <>
                            
                            <div id={"lang"+i} className="size-20 border bg-linear-to-b from-zinc-200 to-zinc-400 p-0.5">
                                <div className={`${ToolInfo[v] ? ("bg-linear-to-b " + ToolInfo[v].bg) : "bg-zinc-700"} size-full p-2 flex`}>
                                    <img className={(ToolInfo[v] ? ToolInfo[v].fg : "text-zinc-100") + "border border-white size-full m-auto"} src={ToolInfo[v] ? ToolInfo[v].image : "tools/missing.webp"}></img>
                                </div>
                            </div>
                            <Tooltip delayHide={0} delayShow={0} disableStyleInjection style={{backgroundColor: "rgb(0,0,0,0)", padding: 0}} anchorSelect={"#lang"+i} float noArrow place="right" opacity={1}>
                                <div className="flex flex-col w-full bg-zinc-800/90">
                                    <div className={`bg-zinc-800 font-(family-name:--font-haas-grot-disp-65) text-3xl p-4 pb-2`}>
                                        {v.toUpperCase()}
                                        <div className="text-xl/normal tracking-wide text-zinc-300 font-(family-name:--font-haas-grot-disp-55-roman) flex flex-row w-full justify-between">
                                            <div>Language</div>
                                        </div>
                                    </div>
                                </div>
                            </Tooltip>
                        </>
                    )
                })
            }
            </div>
            <div className="font-(family-name:--font-haas-grot-disp-55-roman) text-xl tracking-wide sticky -top-2 lg:top-0 w-full bg-gray-950 pb-2">TOOLS</div>
            <div className="text-xl/9 font-(family-name:--font-haas-grot-disp-55-roman) overflow-y-scroll gap-2 flex flex-wrap flex-row justify-start size-fit">
            {
                ToolList.map((v,i)=>{
                    return(
                        <>
                            
                            <div id={"tool"+i} className="size-20 border bg-linear-to-b from-zinc-200 to-zinc-400 p-0.5">
                                <div className={`${ToolInfo[v] ? ("bg-linear-to-b " + ToolInfo[v].bg) : "bg-zinc-700"} size-full p-2 flex`}>
                                    <img className={(ToolInfo[v] ? ToolInfo[v].fg : "text-zinc-100") + "border border-white size-full m-auto"} src={ToolInfo[v] ? ToolInfo[v].image : "tools/missing.webp"}></img>
                                </div>
                            </div>
                            <Tooltip delayHide={0} delayShow={0} disableStyleInjection style={{backgroundColor: "rgb(0,0,0,0)", padding: 0}} anchorSelect={"#tool"+i} float noArrow place="right" opacity={1}>
                                <div className="flex flex-col w-full bg-zinc-800/90">
                                    <div className={`bg-zinc-800 font-(family-name:--font-haas-grot-disp-65) text-3xl p-4 pb-2`}>
                                        {v.toUpperCase()}
                                        <div className="text-xl/normal tracking-wide text-zinc-300 font-(family-name:--font-haas-grot-disp-55-roman) flex flex-row w-full justify-between">
                                            <div>Tool</div>
                                        </div>
                                    </div>
                                </div>
                            </Tooltip>
                        </>
                    )
                })
            }
            </div>
        </>

    )
}