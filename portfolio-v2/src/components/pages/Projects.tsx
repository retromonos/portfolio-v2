import { MouseParallaxChild } from "react-parallax-mouse";
import { Tools } from "./Tools";
import { mapArray } from "../../main";
import { projects } from "../../json/projects.json"

export function Projects()
{
    return(
        <MouseParallaxChild className="grid grid-cols-3 gap-8 size-full">
            <div className="text-xl/9 font-(family-name:--font-haas-grot-disp-55-roman) overflow-y-scroll col-span-2 grid grid-cols-2 gap-2 w-full">
            {
                mapArray(8).map((v)=>{
                    if(v >= projects.length)
                        return(<div className="size-full border bg-gray-900"></div>)
                    else
                    {
                        const p = projects[v]

                        return(
                        <div className="w-full flex flex-row gap-4 p-2 border font-(family-name:--font-haas-grot-disp-65) bg-gray-900">
                            <img className="size-32" src={p.images[0]}/>
                            {p?.name}
                        </div>)
                    } 
                })
            }
            </div>
            <Tools/>
        </MouseParallaxChild>
    )
}