import { MouseParallaxChild } from "react-parallax-mouse";
import { Tools } from "./Tools";
import { mapArray } from "../../main";
import { projects } from "../../json/projects.json"
import { Tooltip } from "react-tooltip";
import { ChevronUp, Globe, Mouse } from "lucide-react";
import { useState } from "react";
import { ImageSelector } from "../ImageSelector";

type RarityMap = {[index:string] : string}
export const rarityColors:RarityMap = {
    "Uncommon": "bg-uncommon",
    "Rare": "bg-rare",
    "Legendary": "bg-legendary"
}

const xlRarityColors:RarityMap = {
    "Uncommon": "2xl:bg-uncommon",
    "Rare": "2xl:bg-rare",
    "Legendary": "2xl:bg-legendary"
}

export function Projects()
{
    const [selected, setSelected] = useState(-1)

    return(
        <MouseParallaxChild className="flex flex-col lg:grid lg:grid-cols-3 gap-8 size-full p-0 sm:p-2 overflow-y-scroll lg:overflow-auto">
            <div className="size-full h-fit lg:h-full col-span-2 lg:overflow-y-scroll">
                <div className="font-(family-name:--font-haas-grot-disp-55-roman) text-xl tracking-wide pl-2 sticky -top-2 lg:top-0 w-full bg-gray-950">PROJECTS</div>
                <div className="text-xl/9 font-(family-name:--font-haas-grot-disp-55-roman) p-2 flex flex-col 2xl:grid 2xl:grid-cols-2 2xl:grid-rows-4 gap-2 size-full h-fit">
                {
                    mapArray(8, 0).map((v)=>{

                        const p = projects[v]
                        
                        if(v >= projects.length)
                            return(<div className="w-full h-full bg-zinc-900 hidden 2xl:block"></div>)
                        else
                        return(
                            <>
                                <div id={"project"+v} onClick={()=>{selected != v && setSelected(v)}} className={`justify-start min-h-[40rem] ${v == selected && "row-span-4"} ${v == selected ? "2xl:min-h-[40rem]" : "2xl:min-h-36"} ${v == selected && "2xl:order-first"} w-full bg-zinc-800 border border-b-8 outline-0 outline-offset-4 outline-zinc-700 border-b-zinc-500 hover:outline-1 border-zinc-700 font-(family-name:--font-haas-grot-disp-65) `}>
                                    <div className={`text-left flex flex-row gap-4 p-2 ${rarityColors[p?.rarity] || "bg-rare"} ${v == selected ? (xlRarityColors[p?.rarity] || "2xl:bg-rare") : "2xl:bg-zinc-800 2xl:cursor-pointer 2xl:hover:bg-[#7a7a7a7a]"}`}>
                                        <img className="w-32 h-32 border border-zinc-700 bg-zinc-900 " src={p.images[0]}/>
                                        <div className="flex flex-col gap-2 w-full overflow-x-scroll">
                                            <div className="text-2xl tracking-wide flex flex-row gap-2">
                                                {p?.name}
                                                <button onClick={()=>setSelected(-1)} className={`my-auto hidden ${v == selected && "2xl:block"}`}>
                                                    <ChevronUp className="size-6"/>
                                                </button>   
                                            </div>
                                            <div className={`text-xl tracking-wide font-(family-name:--font-haas-grot-disp-55-roman) text-zinc-300 whitespace-pre-wrap hidden ${v == selected ? "2xl:hidden" : "2xl:line-clamp-3"}`}>{p?.description}</div>
                                            <div className={`flex flex-col gap-2 w-full ${v != selected && "2xl:hidden"}`}>
                                                {
                                                p.link != "" ?
                                                <a href={p.link} target="_blank" className="text-xl tracking-wide font-(family-name:--font-haas-grot-disp-55-roman) outline-0 outline-offset-4 hover:outline-1 text-zinc-300 flex flex-row w-fit p-2 gap-2">
                                                   <Globe className="my-auto size-6"/>
                                                   {p?.link.replace("https://", "")}
                                                </a>
                                                :
                                                <div className="text-xl tracking-wide font-(family-name:--font-haas-grot-disp-55-roman) text-zinc-300 py-2 flex flex-row gap-2">
                                                    <Globe className="my-auto size-6"/>
                                                    No link yet.
                                                </div>
                                                }
                                                <div className="text-xl font-(family-name:--font-haas-grot-disp-55-roman)">{p.time}</div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className={`block ${v == selected ? "2xl:block" : "2xl:hidden"}`}>
                                        <div className="text-xl/normal tracking-wide p-4 text-zinc-300 whitespace-pre-wrap font-(family-name:--font-haas-grot-disp-55-roman)">
                                            {p.description}
                                        </div>
                                        <div className="grid grid-cols-2 w-full">
                                            <div className="w-full p-4 pt-0">
                                                <div className="font-(family-name:--font-haas-grot-disp-65) text-[#5ca369] text-xl">TOOLS:</div>
                                                <div className="text-lg flex flex-col w-full gap-0.5 text-zinc-50 font-(family-name:--font-haas-grot-disp-55-roman)">
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
                                            </div>
                                            <div className="w-full p-4 pt-0">
                                                <div className="font-(family-name:--font-haas-grot-disp-65) text-[#5ca369] text-xl">IMAGES:</div>
                                                <ImageSelector images={p.images}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute hidden 2xl:block">
                                <Tooltip disableStyleInjection style={{backgroundColor: "rgb(0,0,0,0)", padding: 0}} anchorSelect={"#project"+v} float noArrow place="right" opacity={v == selected ? 0 : 1}>
                                        <div className="flex flex-col w-96 bg-zinc-800/90">
                                            <div className={`${rarityColors[p.rarity] || "bg-rare"} font-(family-name:--font-haas-grot-disp-65) text-3xl p-4 pb-2`}>
                                                {p.name.toUpperCase()}
                                                <div className="text-xl/normal tracking-wide text-zinc-300 font-(family-name:--font-haas-grot-disp-55-roman) flex flex-row w-full justify-between">
                                                    <div>{p.time}</div>
                                                    <div>{p.rarity}</div>
                                                </div>
                                            </div>
                                            <div className="italic text-xl/normal p-4 text-zinc-300 whitespace-pre-wrap">{p.description}</div>
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
                                </div>
                            </>
                        )
                    })
                }
                </div>
            </div>
            
            <div className="size-full h-fit lg:h-full lg:overflow-y-scroll">
                <div className="font-(family-name:--font-haas-grot-disp-55-roman) text-xl tracking-wide pl-2 sticky -top-2 lg:top-0 w-full bg-gray-950">TOOLS</div>
                <Tools/>
            </div>
        </MouseParallaxChild>
    )
}