import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useLoader } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import * as THREE from 'three';

const ThreeDModel = () => {
    const objRef = useRef();

    return (
        <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[2.5, 7.5, 15]} />
            <OrbitControls />
            <group ref={objRef} position={[0, 0, 0]} />
            <Model objRef={objRef} />
        </Canvas>
    );
};

const Model = ({ objRef }) => {
    const obj = useLoader(OBJLoader, '/workspaces/CODESF/public/FinalBaseMesh.obj');

    return <primitive ref={objRef} object={obj} position={[0, 0, 0]} />;
};

export default ThreeDModel;
