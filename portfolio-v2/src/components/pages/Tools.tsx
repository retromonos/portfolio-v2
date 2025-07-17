import { mapArray } from "../../main";

export function Tools()
{
    return(
        <div className="text-xl/9 font-(family-name:--font-haas-grot-disp-55-roman) overflow-y-scroll gap-2 flex flex-wrap flex-row justify-start size-fit">
        {
            mapArray(8, 0).map(()=>{
                return(<div className="bg-zinc-900 size-20"></div>)
            })
        }
        </div>
    )
}