import { MouseParallaxChild } from "react-parallax-mouse";
import { Tools } from "./Tools";
import { mapArray } from "../../main";
import { projects } from "../../json/projects.json"
import { Tooltip } from "react-tooltip";
import { ChevronUp, Globe, Mouse } from "lucide-react";
import { useState } from "react";

type RarityMap = {[index:string] : string}
export const rarityColors:RarityMap = {
    "Uncommon": "bg-uncommon",
    "Rare": "bg-rare",
    "Legendary": "bg-legendary"
}

export function Projects()
{
    const [selected, setSelected] = useState(-1)

    return(
        <MouseParallaxChild className="grid grid-cols-3 gap-8 size-full p-8 pb-16 overflow-y-scroll">
            <div className="flex flex-col justify-center size-full col-span-2">
                <div className="font-(family-name:--font-haas-grot-disp-55-roman) text-xl tracking-wide pl-2">PROJECTS</div>
                <div className="text-xl/9 font-(family-name:--font-haas-grot-disp-55-roman) overflow-y-scroll p-2 grid grid-cols-2 grid-rows-4 gap-2 w-full">
                {
                    mapArray(8, 0).map((v)=>{
                        if(selected != -1)
                        {
                            if(v == selected % 2)
                            {
                                const p = projects[selected]

                                return(
                                    <div className="row-span-4 flex flex-col size-full max-h-[40rem] border border-b-8 outline-0 outline-offset-4 outline-zinc-700 border-b-zinc-500 hover:outline-1 border-zinc-700 font-(family-name:--font-haas-grot-disp-65) bg-zinc-800">
                                        <div className={`text-left flex flex-row gap-4 p-2 ${rarityColors[p.rarity] || "bg-rare"}`}>
                                            <img className="w-32 h-32 border border-zinc-700 bg-zinc-900 " src={p.images[0]}/>
                                            <div className="flex flex-col gap-2 w-full">
                                                <div className="text-2xl tracking-wide flex flex-row gap-2">
                                                    {p?.name}
                                                    <ChevronUp onClick={()=>setSelected(-1)} className="my-auto cursor-pointer size-6"/>
                                                </div>
                                                {
                                                    p.link != "" ?
                                                    <a href={p.link} target="_blank" className="text-xl tracking-wide font-(family-name:--font-haas-grot-disp-55-roman) text-zinc-300 p-2 flex flex-row gap-2">
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
                                        <div className="text-xl/normal p-4 text-zinc-300 whitespace-pre-wrap font-(family-name:--font-haas-grot-disp-55-roman)">
                                            {p.description}
                                        </div>
                                        <div className="grid grid-cols-3 w-full overflow-y-hidden">
                                            <div className="flex flex-col gap-1 w-full p-4 pt-0">
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
                                            <div className="col-span-2 w-full p-4 pt-0">
                                                <div className="font-(family-name:--font-haas-grot-disp-65) text-[#5ca369] text-xl">IMAGES:</div>
                                                <div className="border p-1 border-zinc-700 bg-zinc-900 overflow-y-scroll">
                                                {
                                                    p.images.map((v,i)=>{
                                                        if(i == 0) return

                                                        return(<img className="w-full" src={v}/>)
                                                    })
                                                }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            if(v % 2 == selected % 2) return
                        }
                        

                        if(v >= projects.length)
                            return(<div className="w-full h-full bg-zinc-900"></div>)
                        else
                        {
                            const p = projects[v]

                            return(
                            <>
                                <button id={"project"+v} onClick={()=>setSelected(v)} className="w-full text-left h-full flex flex-row gap-4 p-2 border border-b-8 outline-0 outline-offset-4 outline-zinc-700 border-b-zinc-500 hover:outline-1 border-zinc-700 font-(family-name:--font-haas-grot-disp-65) bg-zinc-800">
                                    <img className="w-32 h-32 border border-zinc-700 bg-zinc-900 " src={p.images[0]}/>
                                    <div className="flex flex-col gap-2">
                                        <div className="text-2xl tracking-wide">{p?.name}</div>
                                        <div className="text-xl tracking-wide font-(family-name:--font-haas-grot-disp-55-roman) text-zinc-300 line-clamp-3 whitespace-pre-wrap">{p?.description}</div>
                                    </div>
                                </button>
                                <Tooltip disableStyleInjection style={{backgroundColor: "rgb(0,0,0,0)", padding: 0}} anchorSelect={"#project"+v} float noArrow place="right" opacity={1}>
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