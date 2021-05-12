/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'

type GLTFResult = GLTF & {
  nodes: {
    Island: THREE.Mesh
    Building1: THREE.Mesh
    Building2: THREE.Mesh
    Cube003: THREE.Mesh
    Cube003_1: THREE.Mesh
    Building4: THREE.Mesh
    Cube006: THREE.Mesh
    Cube006_1: THREE.Mesh
    Building6: THREE.Mesh
    Building7: THREE.Mesh
    Building8: THREE.Mesh
    Building9: THREE.Mesh
    Building11: THREE.Mesh
    Building12: THREE.Mesh
    Building13: THREE.Mesh
    Cube015: THREE.Mesh
    Cube015_1: THREE.Mesh
    Building10: THREE.Mesh
    Building15: THREE.Mesh
    Building16: THREE.Mesh
    Building17: THREE.Mesh
    Building18: THREE.Mesh
    Building19: THREE.Mesh
    Building20: THREE.Mesh
    Building21: THREE.Mesh
    Building22: THREE.Mesh
    Building23: THREE.Mesh
    Building27: THREE.Mesh
    Building26: THREE.Mesh
    Building25: THREE.Mesh
    Building24: THREE.Mesh
    Building31: THREE.Mesh
    Building30: THREE.Mesh
    Building29: THREE.Mesh
    Building28: THREE.Mesh
    Building33: THREE.Mesh
    Building32: THREE.Mesh
    Building38: THREE.Mesh
    Building37: THREE.Mesh
    Building36: THREE.Mesh
    Building35: THREE.Mesh
    Building34: THREE.Mesh
    Building39: THREE.Mesh
    Water: THREE.Mesh
  }
  materials: {
    Floor: THREE.MeshStandardMaterial
    Buildings: THREE.MeshStandardMaterial
    Water: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('assets/models/testCity.glb') as GLTFResult

  function displayInfo() {
    alert("Dit gebouw is roze! Hier kan je op den duur lezen over de duurzaamheid van dit object..")
  }

  const [waterHeight, setWaterHeight] = useState(0.41)

  function raiseWater() {
    setWaterHeight(waterHeight + 0.5)
  }

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Island.geometry}
        material={materials.Floor}
        position={[3.84, -6.35, 7.69]}
        scale={[61.5, 2.05, 61.5]}
      />
      <mesh
        geometry={nodes.Building1.geometry}
        material={nodes.Building1.material}
        position={[3.84, 3.9, -8.71]}
        scale={[4.1, 8.2, 4.1]}
        // onPointerUp instead of onClick for mobile support
        onPointerUp={ displayInfo }
      >
        <meshStandardMaterial color="hotpink" />
      </mesh>
      <mesh
        geometry={nodes.Building2.geometry}
        material={nodes.Building2.material}
        position={[20.24, -0.2, -8.71]}
        scale={[4.1, 4.1, 4.1]}
      />
      <group position={[-28.96, 8, -33.31]} scale={[4.1, 12.3, 4.1]}>
        <mesh geometry={nodes.Cube003.geometry} material={nodes.Cube003.material} />
        <mesh geometry={nodes.Cube003_1.geometry} material={nodes.Cube003_1.material} />
      </group>
      <mesh
        geometry={nodes.Building4.geometry}
        material={nodes.Building4.material}
        position={[3.84, 3.9, 40.49]}
        scale={[12.3, 8.2, 12.3]}
      />
      <group position={[3.84, 3.9, 14.87]} scale={[4.1, 8.2, 3.07]}>
        <mesh geometry={nodes.Cube006.geometry} material={nodes.Cube006.material} />
        <mesh geometry={nodes.Cube006_1.geometry} material={nodes.Cube006_1.material} />
      </group>
      <mesh
        geometry={nodes.Building6.geometry}
        material={nodes.Building6.material}
        position={[12.04, 8, -8.71]}
        scale={[4.1, 12.3, 4.1]}
      />
      <mesh
        geometry={nodes.Building7.geometry}
        material={nodes.Building7.material}
        position={[20.24, 8, 11.79]}
        scale={[4.1, 12.3, 8.2]}
      />
      <mesh
        geometry={nodes.Building8.geometry}
        material={nodes.Building8.material}
        position={[20.24, 8, 32.29]}
        scale={[4.1, 12.3, 4.1]}
      />
      <mesh
        geometry={nodes.Building9.geometry}
        material={nodes.Building9.material}
        position={[32.54, -0.2, 15.89]}
        scale={[8.2, 4.1, 4.1]}
      />
      <mesh
        geometry={nodes.Building11.geometry}
        material={nodes.Building11.material}
        position={[-12.56, 8, -8.71]}
        scale={[4.1, 12.3, 4.1]}
      />
      <mesh
        geometry={nodes.Building12.geometry}
        material={nodes.Building12.material}
        position={[28.44, 12.1, 7.69]}
        scale={[4.1, 16.4, 4.1]}
      />
      <mesh
        geometry={nodes.Building13.geometry}
        material={nodes.Building13.material}
        position={[3.84, -0.2, 56.89]}
        scale={[8.2, 4.1, 4.1]}
      />
      <group position={[-20.76, 3.9, 15.89]} scale={[12.3, 8.2, 4.1]}>
        <mesh geometry={nodes.Cube015.geometry} material={nodes.Cube015.material} />
        <mesh geometry={nodes.Cube015_1.geometry} material={nodes.Cube015_1.material} />
      </group>
      <mesh
        geometry={nodes.Building10.geometry}
        material={nodes.Building10.material}
        position={[36.64, 5.95, -0.51]}
        scale={[4.1, 10.25, 12.3]}
      />
      <mesh
        geometry={nodes.Building15.geometry}
        material={nodes.Building15.material}
        position={[36.64, -2.25, 40.49]}
        scale={[4.1, 2.05, 12.3]}
      />
      <mesh
        geometry={nodes.Building16.geometry}
        material={nodes.Building16.material}
        position={[-20.76, -0.2, -33.31]}
        scale={[4.1, 4.1, 4.1]}
      />
      <mesh
        geometry={nodes.Building17.geometry}
        material={nodes.Building17.material}
        position={[-12.56, 9.03, -33.31]}
        scale={[4.1, 13.32, 4.1]}
      />
      <mesh
        geometry={nodes.Building18.geometry}
        material={nodes.Building18.material}
        position={[-12.56, 10.05, -16.91]}
        scale={[4.1, 14.35, 4.1]}
      />
      <mesh
        geometry={nodes.Building19.geometry}
        material={nodes.Building19.material}
        position={[-20.76, 5.95, -16.91]}
        scale={[4.1, 10.25, 4.1]}
      />
      <mesh
        geometry={nodes.Building20.geometry}
        material={nodes.Building20.material}
        position={[-20.76, 3.9, -41.51]}
        scale={[4.1, 8.2, 4.1]}
      />
      <mesh
        geometry={nodes.Building21.geometry}
        material={nodes.Building21.material}
        position={[3.84, 3.9, -33.31]}
        scale={[12.3, 8.2, 4.1]}
      />
      <mesh
        geometry={nodes.Building22.geometry}
        material={nodes.Building22.material}
        position={[53.04, -0.2, 24.09]}
        scale={[4.1, 4.1, 12.3]}
      />
      <mesh
        geometry={nodes.Building23.geometry}
        material={nodes.Building23.material}
        position={[44.84, 5.95, 36.39]}
        scale={[4.1, 10.25, 4.1]}
      />
      <mesh
        geometry={nodes.Building27.geometry}
        material={nodes.Building27.material}
        position={[32.54, 1.85, -21.01]}
        scale={[8.2, 6.15, 4.1]}
      />
      <mesh
        geometry={nodes.Building26.geometry}
        material={nodes.Building26.material}
        position={[12.04, -1.22, -16.91]}
        scale={[8.2, 3.07, 4.1]}
      />
      <mesh
        geometry={nodes.Building25.geometry}
        material={nodes.Building25.material}
        position={[-24.86, -0.2, 7.69]}
        scale={[4.1, 4.1, 4.1]}
      />
      <mesh
        geometry={nodes.Building24.geometry}
        material={nodes.Building24.material}
        position={[28.44, 14.15, -29.21]}
        scale={[4.1, 18.45, 4.1]}
      />
      <mesh
        geometry={nodes.Building31.geometry}
        material={nodes.Building31.material}
        position={[-41.26, -4.3, -37.41]}
        scale={[8.2, 1.02, 8.2]}
      />
      <mesh
        geometry={nodes.Building30.geometry}
        material={nodes.Building30.material}
        position={[-25.89, 3.9, -16.91]}
        scale={[1.02, 8.2, 2.05]}
      />
      <mesh
        geometry={nodes.Building29.geometry}
        material={nodes.Building29.material}
        position={[-28.96, 3.9, -4.61]}
        scale={[4.1, 8.2, 8.2]}
      />
      <mesh
        geometry={nodes.Building28.geometry}
        material={nodes.Building28.material}
        position={[28.44, 2.88, -41.51]}
        scale={[4.1, 7.17, 4.1]}
      />
      <mesh
        geometry={nodes.Building33.geometry}
        material={nodes.Building33.material}
        position={[-45.36, -0.2, 24.09]}
        scale={[4.1, 4.1, 4.1]}
      />
      <mesh
        geometry={nodes.Building32.geometry}
        material={nodes.Building32.material}
        position={[12.04, 0.83, -45.61]}
        scale={[4.1, 5.13, 4.1]}
      />
      <mesh
        geometry={nodes.Building38.geometry}
        material={nodes.Building38.material}
        position={[-45.36, -0.2, -8.71]}
        scale={[4.1, 4.1, 12.3]}
      />
      <mesh
        geometry={nodes.Building37.geometry}
        material={nodes.Building37.material}
        position={[-20.76, -2.66, 40.49]}
        scale={[4.1, 1.64, 4.1]}
      />
      <mesh
        geometry={nodes.Building36.geometry}
        material={nodes.Building36.material}
        position={[-20.76, -0.2, 32.29]}
        scale={[4.1, 4.1, 4.1]}
      />
      <mesh
        geometry={nodes.Building35.geometry}
        material={nodes.Building35.material}
        position={[-45.36, 2.88, 15.89]}
        scale={[4.1, 7.17, 4.1]}
      />
      <mesh
        geometry={nodes.Building34.geometry}
        material={nodes.Building34.material}
        position={[-4.36, -2.25, -45.61]}
        scale={[8.2, 2.05, 4.1]}
      />
      <mesh
        geometry={nodes.Building39.geometry}
        material={nodes.Building39.material}
        position={[-43.31, -2.25, -23.06]}
        scale={[2.05, 2.05, 2.05]}
      />
      <mesh
        geometry={nodes.Water.geometry}
        material={materials.Water}
        position={[3.84, -8.81 + waterHeight, 7.69]}
        scale={[123, waterHeight, 123]}
        // onPointerUp instead of onClick for mobile support
        onPointerUp={ raiseWater }
      />
    </group>
  )
}

useGLTF.preload('assets/models/testCity.glb')
