import { mapArray } from "../../main";

export function Tools()
{
    return(
        <div className="flex flex-row size-full gap-1">
            <button className="h-full w-4 bg-zinc-500 text-zinc-50">{"<"}</button>
            <div className="text-xl/9 font-(family-name:--font-haas-grot-disp-55-roman) overflow-y-scroll gap-2 grid grid-cols-4 grid-rows-7 justify-center size-full">
            {
                mapArray(28).map((v)=>{
                    return(<div className="bg-zinc-900 size-full"></div>)
                })
            }
            </div>
            <button className="h-full w-4 bg-zinc-500 text-zinc-50">{">"}</button>
        </div>
    )
}