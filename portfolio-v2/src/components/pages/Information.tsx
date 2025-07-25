import { MouseParallaxChild } from "react-parallax-mouse";

export function Information()
{
    return(
        <MouseParallaxChild className="text-xl/9 font-(family-name:--font-haas-grot-disp-55-roman) animate-fade-up size-full flex flex-col gap-4 lg:flex-row">
            <div className="flex flex-row justify-between lg:justify-start lg:flex-col gap-4 mx-auto w-full lg:w-fit px-8">
                <div className="relative size-28 sm:size-32 lg:size-40">
                    <img className="absolute size-28 sm:size-32 lg:size-40 animate-slow-spin" src="hexagon.svg"/>
                    <a target="_blank" href="https://www.linkedin.com/in/luke-cullen-319701305/" className="absolute rounded-full p-6 lg:p-8 border border-rare/50 bg-rare/25">
                        <img alt="LinkedIn" className="" src="linkedin.svg"/>
                    </a>
                </div>
                <div className="relative size-28 sm:size-32 lg:size-40">
                    <img className="absolute size-28 sm:size-32 lg:size-40 animate-slow-spin" src="octogon.svg"/>
                    <img className="absolute size-28 sm:size-32 lg:size-40 animate-slow-counter" src="octogon.svg"/>
                    <img className="absolute size-28 sm:size-32 lg:size-40" src="octo_o_circle.svg"/>
                    <a target="_blank" href="https://github.com/retromonos" className="absolute rounded-full size-28 sm:size-32 lg:size-40 p-4 lg:p-6 border border-uncommon/50 bg-uncommon/25">
                        <img alt="GitHub" className="" src="github_ot.svg"/>
                    </a>
                </div>
                <div className="relative size-28 sm:size-32 lg:size-40">
                    <img className="absolute size-28 sm:size-32 lg:size-40 animate-slow-spin" src="star.svg"/>
                    <img className="absolute size-28 sm:size-32 lg:size-40 animate-slow-counter" src="star.svg"/>
                    <img className="absolute size-28 sm:size-32 lg:size-40" src="octogon.svg"/>
                    <a target="_blank" href="LukeCullen_Resume06_25-1.pdf" className="absolute rounded-full size-28 sm:size-32 lg:size-40 p-8 lg:p-10 border border-crucible/50 bg-crucible/25">
                        <img alt="Resume" className="" src="fileicon.svg"/>
                    </a>
                </div>
            </div>
            <div className="w-full p-8 lg:order-first overflow-y-scroll">
                <div className="text-8xl/9 font-(family-name:--font-haas-grot-disp-65)">
                    Hi, I'm Luke.
                </div>
                <div className="whitespace-pre-line">
                    <br/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet finibus purus, eget dictum quam malesuada et. Maecenas molestie nunc id lectus bibendum, at elementum turpis accumsan. Etiam semper luctus dolor eu euismod. Fusce libero ipsum, vestibulum nec congue sit amet, elementum id enim. Phasellus fermentum erat sit amet ultricies ornare. Fusce nisl justo, feugiat sit amet elementum at, porta eu tortor. Suspendisse potenti. Curabitur a cursus lacus. Proin pulvinar enim a odio ultricies egestas. Vivamus sollicitudin hendrerit rutrum. Nullam mollis sagittis nisi, at mollis elit lobortis nec. Suspendisse potenti. Nam facilisis sem sed leo euismod tincidunt. Ut feugiat massa neque. Nunc convallis pellentesque urna, quis mollis arcu maximus sed.
                    <br/><br/>
                    Duis venenatis venenatis ligula, nec varius ex fringilla eget. Aenean ornare, arcu at sodales semper, lorem felis lacinia lacus, vel sodales nisi diam ut nunc. Phasellus non lorem orci. Proin iaculis nunc sapien, sit amet placerat arcu dapibus vitae. Donec ultrices nulla non justo consequat facilisis. Aenean convallis ante justo, sit amet maximus massa viverra id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam augue sapien, scelerisque nec nisl in, placerat bibendum libero. Etiam bibendum ullamcorper neque, eu feugiat augue malesuada vel.
                    <br/><br/>
                    Sed euismod consectetur libero a imperdiet. Nam imperdiet felis nec dignissim sagittis. Nam nec suscipit dui. Cras venenatis gravida faucibus. Nunc lacinia fermentum nibh, non consectetur arcu tincidunt id. Aliquam pulvinar non sem eu bibendum. Donec accumsan, ex et rhoncus malesuada, magna magna fringilla metus, id bibendum nisi quam ut quam. Cras arcu orci, luctus eu condimentum imperdiet, blandit ac purus.
                    <br/><br/>
                    Aliquam lacinia imperdiet est, nec varius enim varius porta. Donec vulputate urna eget laoreet dapibus. Vestibulum tristique orci ut interdum consequat. Aliquam erat volutpat. Maecenas sollicitudin, quam sed tempus semper, neque erat ornare dolor, in pulvinar metus risus vel elit. Curabitur rhoncus, risus eget interdum interdum, nulla sapien commodo urna, sit amet suscipit nisl libero ut est. Morbi dapibus velit vulputate ante accumsan, eget hendrerit dolor lobortis. Quisque elementum quam quis risus finibus, non auctor lorem egestas. Curabitur venenatis, lectus ut facilisis fermentum, metus magna fermentum magna, ut cursus erat nibh non lorem. Nam vel fringilla dui. Etiam placerat in massa sit amet elementum. Praesent quis risus urna. Donec porttitor ac nulla a lobortis.
                    <br/><br/>
                    Maecenas in iaculis diam. Curabitur tempus eros vitae nibh fringilla tristique. Nullam imperdiet justo libero, eu rhoncus magna sollicitudin id. Aliquam fermentum sit amet ipsum et convallis. Aenean consequat auctor lectus, ac ultricies elit laoreet eu. Nam volutpat tortor mattis massa molestie aliquam. Phasellus tempus viverra sem et rhoncus. Nulla a lectus condimentum, volutpat ligula quis, tristique mi. Morbi vehicula ultricies dui, sit amet faucibus libero consectetur vel. In pretium arcu eget malesuada commodo. Curabitur lobortis ultricies velit, in maximus arcu egestas porta. Maecenas efficitur mattis velit eu condimentum. Vivamus euismod augue non mi iaculis feugiat. 
                </div>
            </div>
        </MouseParallaxChild>
    )
}