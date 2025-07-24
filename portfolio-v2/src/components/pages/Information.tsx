import { MouseParallaxChild } from "react-parallax-mouse";

export function Information()
{
    return(
        <MouseParallaxChild className="text-xl/9 font-(family-name:--font-haas-grot-disp-55-roman) animate-fade-up overflow-y-scroll size-full flex flex-col gap-4 lg:flex-row">
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
            <div className="w-full px-8 lg:order-first">
                <div className="text-3xl/9 font-(family-name:--font-haas-grot-disp-55-roman)">
                    Hi, I'm Luke.
                </div>
            </div>
        </MouseParallaxChild>
    )
}