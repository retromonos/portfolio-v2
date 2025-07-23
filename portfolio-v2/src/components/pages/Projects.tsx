import { MouseParallaxChild } from "react-parallax-mouse";
import { ToolInfo, Tools } from "./Tools";
import { mapArray } from "../../main";
import { projects } from "../../json/projects.json"
import { Tooltip } from "react-tooltip";
import { Calendar, ChevronUp, Globe, Mouse } from "lucide-react";
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

const gradientRarity:RarityMap = {
    "Uncommon": "2xl:bg-linear-to-l 2xl:from-uncommon 2xl:to-zinc-800 2xl:to-50%",
    "Rare": "2xl:bg-linear-to-l 2xl:from-rare 2xl:to-zinc-800 2xl:to-50%",
    "Legendary": "2xl:bg-linear-to-l 2xl:from-legendary 2xl:to-zinc-800 2xl:to-50%"
}

export function Projects()
{
    const [selected, setSelected] = useState(-1)

    return(
        <MouseParallaxChild className="flex flex-col animate-fade-up lg:grid lg:grid-cols-3 gap-8 size-full p-0 sm:p-2 overflow-y-scroll lg:overflow-auto">
            <div className="size-full h-fit lg:h-full p-4 sm:p-0 col-span-2 lg:overflow-y-scroll">
                <div className="font-(family-name:--font-haas-grot-disp-55-roman) flex flex-row justify-between text-xl tracking-wide sm:pl-2 lg:top-0 w-full">
                    PROJECTS
                    <div className="text-zinc-500 tracking-wide">{`1 - ${projects.length} / ${projects.length}`}</div>
                </div>
                <div className="text-xl/9 font-(family-name:--font-haas-grot-disp-55-roman) p-0 pt-2 sm:p-2 flex flex-col 2xl:grid 2xl:grid-cols-2 2xl:grid-rows-4 gap-8 lg:gap-2 size-full h-fit">
                {
                    mapArray(8, 0).map((v)=>{

                        const p = projects[v]
                        
                        if(v >= projects.length)
                            return(<div className="w-full h-full bg-zinc-900 hidden 2xl:block"></div>)
                        else
                        return(
                            <>
                                <div id={"project"+v} onClick={()=>{selected != v && setSelected(v)}} className={`justify-start ${v == selected && "row-span-4 animate-expand"} ${v == selected ? "2xl:min-h-[40rem]" : "2xl:min-h-36"} ${v == selected && "2xl:order-first"} w-full bg-zinc-800 border border-b-8 outline-0 outline-offset-4 outline-zinc-700 border-b-zinc-500 hover:outline-1 border-zinc-700 font-(family-name:--font-haas-grot-disp-65) `}>
                                    <div className={`text-left flex flex-row gap-4 p-2 ${rarityColors[p?.rarity] || "bg-rare"} ${v == selected ? (xlRarityColors[p?.rarity] || "2xl:bg-rare") : (gradientRarity[p?.rarity] || "2xl:bg-zinc-800") + " 2xl:cursor-pointer 2xl:hover:from-[#7a7a7a7a] 2xl:hover:to-[#7a7a7a7a]"}`}>
                                        <img className="size-24 sm:size-32 border border-zinc-700 bg-zinc-900 " src={p.images[0]}/>
                                        <div className="flex flex-col gap-1 sm:gap-2 w-full overflow-x-scroll">
                                            <div className="text-lg sm:text-2xl tracking-wide flex flex-row gap-2">
                                                {p?.name}
                                                <button onClick={()=>setSelected(-1)} className={`my-auto hidden ${v == selected && "2xl:block"}`}>
                                                    <ChevronUp className="size-6"/>
                                                </button>   
                                            </div>
                                            <div className={`text-xl tracking-wide font-(family-name:--font-haas-grot-disp-55-roman) text-zinc-300 whitespace-pre-wrap hidden ${v == selected ? "2xl:hidden" : "2xl:line-clamp-3"}`}>{p?.description}</div>
                                            <div className={`flex flex-col gap-2 w-full ${v != selected && "2xl:hidden"}`}>
                                                {
                                                p.link != "" ?
                                                <a href={p.link} target="_blank" className="text-base sm:text-xl tracking-wide font-(family-name:--font-haas-grot-disp-55-roman) outline-0 outline-offset-4 hover:outline-1 text-zinc-300 flex flex-row w-fit p-1 sm:p-2 gap-2">
                                                   <Globe className="my-auto size-4 sm:size-6"/>
                                                   {p?.link.replace("https://", "")}
                                                </a>
                                                :
                                                <div className="text-xl tracking-wide font-(family-name:--font-haas-grot-disp-55-roman) text-zinc-300 py-2 flex flex-row gap-2">
                                                    <Globe className="my-auto size-6"/>
                                                    No link yet.
                                                </div>
                                                }
                                                <div className="flex flex-row gap-1 text-base sm:text-xl text-zinc-300 font-(family-name:--font-haas-grot-disp-55-roman)">
                                                    <Calendar className="my-auto size-4"/>
                                                    {p.time}
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className={`block ${v == selected ? "2xl:block animate-fade" : "2xl:hidden"}`}>
                                        <div className="text-base sm:text-xl/normal tracking-wide p-4 text-zinc-300 whitespace-pre-wrap font-(family-name:--font-haas-grot-disp-55-roman)">
                                            {p.description}
                                        </div>
                                        <div className="grid grid-cols-2 w-full">
                                            <div className="w-full p-4 pt-0">
                                                <div className="font-(family-name:--font-haas-grot-disp-65) text-[#5ca369] text-lg sm:text-xl">TOOLS:</div>
                                                <div className="text-sm sm:text-lg flex flex-col w-full gap-0.5 text-zinc-50 font-(family-name:--font-haas-grot-disp-55-roman)">
                                                {
                                                    p.tools.map((v)=>{
                                                        return(
                                                        <div className="flex flex-row gap-2">
                                                            <img className="size-6 my-auto" src={ToolInfo[v] ? ToolInfo[v].image : "tools/missing.webp"}/>
                                                            {v}
                                                        </div>)
                                                    })
                                                }
                                                </div>
                                            </div>
                                            <div className="w-full p-4 pt-0">
                                                <div className="font-(family-name:--font-haas-grot-disp-65) text-[#5ca369] text-lg sm:text-xl">IMAGES:</div>
                                                <ImageSelector images={p.images}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute hidden z-50 2xl:block">
                                <Tooltip delayHide={0} delayShow={0} disableStyleInjection style={{backgroundColor: "rgb(0,0,0,0)", padding: 0}} anchorSelect={"#project"+v} float noArrow place="right" opacity={v == selected ? 0 : 1}>
                                        <div className="flex flex-col w-96 bg-zinc-800/90">
                                            <div className={`${rarityColors[p.rarity] || "bg-rare"} font-(family-name:--font-haas-grot-disp-65) text-3xl p-4 pb-2`}>
                                                {p.name.toUpperCase()}
                                                <div className="text-xl/normal tracking-wide text-zinc-300 font-(family-name:--font-haas-grot-disp-55-roman) flex flex-row w-full justify-between">
                                                    <div className="flex flex-row gap-1">
                                                        <Calendar className="my-auto size-4"/>
                                                        {p.time}
                                                    </div>
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
                                                        <img className="size-6 my-auto" src={ToolInfo[v] ? ToolInfo[v].image : "tools/bullet.webp"}/>
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
            
            <div className="size-full h-fit lg:h-full lg:overflow-y-scroll p-4 sm:p-0">
                <Tools/>
            </div>
        </MouseParallaxChild>
    )
}