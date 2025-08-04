import { ChevronLast } from "lucide-react";
import { MouseParallaxChild } from "react-parallax-mouse";

export function Information({setPage}:{setPage:(p:number)=>void})
{
    return(
        <MouseParallaxChild className="text-xl/9 font-(family-name:--font-haas-grot-disp-55-roman) animate-fade-up size-full flex flex-col gap-4 lg:flex-row">
            <div className="flex flex-row justify-between lg:justify-start lg:flex-col gap-4 mx-auto w-full lg:w-fit px-8">
                <div className="relative size-28 sm:size-32 lg:size-40">
                    <img className="absolute size-28 sm:size-32 lg:size-40 animate-slow-spin" src="hexagon.svg"/>
                    <a target="_blank" href="https://www.linkedin.com/in/luke-cullen-319701305/" className="absolute rounded-full p-6 lg:p-8 border border-rare/50 bg-rare/25">
                        <img alt="LinkedIn" className="" src="linkedin.svg"/>
                    </a>
                </div>
                <div className="relative size-28 sm:size-32 lg:size-40">
                    <img className="absolute size-28 sm:size-32 lg:size-40 animate-slow-spin" src="octogon.svg"/>
                    <img className="absolute size-28 sm:size-32 lg:size-40 animate-slow-counter" src="octogon.svg"/>
                    <img className="absolute size-28 sm:size-32 lg:size-40" src="octo_o_circle.svg"/>
                    <a target="_blank" href="https://github.com/retromonos" className="absolute rounded-full size-28 sm:size-32 lg:size-40 p-4 lg:p-6 border border-uncommon/50 bg-uncommon/25">
                        <img alt="GitHub" className="" src="github_ot.svg"/>
                    </a>
                </div>
                <div className="relative size-28 sm:size-32 lg:size-40">
                    <img className="absolute size-28 sm:size-32 lg:size-40 animate-slow-spin" src="star.svg"/>
                    <img className="absolute size-28 sm:size-32 lg:size-40 animate-slow-counter" src="star.svg"/>
                    <img className="absolute size-28 sm:size-32 lg:size-40" src="octogon.svg"/>
                    <a target="_blank" href="LukeCullen_Resume06_25-1.pdf" className="absolute rounded-full size-28 sm:size-32 lg:size-40 p-8 lg:p-10 border border-crucible/50 bg-crucible/25">
                        <img alt="Resume" className="" src="fileicon.svg"/>
                    </a>
                </div>
            </div>
            <div className="w-full p-8 lg:order-first overflow-y-scroll mb-8">
                <div className="text-6xl/9 lg:text-8xl/9 font-(family-name:--font-haas-grot-disp-65)">
                    Welcome.
                </div>
                <div className="whitespace-pre-line text-2xl/11 lg:text-3xl/12 gap-4 font-(family-name:--font-haas-grot-disp-45) tracking-wider">
                    <br/>
                    <img src="Portrait.webp" className="inline float-left mr-8 size-48 outline border outline-offset-4 outline-zinc-700 border-zinc-700"/>
                    My name is Luke Cullen, and I’m a Computer Science student minoring in Data Science at the University of Central Florida. I’m currently helping organize the next <span className="font-(family-name:--font-haas-grot-disp-65)">KnightHacks</span> hackathon, as well as developing the non-profit I helped co-found, <span className="font-(family-name:--font-haas-grot-disp-65)">DenTraceX</span>.
                    <button onClick={()=>setPage(1)} className="text-xl bg-[#00000041] border border-[#c2c2c2] tracking-wide font-(family-name:--font-haas-grot-disp-55-roman) outline-0 outline-offset-4 hover:outline-1 flex flex-row text-zinc-300 w-fit p-2 gap-2">
                        <ChevronLast className="my-auto size-4 sm:size-6"/>
                        SEE EXPERIENCE
                    </button>
                    <div className="flex flex-col lg:grid lg:grid-cols-2 text-2xl/11 my-8 gap-8">
                        <p>
                            Professionally, my primary goal is to end up somewhere where I can make a difference in the world. I love the problem-solving tools that my career as a Software Engineer provides me with, and I’m always looking for more ways to use them. I hope that my current experience and projects help convey that this is where my passion lies.
                            <button onClick={()=>setPage(2)} className="my-2 bg-[#00000041] border border-[#c2c2c2] text-xl tracking-wide font-(family-name:--font-haas-grot-disp-55-roman) outline-0 outline-offset-4 hover:outline-1 flex flex-row text-zinc-300 w-fit p-1 p-2 gap-2">
                                <ChevronLast className="my-auto size-4 sm:size-6"/>
                                SEE PROJECTS
                            </button>
                        </p>
                        <p>
                            In my free time, I like going to local concerts, photography (if my camera wasn’t broken…), as well as drawing, playing games, and finding an excuse to be in nature.
                            <button onClick={()=>setPage(3)} className="my-2 bg-[#00000041] border border-[#c2c2c2] text-xl tracking-wide font-(family-name:--font-haas-grot-disp-55-roman) outline-0 outline-offset-4 hover:outline-1 flex flex-row text-zinc-300 w-fit p-1 p-2 gap-2">
                                <ChevronLast className="my-auto size-4 sm:size-6"/>
                                SEE MEDIA
                            </button>
                        </p>
                    </div>
                    
                </div>
            </div>
        </MouseParallaxChild>
    )
}