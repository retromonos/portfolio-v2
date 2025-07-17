import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

export function ImageSelector({images}:{images: string[]})
{
    const [ind, setInd] = useState(1)

    if(images.length <= 1)
    return(<div className="font-(family-name:--font-haas-grot-disp-55-roman)">No images.</div>)

    return(
        <div className="font-(family-name:--font-haas-grot-disp-55-roman)">
            <img className="border p-1 border-zinc-700 bg-zinc-900 w-full" src={images[ind]}/>
            <div className="flex flex-row justify-between p-1 mt-1">
                <button disabled={ind <= 1} onClick={()=>setInd(ind > 1 ? ind-1 : 1)} className="p-2 bg-[#0000008a] border border-[#c2c2c2] outline-0 outline-offset-4 hover:outline-1"><ChevronLeft/></button>
                <div>{ind + " / " + (images.length-1)}</div>
                <button disabled={ind >= images.length-1} onClick={()=>setInd(ind < images.length-1 ? ind+1 : images.length-1)} className="p-2 bg-[#0000008a] border border-[#c2c2c2] outline-0 outline-offset-4 hover:outline-1"><ChevronRight/></button>
            </div>
        </div>
    )
}