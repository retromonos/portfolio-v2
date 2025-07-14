import { MouseParallaxChild } from "react-parallax-mouse";
import { Tools } from "./Tools";
import { mapArray } from "../../main";
import { projects } from "../../json/projects.json"
import { Tooltip } from "react-tooltip";
import { Mouse } from "lucide-react";

export function Projects()
{
    return(
        <MouseParallaxChild className="grid grid-cols-3 gap-8 size-full p-8 pb-16">
            <div className="flex flex-col justify-center size-full col-span-2">
                <div className="font-(family-name:--font-haas-grot-disp-55-roman) text-xl tracking-wide pl-2">PROJECTS</div>
                <div className="text-xl/9 font-(family-name:--font-haas-grot-disp-55-roman) overflow-y-scroll p-2 grid grid-cols-2 grid-rows-4 gap-2 w-full">
                {
                    mapArray(8).map((v)=>{
                        if(v >= projects.length)
                            return(<div className="w-full h-full bg-zinc-900"></div>)
                        else
                        {
                            const p = projects[v]

                            return(
                            <>
                                <button id={"project"+v} className="w-full text-left h-full flex flex-row gap-4 p-2 border border-b-8 outline-0 outline-offset-4 outline-zinc-700 border-b-zinc-500 hover:outline-1 border-zinc-700 font-(family-name:--font-haas-grot-disp-65) bg-zinc-800">
                                    <img className="w-32 h-32 border border-zinc-700 bg-zinc-900 " src={p.images[0]}/>
                                    <div className="flex flex-col gap-2">
                                        <div className="text-2xl tracking-wide">{p?.name}</div>
                                        <div className="text-xl tracking-wide font-(family-name:--font-haas-grot-disp-55-roman) text-zinc-300 line-clamp-3">{p?.description}</div>
                                    </div>
                                </button>
                                <Tooltip disableStyleInjection style={{backgroundColor: "rgb(0,0,0,0)", padding: 0}} anchorSelect={"#project"+v} float noArrow place="right" opacity={1}>
                                    <div className="flex flex-col w-96 bg-zinc-800/90">
                                        <div className="bg-[#623b74] font-(family-name:--font-haas-grot-disp-65) text-3xl p-4 pb-2">
                                            {p.name.toUpperCase()}
                                            <div className="text-xl/normal tracking-wide text-zinc-300 font-(family-name:--font-haas-grot-disp-55-roman) flex flex-row w-full justify-between">
                                                <div>{p.time}</div>
                                                <div>{p.rarity}</div>
                                            </div>
                                        </div>
                                        <div className="italic text-xl/normal p-4 text-zinc-300">{p.description}</div>
                                        <div className="font-(family-name:--font-haas-grot-disp-65) text-[#5ca369] text-xl p-4 pt-0 pb-1">TOOLS:</div>
                                        <div className="text-lg p-4 pt-0 flex flex-col w-full gap-0.5 text-zinc-50">
                                        {
                                            p.tools.map((v)=>{
                                                return(
                                                <div className="flex flex-row gap-2">
                                                    <img className="size-6 my-auto" src="profile_temp.png"/>
                                                    {v}
                                                </div>)
                                            })
                                        }
                                        </div>
                                        <div className="bg-zinc-950 w-full flex flex-row justify-end gap-1 text-lg px-2">
                                            <Mouse className="my-auto size-5"/>
                                            Inspect
                                        </div>
                                    </div>
                                </Tooltip>
                            </>)
                        } 
                    })
                }
                </div>
            </div>
            <div className="flex flex-col justify-center size-full gap-1">
                <div className="font-(family-name:--font-haas-grot-disp-55-roman) tracking-wide text-xl">TOOLS</div>
                <Tools/>
            </div>
        </MouseParallaxChild>
    )
}