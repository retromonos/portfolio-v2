import { Briefcase, Camera, CornerLeftUp, Info, Wrench } from "lucide-react";
import { MouseParallaxContainer } from "react-parallax-mouse";
import { useHotkeys } from 'react-hotkeys-hook'
import { useState } from "react";
import { Information } from "./pages/Information";
import { Projects } from "./pages/Projects";
import { Experience } from "./pages/Experience";
import { projects } from "../json/projects.json"
import { LangList, ToolList } from "./pages/Tools";

export function MainDoc({reset}:{reset:()=>void})
{
    useHotkeys('esc', reset)

    const [page, setPage] = useState(0)

    return(
        <div id="maindoc" className="bg-linear-270 to-75% from-[#060d21] to-gray-950 size-full p-0 sm:p-2">
            <MouseParallaxContainer globalFactorX={0.025} globalFactorY={0.025} className="border-0 sm:border-2 border-gray-700 size-full flex flex-row p-0 lg:p-2 font-(family-name:--font-haas-grot-disp-65)">
                <div className="flex flex-col gap-4 w-full">
                    <div className="flex flex-row gap-8 w-full justify-between text-[#dedede] p-4">
                        <button onClick={reset} className="text-lg text-right tracking-wider border border-[#c2c2c2] outline-[#c2c2c2] outline-offset-0 px-2 py-1 hover:outline hover:outline-offset-4">
                            <div className="flex flex-row gap-1 p-1">
                                <CornerLeftUp/>
                                <div className="hidden md:block">ESC</div>
                            </div>
                        </button>
                        <div className="flex flex-row gap-4 lg:gap-8">
                            <button onClick={()=>setPage(0)} className={`${page == 0 ? "text-[#dedede] border-[#dedede] border-b-2" : "text-[#dedede8f] border-[#dedede8f]" } text-2xl text-right tracking-wider px-4 py-1`}>
                                <div className="hidden md:block">INFO</div>
                                <Info className="md:hidden"/>
                            </button>
                            <button onClick={()=>setPage(1)} className={`${page == 1 ? "text-[#dedede] border-[#dedede] border-b-2" : "text-[#dedede8f] border-[#dedede8f]" } text-2xl text-right tracking-wider px-4 py-1`}>
                                <div className="hidden md:block">EXPERIENCE</div>
                                <Briefcase className="md:hidden"/>
                            </button>
                            <button onClick={()=>setPage(2)} className={`${page == 2 ? "text-[#dedede] border-[#dedede] border-b-2" : "text-[#dedede8f] border-[#dedede8f]" } text-2xl text-right tracking-wider px-4 py-1`}>
                                <div className="hidden md:block">PROJECTS</div>
                                <Wrench className="md:hidden"/>
                            </button>
                            <button onClick={()=>setPage(3)} className={`${page == 3 ? "text-[#dedede] border-[#dedede] border-b-2" : "text-[#dedede8f] border-[#dedede8f]" } text-2xl text-right tracking-wider px-4 py-1`}>
                                <div className="hidden md:block">MEDIA</div>
                                <Camera className="md:hidden"/>
                            </button>
                        </div>
                    </div>
                    {
                    page == 0 ? <Information/> :
                    page == 1 ? <Experience/> :  
                    page == 2 ? <Projects/> :
                    page == 3 ? <div>Photos</div> : <div/>
                    }
                    <div className={`hidden animate-fade-up tracking-wide font-(family-name:--font-haas-grot-disp-55-roman) ${page == 2 && "2xl:flex"} p-4 flex-row gap-8 text-xl text-zinc-400`}>
                        {`${projects.length + ToolList.length + LangList.length} / ∞`}
                        <div className="text-zinc-500">Total Project and Skill Capacity</div>
                    </div>
                </div>
                
            </MouseParallaxContainer>
        </div>
    )
}