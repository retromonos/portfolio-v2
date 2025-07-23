import { MouseParallaxChild } from "react-parallax-mouse";
import { jobs } from "../../json/experience.json" 
import { rarityColors } from "./Projects";
import { Building, Calendar, Globe, MapPin } from "lucide-react";

export function Experience()
{
    return(
        <MouseParallaxChild className="text-xl/9 animate-fade-up font-(family-name:--font-haas-grot-disp-55-roman) overflow-y-scroll px-4 md:px-8 lg:px-0 grid grid-cols-5 gap-4 w-full">
        <div/>
        <div className="col-span-5 lg:col-span-3 font-(family-name:--font-haas-grot-disp-55-roman) flex flex-row justify-between text-xl tracking-wide lg:top-0 w-full">
            EXPERIENCE
            <div className="text-zinc-500 tracking-wide">{`1 - ${jobs.length} / ${jobs.length}`}</div>
        </div>
        <div/>
        {
            jobs.map((v, i)=>{
                return(
                    <>
                    <div/>
                    <div id={"job"+i} className={`mx-auto col-span-5 lg:col-span-3 w-full bg-zinc-800 border border-b-8 outline-0 outline-offset-4 outline-zinc-700 border-b-zinc-500 hover:outline-1 border-zinc-700 font-(family-name:--font-haas-grot-disp-65) `}>
                        <div className={`text-left flex flex-col gap-2 p-2 ${rarityColors[v.rarity] || "bg-rare"}`}>
                            <div className={`text-left flex flex-row gap-4`}>
                                <img className="size-18 sm:size-24 border border-zinc-700 bg-zinc-900 " src={v.logo}/>
                                <div className="flex flex-col justify-between gap-1 lg:gap-2 w-full overflow-x-scroll">
                                    <div className="text-2xl sm:text-4xl tracking-wide">
                                        {v.title}
                                    </div>
                                    <div className="flex flex-row gap-2">
                                        {
                                        v.links.map((l)=>{
                                            return(
                                                <a href={l} target="_blank" className="text-base sm:text-xl tracking-wide font-(family-name:--font-haas-grot-disp-55-roman) outline-0 outline-offset-4 hover:outline-1 text-zinc-300 flex flex-row w-fit p-1 sm:p-2 gap-2">
                                                    <Globe className="my-auto size-4 sm:size-6"/>
                                                    {l.replace("https://", "")}
                                                </a>
                                            )
                                        })
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className={`flex flex-row gap-2 w-full`}>
                                <div className="flex flex-row gap-1 text-base sm:text-xl text-zinc-300 font-(family-name:--font-haas-grot-disp-55-roman)">
                                    <Building className="my-auto size-4"/>
                                    {v.name}
                                </div>
                                <div className="flex flex-row gap-1 text-base sm:text-xl text-zinc-300 font-(family-name:--font-haas-grot-disp-55-roman)">
                                    <Calendar className="my-auto size-4"/>
                                    {v.time}
                                </div>
                                <div className="flex flex-row gap-1 text-base sm:text-xl text-zinc-300 font-(family-name:--font-haas-grot-disp-55-roman)">
                                    <MapPin className="my-auto size-4"/>
                                    {v.location}
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="text-base sm:text-xl/normal tracking-wide p-4 text-zinc-300 whitespace-pre-wrap font-(family-name:--font-haas-grot-disp-55-roman)">
                                {v.description}
                            </div>
                            <div className="w-full p-4 pt-0">
                                <div className="font-(family-name:--font-haas-grot-disp-65) text-[#5ca369] text-lg sm:text-xl">TASKS:</div>
                                <ul className="text-base sm:text-xl/normal tracking-wide w-full text-zinc-50 font-(family-name:--font-haas-grot-disp-55-roman)">
                                {
                                    v.bullets.map((v)=>{
                                        return(<li className="gap-1.5">{v}</li>)
                                    })
                                }
                                </ul>
                                <div className="font-(family-name:--font-haas-grot-disp-65) text-[#5ca369] pt-2 text-lg sm:text-xl">SKILLS:</div>
                                <div className="text-base sm:text-xl/normal tracking-wide flex flex-row flex-wrap gap-2 w-full text-zinc-50 font-(family-name:--font-haas-grot-disp-55-roman)">
                                {
                                    v.skills.map((v)=>{
                                        return(<div className="border p-1 px-1.5 border-zinc-700 bg-zinc-900">{v}</div>)
                                    })
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div/>
                    </>
                )
            })
        }
        </MouseParallaxChild>
    )
}