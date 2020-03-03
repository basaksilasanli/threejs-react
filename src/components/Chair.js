import React, {useRef} from "react";
import {useFrame, useLoader, } from "react-three-fiber";
import {MeshStandardMaterial} from 'three';
import chairGlb from "../Mavi_sandalye.glb";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import Plane from './Plane';

export default function Chair({color}) {
	const gltf = useLoader( GLTFLoader, chairGlb);
	const chairMeshGroup = useRef();

	const clothMaterial = new MeshStandardMaterial({
		...gltf.scene.children[0].children[0].children[0].children[0].children[0].material,
		color:color,
	});
	gltf.scene.children[0].children[0].children[0].children[0].children[0].material = clothMaterial;
	gltf.scene.children[0].children[0].children[0].children[0].children[2].material = clothMaterial;

	useFrame(() => (chairMeshGroup.current.rotation.y += 0.01 , chairMeshGroup.current.rotation.x = Math.sin(chairMeshGroup.current.rotation.y)/3));
	return (
			<mesh ref={chairMeshGroup}>
					<primitive
						object={gltf.scene}
						position={[0, -2, 0]}
						scale={[4,4,4]}
					/>
				<Plane position={[0, -2, 0]}/>
			</mesh>
	)
}