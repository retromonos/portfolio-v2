import { MouseParallaxChild } from "react-parallax-mouse";
import { media } from "../../json/media.json" 
import { MapPin } from "lucide-react";

export function Media()
{
    return(
        <MouseParallaxChild className="size-full animate-fade-up flex flex-col gap-0 overflow-y-scroll">
            <div className="text-xl/9 font-(family-name:--font-haas-grot-disp-55-roman) mb-2 px-8 w-full">
                <div/>
                <div className="col-span-5 lg:col-span-3 font-(family-name:--font-haas-grot-disp-55-roman) flex flex-row justify-between text-xl tracking-wide w-full">
                    MEDIA
                    <div className="text-zinc-500 tracking-wide">{`1 - ${media.length} / ${media.length}`}</div>
                </div>
                <div/>
            </div>
            
            <div className="text-xl/9 tracking-wide font-(family-name:--font-haas-grot-disp-55-roman) mb-4 flex flex-wrap flex-row justify-center size-fit px-8 gap-4">
                {
                    media.map((v)=>{
                        return(
                            <div className="relative border border-zinc-700 outline-zinc-700 outline-0 outline-offset-4 hover:outline">
                                <div className="absolute z-50 p-2 size-full flex flex-row gap-1 items-end bg-transparent bg-linear-to-t from-black/75 via-black/75 via-20% to-50% to-transparent sm:opacity-0 opacity-100 hover:opacity-100 transition-opacity duration-200">
                                    <MapPin className="mb-2 ml-1 size-5"/>
                                    {v.location}
                                </div>
                                <img className=" h-80" src={v.src}/>
                            </div>
                            
                        )
                    })
                }
            </div>
        </MouseParallaxChild>
    )
}