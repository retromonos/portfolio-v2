import { ChevronDownIcon } from "lucide-react";
import * as THREE from 'three';
import { createRoot } from 'react-dom/client'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from "react";
//bg-[url(earth_orbit.png)] 
export function Title()
{
    
    
    return(
    <div className="size-full relative">    
         <div id="3input" className="absolute size-full z-0">
            <Canvas className="size-full">
                <ambientLight intensity={1} />
                <directionalLight color="white" position={[0, 0, 5]} />
                <Earth/>
            </Canvas>
        </div>
        <div className="flex z-10 flex-col items-center justify-center size-full bg-black p-8 bg-cover">
            <div className="flex flex-col items-end text-[80px] text-right size-full font-(family-name:--font-haas-grot-disp-65)">
                <div className='w-fit'>Luke Cullen</div>
                <div className="text-[30px] border-t text-right size-full w-fit pt-2 font-(family-name:--font-haas-grot-disp-55-roman)">
                    Software Engineer | Designer | Full Stack Developer
                </div>
            </div>
            <div>
                <button className="bg-white text-2xl px-16 py-2 rounded-md relative font-(family-name:--font-haas-grot-disp-45) tracking-[0.25em]">
                    <div className='absolute top-0 left-0 w-full h-full outline animate-small-ping outline-offset-0 hover:animate-none hover:outline-offset-4'></div>
                    OPEN PORTFOLIO
                </button>
            </div>
            <ChevronDownIcon className='mt-8' />
        </div>
    </div>
    )
}

export function Earth()
{
    const loader = new THREE.TextureLoader();
    const earthTexture = loader.load( '/public/8k_earth_daymap.jpg' );
    earthTexture.colorSpace = THREE.SRGBColorSpace;

    const cloudTexture = loader.load( '/public/8k_earth_clouds.jpg' );
    cloudTexture.colorSpace = THREE.SRGBColorSpace;

    const earthPos = new THREE.Vector3(3, -7, 0)

    const earthRef = useRef<THREE.Mesh>(null)
    const cloudRef = useRef<THREE.Mesh>(null)

    useFrame((state, dt)=>{
        if(!earthRef.current || !cloudRef.current) return

        earthRef.current.rotation.y = (earthRef.current.rotation.y + .05 * dt) % (2*Math.PI)
        cloudRef.current.rotation.y = (cloudRef.current.rotation.y + .075 * dt) % (2*Math.PI)
        console.log(earthRef.current.rotation)
    })

    return(
        <mesh position={earthPos} rotation={[0,0,0.25]}>
            <mesh scale={8} ref={earthRef}>
                <sphereGeometry/>
                <meshStandardMaterial map={earthTexture} />
            </mesh>
            <mesh scale={8.1} ref={cloudRef}>
                <sphereGeometry/>
                <meshStandardMaterial map={cloudTexture} transparent={true} alphaMap={cloudTexture} />
            </mesh>
        </mesh>
    )
}