import { mapArray } from "../../main";

export function Tools()
{
    return(
        <div className="text-xl/9 font-(family-name:--font-haas-grot-disp-55-roman) overflow-y-scroll gap-2 grid grid-cols-4">
        {
            mapArray(20).map((v)=>{
                return(<div className="bg-gray-900 border size-full"></div>)
            })
        }
        </div>
    )
}