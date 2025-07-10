import { MouseParallaxChild } from "react-parallax-mouse";
import { Tools } from "./Tools";

export function Projects()
{
    return(
        <MouseParallaxChild className="flex flex-row gap-2 size-full">
            <div className="text-xl/9 font-(family-name:--font-haas-grot-disp-55-roman) overflow-y-scroll grid grid-cols-2 w-full">
                <div>t</div>
                <div>t</div>
                <div>t</div>
                <div>t</div>
                <div>t</div>
                <div>t</div>
            </div>
            <Tools/>
        </MouseParallaxChild>
    )
}