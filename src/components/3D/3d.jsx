import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export const ThreeDModel = () => {
    const refContainer = useRef(null);
    useEffect(() => {
        // === THREE.JS CODE START ===
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);

        const light = new THREE.PointLight(0xffffff, 1000)
        light.position.set(2.5, 7.5, 15)
        scene.add(light)

        // document.body.appendChild( renderer.domElement );
        // use ref as a mount point of the Three.js scene instead of the document.body
        refContainer.current && refContainer.current.appendChild(renderer.domElement);

        // Load OBJ file
        const loader = new OBJLoader();
        loader.load(
            '3D/church.obj', // replace with the path to your OBJ file src\components\3D\church.obj
            function (object) {
                scene.add(object);
                camera.position.z = 5;
                var animate = function () {
                    requestAnimationFrame(animate);
                    object.rotation.x += 0.01;
                    object.rotation.y += 0.01;
                    renderer.render(scene, camera);
                };
                animate();
            },
            function (xhr) {
                console.log((xhr.loaded / xhr.total * 100) + '% loaded');
            },
            function (error) {
                console.error('An error happened', error);
            }
        );
    }, []);

    return <div ref={refContainer} className="aspect-[42/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]"></div>;
};