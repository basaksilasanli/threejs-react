import React from "react";
export default function Plane ({ position }) {
	return (
		<mesh position={position} receiveShadow castShadow>
			<boxBufferGeometry attach="geometry" args={[4, 0.1, 4]}/>
			<meshStandardMaterial  attach="material" color={"#414141"} />
		</mesh>
	)
}