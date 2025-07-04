import { ChevronDownIcon } from "lucide-react";
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber'
import { useMemo, useRef } from "react";
//bg-[url(earth_orbit.png)] 

const earthPos = new THREE.Vector3(2.5, -7, 0)

const loader = new THREE.TextureLoader();
const glowCircle = loader.load( '/glowCircle.png' );
glowCircle.colorSpace = THREE.SRGBColorSpace;
const glowCircle2 = loader.load( '/glowCircle2.png' );
glowCircle2.colorSpace = THREE.SRGBColorSpace;

export function Title()
{
    const loader = new THREE.TextureLoader();
    const starTexture = loader.load( '/2k_stars_milky_way.jpg' );
    starTexture.colorSpace = THREE.SRGBColorSpace;

    const lensTexture = loader.load( '/Texturelabs_LensFX_139S.jpg' );
    lensTexture.colorSpace = THREE.SRGBColorSpace;

    const scene = useMemo(()=>{
        const scene = new THREE.Scene()
        scene.background = starTexture
        return scene
    }, [])

    const targetObject = new THREE.Object3D();
    targetObject.position.copy(earthPos);
    scene.add(targetObject);

    return(
    <div className="size-full relative">    
         <div id="3input" className="absolute size-full z-0">
            <Canvas className="size-full" scene={scene}>
                <ambientLight color="#c9e6f5" intensity={1} />
                <directionalLight color="#ffdfab" isDirectionalLight intensity={100} position={[-24.3,8.5,-20]} target={targetObject} />
                
                <sprite scale={64} position={[-24.3,8.5,-20]}>
                    <spriteMaterial opacity={0.35} map={glowCircle2} color="#ffcd7d" blending={THREE.AdditiveBlending} transparent={true} />
                </sprite>
                <sprite scale={8} position={[-24.3,8.5,-20]}>
                    <spriteMaterial map={glowCircle} color="#ffcd7d" blending={THREE.AdditiveBlending} transparent={true} />
                </sprite>
                <sprite scale={108} position={[-27,10,-20]}>
                    <spriteMaterial map={lensTexture} opacity={.85} color="#ffcd7d" blending={THREE.AdditiveBlending} alphaMap={lensTexture} transparent={true} />
                </sprite>
                <Earth/>
            </Canvas>
        </div>
        <div className="flex absolute z-10 flex-col items-center justify-center size-full bg-transparent p-8">
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
    
    const earthTexture = loader.load( '/8k_earth_daymap.jpg' );
    earthTexture.colorSpace = THREE.SRGBColorSpace;
    const earthNormal = loader.load( '/8k_earth_normal_map.tif' );
    earthNormal.colorSpace = THREE.SRGBColorSpace;
    const earthSpecular = loader.load( '/8k_earth_specular_map.tif' );
    earthSpecular.colorSpace = THREE.SRGBColorSpace;

    const cloudTexture = loader.load( '/8k_earth_clouds.jpg' );
    cloudTexture.colorSpace = THREE.SRGBColorSpace;



    const earthRef = useRef<THREE.Mesh>(null)
    const cloudRef = useRef<THREE.Mesh>(null)


    useFrame((_state, dt)=>{
        if(!earthRef.current || !cloudRef.current) return

        earthRef.current.rotation.y = (earthRef.current.rotation.y + .01 * dt) % (2*Math.PI)
        cloudRef.current.rotation.y = (cloudRef.current.rotation.y + .02 * dt) % (2*Math.PI)
        console.log(earthRef.current.rotation)
    })

/*
    <mesh scale={8.06}>
                <sphereGeometry args={[1, 64, 64]}/>
                <shaderMaterial
                uniforms={glowUniforms}
                fragmentShader={glowFragShader}
                vertexShader={glowVertexShader}
                side={THREE.FrontSide}
                blending={THREE.AdditiveBlending}
                transparent={true}
                />
            </mesh>
    */
    return(
        <mesh position={earthPos} rotation={[0,0,0.25]}>
            <sprite scale={21} position={[0,0,1.5]} renderOrder={0}>
                <spriteMaterial map={glowCircle2} color="#0066ff" blending={THREE.AdditiveBlending} transparent={true} />
            </sprite>
            <sprite scale={16.125} position={[0,0,2]} renderOrder={0}>
                <spriteMaterial map={glowCircle} color="#00eaff" blending={THREE.AdditiveBlending} transparent={true} />
            </sprite>
            <mesh>
                <mesh scale={8} ref={earthRef}>
                    <sphereGeometry args={[1, 64, 64]} computeVertexNormals={()=>{}} />
                    <meshPhongMaterial map={earthTexture} side={THREE.FrontSide} specular={new THREE.Color("#fffb7d")} specularMap={earthSpecular} normalMap={earthNormal} />
                </mesh>
                <mesh scale={8.01} ref={cloudRef}>
                    <sphereGeometry args={[1, 64, 64]} computeVertexNormals={()=>{}}/>
                    <meshStandardMaterial map={cloudTexture} side={THREE.FrontSide} blending={THREE.AdditiveBlending} alphaMap={cloudTexture} transparent={true}/>
                </mesh>
            </mesh>
        </mesh>
    )
}