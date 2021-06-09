/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'

type GLTFResult = GLTF & {
  nodes: {
    map_8osm_buildings: THREE.Mesh
    map_8osm_buildings_1: THREE.Mesh
    map_8osm_buildings_2: THREE.Mesh
    map_8osm_buildings_3: THREE.Mesh
    map_8osm_buildings_4: THREE.Mesh
    map_8osm_buildings_5: THREE.Mesh
    element011: THREE.Mesh
    element011_1: THREE.Mesh
    Mast_1: THREE.Mesh
    Cube006_1: THREE.Mesh
    Mast_1001: THREE.Mesh
    Cube001: THREE.Mesh
    Mast_1002: THREE.Mesh
    Cube002: THREE.Mesh
    Mast_1003: THREE.Mesh
    Blaaktoren_1: THREE.Mesh
    Blaaktoren_2: THREE.Mesh
    element002_1: THREE.Mesh
    element002_2: THREE.Mesh
    Centrale_Bibliotheek_1: THREE.Mesh
    Centrale_Bibliotheek_2: THREE.Mesh
    Centrale_Bibliotheek001_1: THREE.Mesh
    Centrale_Bibliotheek001_2: THREE.Mesh
    Centrale_Bibliotheek002: THREE.Mesh
    Cylinder: THREE.Mesh
    Cylinder001: THREE.Mesh
    Cylinder002: THREE.Mesh
    Cylinder003: THREE.Mesh
    Cylinder004: THREE.Mesh
    Cylinder005: THREE.Mesh
    Cylinder006: THREE.Mesh
    Cylinder007: THREE.Mesh
    Cylinder008: THREE.Mesh
    Cylinder009: THREE.Mesh
    Cylinder010: THREE.Mesh
    Cylinder011: THREE.Mesh
    Cylinder012: THREE.Mesh
    Cylinder013: THREE.Mesh
    Cylinder014: THREE.Mesh
    Cylinder015: THREE.Mesh
    Cylinder016: THREE.Mesh
    Cylinder017: THREE.Mesh
    Grass001: THREE.Mesh
    Rotterdam_Blaak_1: THREE.Mesh
    Rotterdam_Blaak_2: THREE.Mesh
    Cylinder018: THREE.Mesh
    Cylinder019: THREE.Mesh
    Cylinder020: THREE.Mesh
    Cylinder021: THREE.Mesh
    Cylinder022: THREE.Mesh
    Cylinder023: THREE.Mesh
    Cylinder024: THREE.Mesh
    Cylinder025: THREE.Mesh
    Plane: THREE.Mesh
    Plane001: THREE.Mesh
    Grass002: THREE.Mesh
    Markthal: THREE.Mesh
    Cube008_2: THREE.Mesh
    Cube010: THREE.Mesh
    Erasmusbrug: THREE.Mesh
    Cube007: THREE.Mesh
    Cylinder050: THREE.Mesh
    Cylinder051: THREE.Mesh
    Plane002_1: THREE.Mesh
    Plane003: THREE.Mesh
    Grass003: THREE.Mesh
    Cube008: THREE.Mesh
    Cube008_1: THREE.Mesh
    Cube: THREE.Mesh
    Cube004: THREE.Mesh
    Body002: THREE.Mesh
    Front_Forks001: THREE.Mesh
    Plane005_1: THREE.Mesh
    Front_Forks_Supporter001: THREE.Mesh
    Wheel_Left_Back001: THREE.Mesh
    Wheel_Left_Front001: THREE.Mesh
    Wheel_Right_Back001: THREE.Mesh
    Wheel_Right_Front001: THREE.Mesh
    Cylinder052: THREE.Mesh
    Cylinder053: THREE.Mesh
    Cylinder054: THREE.Mesh
    Cylinder055: THREE.Mesh
    Body004: THREE.Mesh
    Front_Supporter: THREE.Mesh
    Front_Wheel: THREE.Mesh
    Wheel_Left_Back002: THREE.Mesh
    Wheel_Right_Back002: THREE.Mesh
    Tree_2001_1: THREE.Mesh
    Tree_2001_2: THREE.Mesh
    Tree_1005_1: THREE.Mesh
    Tree_1005_2: THREE.Mesh
    Tree_1001_1: THREE.Mesh
    Tree_1001_2: THREE.Mesh
    Tree_1002_1: THREE.Mesh
    Tree_1002_2: THREE.Mesh
  }
  materials: {
    b0e0e6: THREE.MeshStandardMaterial
    ['000000']: THREE.MeshStandardMaterial
    ffffff: THREE.MeshStandardMaterial
    c0c0c0: THREE.MeshStandardMaterial
    f0f8ff: THREE.MeshStandardMaterial
    dcdcdc: THREE.MeshStandardMaterial
    roof: THREE.MeshStandardMaterial
    wall: THREE.MeshStandardMaterial
    ['wall.001']: THREE.MeshStandardMaterial
    grey: THREE.MeshStandardMaterial
    ['roof.001']: THREE.MeshStandardMaterial
    ['wall.005']: THREE.MeshStandardMaterial
    ['roof.005']: THREE.MeshStandardMaterial
    ['wall.007']: THREE.MeshStandardMaterial
    ['roof.007']: THREE.MeshStandardMaterial
    Blue: THREE.MeshStandardMaterial
    Construction: THREE.MeshStandardMaterial
    ['Material.002']: THREE.MeshStandardMaterial
    ['wall.006']: THREE.MeshStandardMaterial
    ['roof.006']: THREE.MeshStandardMaterial
    Ground: THREE.MeshStandardMaterial
    Construction_Ground: THREE.MeshPhysicalMaterial
    ['Material.007']: THREE.MeshStandardMaterial
    ['Material.005']: THREE.MeshStandardMaterial
    ['Material.009']: THREE.MeshStandardMaterial
    bridgewhite: THREE.MeshStandardMaterial
    Material: THREE.MeshStandardMaterial
    streetblack: THREE.MeshStandardMaterial
    ['streetblack.001']: THREE.MeshStandardMaterial
    ['Material.001']: THREE.MeshStandardMaterial
    ['water.004']: THREE.MeshStandardMaterial
    ['ground water.004']: THREE.MeshStandardMaterial
    Dirt: THREE.MeshStandardMaterial
    ['Atlas.001']: THREE.MeshStandardMaterial
    ['Material.004']: THREE.MeshStandardMaterial
    ['Material.003']: THREE.MeshStandardMaterial
    ['Material.006']: THREE.MeshStandardMaterial
    ['Treetop_2.001']: THREE.MeshStandardMaterial
    ['Trunk_2.001']: THREE.MeshStandardMaterial
    ['Trunk_1.005']: THREE.MeshStandardMaterial
    ['Treetop_1.005']: THREE.MeshStandardMaterial
    ['Trunk_1.001']: THREE.MeshStandardMaterial
    ['Treetop_1.001']: THREE.MeshStandardMaterial
    ['Trunk_1.002']: THREE.MeshStandardMaterial
    ['Treetop_1.002']: THREE.MeshStandardMaterial
  }
}

type ActionName = 'Cylinder.001Action' | 'Cylinder.001Action.001' | 'Cylinder.001Action.002' | 'Cylinder.001Action.003'
type GLTFActions = Record<ActionName, THREE.AnimationAction>

export default function City(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('assets/models/city.glb') as GLTFResult
  const { actions } = useAnimations<GLTFActions>(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-301.66, -26.12, -448.22]} scale={[1.19, 2.06, 1.19]}>
        <mesh geometry={nodes.map_8osm_buildings.geometry} material={materials.b0e0e6} />
        <mesh geometry={nodes.map_8osm_buildings_1.geometry} material={nodes.map_8osm_buildings_1.material} />
        <mesh geometry={nodes.map_8osm_buildings_2.geometry} material={materials.ffffff} />
        <mesh geometry={nodes.map_8osm_buildings_3.geometry} material={materials.c0c0c0} />
        <mesh geometry={nodes.map_8osm_buildings_4.geometry} material={materials.f0f8ff} />
        <mesh geometry={nodes.map_8osm_buildings_5.geometry} material={materials.dcdcdc} />
      </group>
      <group position={[-277.91, -13.56, 259.1]} rotation={[0, -0.46, 0]} scale={[1.19, 2.06, 1.19]}>
        <mesh geometry={nodes.element011.geometry} material={materials.roof} />
        <mesh geometry={nodes.element011_1.geometry} material={materials.wall} />
        <mesh
          geometry={nodes.Mast_1.geometry}
          material={nodes.Mast_1.material}
          position={[61.98, 30.45, -200.86]}
          rotation={[0, -0.15, 0]}
          scale={[0.65, 4.8, 0.5]}>
          <mesh
            geometry={nodes.Cube006_1.geometry}
            material={nodes.Cube006_1.material}
            position={[-156.09, 8.5, 158.31]}
            rotation={[Math.PI, -1, Math.PI]}
            scale={[-23.19, -0.01, -10.98]}
          />
        </mesh>
        <mesh
          geometry={nodes.Mast_1001.geometry}
          material={nodes.Mast_1001.material}
          position={[23.79, 24.43, 30.87]}
          rotation={[0, -0.15, 0]}
          scale={[0.65, 4.8, 0.5]}>
          <mesh
            geometry={nodes.Cube001.geometry}
            material={nodes.Cube001.material}
            position={[0, 8.5, 0]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[-19.13, -0.01, -12.97]}
          />
        </mesh>
        <mesh
          geometry={nodes.Mast_1002.geometry}
          material={nodes.Mast_1002.material}
          position={[-50.11, 30.45, -137.17]}
          rotation={[0, 0.86, 0]}
          scale={[0.65, 4.8, 0.5]}>
          <mesh
            geometry={nodes.Cube002.geometry}
            material={nodes.Cube002.material}
            position={[65.7, 8.5, 455.92]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[-19.13, -0.01, -12.97]}
          />
        </mesh>
        <mesh
          geometry={nodes.Mast_1003.geometry}
          material={nodes.Mast_1003.material}
          position={[151.69, 30.45, -19.14]}
          rotation={[0, 0.86, 0]}
          scale={[0.65, 4.8, 0.5]}
        />
      </group>
      <group position={[43.23, -13.22, -251.94]} scale={[1.19, 2.06, 1.19]}>
        <mesh geometry={nodes.Blaaktoren_1.geometry} material={nodes.Blaaktoren_1.material} />
        <mesh geometry={nodes.Blaaktoren_2.geometry} material={materials.grey} />
        <group position={[19.64, 0.11, -15]}>
          <mesh geometry={nodes.element002_1.geometry} material={nodes.element002_1.material} />
          <mesh geometry={nodes.element002_2.geometry} material={materials['roof.001']} />
        </group>
      </group>
      <group position={[172.5, 24, -245.03]} scale={[0.69, 2.06, 0.69]}>
        <mesh geometry={nodes.Centrale_Bibliotheek_1.geometry} material={materials['wall.005']} />
        <mesh geometry={nodes.Centrale_Bibliotheek_2.geometry} material={materials['roof.005']} />
        <group position={[26.74, -16.54, 0]}>
          <mesh geometry={nodes.Centrale_Bibliotheek001_1.geometry} material={materials['wall.007']} />
          <mesh geometry={nodes.Centrale_Bibliotheek001_2.geometry} material={materials['roof.007']} />
        </group>
        <mesh
          geometry={nodes.Centrale_Bibliotheek002.geometry}
          material={materials.Blue}
          position={[-6.34, 15.99, -3.25]}
          scale={[0.41, 0.59, 0.41]}
        />
        <mesh
          name="Cylinder"
          geometry={nodes.Cylinder.geometry}
          material={nodes.Cylinder.material}
          position={[-61.97, 20.7, 20.08]}
          rotation={[0, 0.37, 1.6]}
          scale={[1.92, 5.23, 3.3]}
        />
        <mesh
          geometry={nodes.Cylinder001.geometry}
          material={nodes.Cylinder001.material}
          position={[-69.13, 19.28, 23.88]}
          scale={[3.3, 3.04, 3.3]}
        />
        <mesh
          geometry={nodes.Cylinder002.geometry}
          material={nodes.Cylinder002.material}
          position={[-54.03, 19.28, 17.27]}
          scale={[3.3, 3.04, 3.3]}
        />
        <mesh
          geometry={nodes.Cylinder003.geometry}
          material={nodes.Cylinder003.material}
          position={[-69.13, 13.31, 23.88]}
          scale={[3.3, 3.04, 3.3]}
        />
        <mesh
          geometry={nodes.Cylinder004.geometry}
          material={nodes.Cylinder004.material}
          position={[-69.13, 7.26, 23.88]}
          scale={[3.3, 3.04, 3.3]}
        />
        <mesh
          geometry={nodes.Cylinder005.geometry}
          material={nodes.Cylinder005.material}
          position={[-69.13, 1.64, 23.88]}
          scale={[3.3, 3.04, 3.3]}
        />
        <mesh
          geometry={nodes.Cylinder006.geometry}
          material={nodes.Cylinder006.material}
          position={[-64.37, 1.64, 35.02]}
          scale={[3.3, 3.04, 3.3]}
        />
        <mesh
          geometry={nodes.Cylinder007.geometry}
          material={nodes.Cylinder007.material}
          position={[-64.37, 7.26, 35.02]}
          scale={[3.3, 3.04, 3.3]}
        />
        <mesh
          geometry={nodes.Cylinder008.geometry}
          material={nodes.Cylinder008.material}
          position={[-64.37, 13.31, 35.02]}
          scale={[3.3, 3.04, 3.3]}
        />
        <mesh
          geometry={nodes.Cylinder009.geometry}
          material={nodes.Cylinder009.material}
          position={[-49.28, 19.28, 28.41]}
          scale={[3.3, 3.04, 3.3]}
        />
        <mesh
          geometry={nodes.Cylinder010.geometry}
          material={nodes.Cylinder010.material}
          position={[-64.37, 19.28, 35.02]}
          scale={[3.3, 3.04, 3.3]}
        />
        <mesh
          geometry={nodes.Cylinder011.geometry}
          material={nodes.Cylinder011.material}
          position={[-57.21, 20.7, 31.23]}
          rotation={[0, 0.37, 1.6]}
          scale={[1.92, 5.23, 3.3]}
        />
        <mesh
          geometry={nodes.Cylinder012.geometry}
          material={nodes.Cylinder012.material}
          position={[-26.5, 20.7, 38.78]}
          rotation={[-3.11, 1.26, -1.57]}
          scale={[1.92, 5.23, 3.3]}
        />
        <mesh
          geometry={nodes.Cylinder013.geometry}
          material={nodes.Cylinder013.material}
          position={[-23.07, 19.28, 46.12]}
          rotation={[0, 1.52, 0]}
          scale={[3.3, 3.04, 3.3]}
        />
        <mesh
          geometry={nodes.Cylinder014.geometry}
          material={nodes.Cylinder014.material}
          position={[-28.91, 19.28, 30.71]}
          rotation={[0, 1.52, 0]}
          scale={[3.3, 3.04, 3.3]}
        />
        <mesh
          geometry={nodes.Cylinder015.geometry}
          material={nodes.Cylinder015.material}
          position={[-23.07, 13.31, 46.12]}
          rotation={[0, 1.52, 0]}
          scale={[3.3, 3.04, 3.3]}
        />
        <mesh
          geometry={nodes.Cylinder016.geometry}
          material={nodes.Cylinder016.material}
          position={[-23.07, 7.26, 46.12]}
          rotation={[0, 1.52, 0]}
          scale={[3.3, 3.04, 3.3]}
        />
        <mesh
          geometry={nodes.Cylinder017.geometry}
          material={nodes.Cylinder017.material}
          position={[-23.07, 1.64, 46.12]}
          rotation={[0, 1.52, 0]}
          scale={[3.3, 3.04, 3.3]}
        />
      </group>
      <mesh
        geometry={nodes.Grass001.geometry}
        material={materials['Material.002']}
        position={[-188.85, -4.95, 193.14]}
        rotation={[0, 0.06, 0]}
        scale={[-78.51, -39.89, 85.74]}
      />
      <group position={[-13.39, -13.24, -337.9]} scale={[1.19, 2.06, 1.19]}>
        <mesh geometry={nodes.Rotterdam_Blaak_1.geometry} material={materials['wall.006']} />
        <mesh geometry={nodes.Rotterdam_Blaak_2.geometry} material={materials['roof.006']} />
        <mesh
          geometry={nodes.Cylinder018.geometry}
          material={nodes.Cylinder018.material}
          position={[-19.93, 17.63, 10.03]}
          rotation={[0, 0.38, 1.6]}
          scale={[1.92, 3.04, 1.92]}
        />
        <mesh
          geometry={nodes.Cylinder019.geometry}
          material={nodes.Cylinder019.material}
          position={[-29.47, 16.21, 14.43]}
          scale={[1.92, 3.04, 1.92]}
        />
        <mesh
          geometry={nodes.Cylinder020.geometry}
          material={nodes.Cylinder020.material}
          position={[-0.77, 16.26, 2.36]}
          scale={[2.45, 2.4, 2.45]}
        />
        <mesh
          geometry={nodes.Cylinder021.geometry}
          material={nodes.Cylinder021.material}
          position={[-29.47, 10.24, 14.43]}
          scale={[1.92, 3.04, 1.92]}
        />
        <mesh
          geometry={nodes.Cylinder022.geometry}
          material={nodes.Cylinder022.material}
          position={[-29.47, 4.19, 14.43]}
          scale={[1.92, 3.04, 1.92]}
        />
        <mesh
          geometry={nodes.Cylinder023.geometry}
          material={nodes.Cylinder023.material}
          position={[-29.47, -1.43, 14.43]}
          scale={[1.92, 3.04, 1.92]}
        />
        <mesh
          geometry={nodes.Cylinder024.geometry}
          material={nodes.Cylinder024.material}
          position={[-25.3, 17.63, 12.22]}
          rotation={[0, 0.38, 1.6]}
          scale={[1.92, 3.04, 1.92]}
        />
        <mesh
          geometry={nodes.Cylinder025.geometry}
          material={nodes.Cylinder025.material}
          position={[-11.7, 17.8, 7.02]}
          rotation={[0, 0.37, 1.6]}
          scale={[1.92, 10.24, 2.31]}
        />
      </group>
      <mesh
        geometry={nodes.Plane.geometry}
        material={nodes.Plane.material}
        position={[159.98, -12.91, -299.53]}
        scale={[233.34, 2.06, 191.47]}
      />
      <mesh
        geometry={nodes.Plane001.geometry}
        material={nodes.Plane001.material}
        position={[30.78, -13.4, 182.44]}
        rotation={[-Math.PI, 1.56, -Math.PI]}
        scale={[193.45, 0.38, 350.72]}
      />
      <mesh
        geometry={nodes.Grass002.geometry}
        material={materials.Construction_Ground}
        position={[268.86, -12.43, 178.64]}
        scale={[-128.27, -48.55, -196.12]}
      />
      <mesh
        geometry={nodes.Markthal.geometry}
        material={materials['Material.007']}
        position={[320.86, 25.55, -318.58]}
        scale={[53.75, 41.14, 86.01]}>
        <mesh
          geometry={nodes.Cube008_2.geometry}
          material={materials['Material.005']}
          position={[0, 0, -0.03]}
          scale={[0.98, 0.97, 0.98]}
        />
        <mesh
          geometry={nodes.Cube010.geometry}
          material={materials['Material.009']}
          position={[0, 0, 0.02]}
          scale={[0.98, 0.97, 0.98]}
        />
      </mesh>
      <mesh
        geometry={nodes.Erasmusbrug.geometry}
        material={nodes.Erasmusbrug.material}
        position={[-28.74, -9.74, -1.23]}
        rotation={[Math.PI, -1.54, Math.PI]}
        scale={[13.64, 11.61, 6.74]}>
        <mesh geometry={nodes.Cube007.geometry} material={nodes.Cube007.material} position={[0, 0, -5.21]} />
        <mesh
          geometry={nodes.Cylinder050.geometry}
          material={materials.Material}
          position={[6.26, 5.83, -8.42]}
          rotation={[0, 0, 0.36]}
          scale={[0.1, 7.14, 0.1]}
        />
        <mesh
          geometry={nodes.Cylinder051.geometry}
          material={nodes.Cylinder051.material}
          position={[6.25, 5.83, -2.89]}
          rotation={[0, 0, 0.36]}
          scale={[0.1, 7.14, 0.1]}
        />
        <mesh geometry={nodes.Plane002_1.geometry} material={nodes.Plane002_1.material} position={[4.16, 0, -2.89]} />
      </mesh>
      <mesh
        geometry={nodes.Plane003.geometry}
        material={materials['streetblack.001']}
        position={[-38.06, -26.58, 33.2]}
        scale={[13.72, 2.06, 5.61]}
      />
      <mesh
        geometry={nodes.Grass003.geometry}
        material={materials['Material.001']}
        position={[-197.64, -13.72, -301.24]}
        scale={[-127.23, -48.16, -191.29]}
      />
      <group position={[27.37, -77.79, -50.71]} scale={[201.88, 51.28, 41.39]}>
        <mesh geometry={nodes.Cube008.geometry} material={materials['water.004']} />
        <mesh geometry={nodes.Cube008_1.geometry} material={materials['ground water.004']} />
      </group>
      <mesh
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
        position={[35.75, -25.4, 177.28]}
        scale={[359.28, 11.57, 196.16]}
      />
      <mesh
        geometry={nodes.Cube004.geometry}
        material={nodes.Cube004.material}
        position={[35.75, -25.4, -303.89]}
        scale={[359.28, 11.57, 189.53]}
      />
      <mesh
        geometry={nodes.Body002.geometry}
        material={nodes.Body002.material}
        position={[229.02, -0.2, 73.61]}
        rotation={[0, 1.57, 0]}
        scale={[3.1, 3.11, 3.1]}
      />
      <mesh
        geometry={nodes.Front_Forks001.geometry}
        material={nodes.Front_Forks001.material}
        position={[229.7, -1.47, 81.85]}
        rotation={[0, 1.57, 0]}
        scale={[3.1, 3.11, 3.1]}>
        <mesh
          geometry={nodes.Plane005_1.geometry}
          material={nodes.Plane005_1.material}
          position={[-3.66, -1.87, -0.06]}
        />
      </mesh>
      <mesh
        geometry={nodes.Front_Forks_Supporter001.geometry}
        material={materials['Atlas.001']}
        position={[229.7, -0.48, 82.72]}
        rotation={[0, 1.57, 0]}
        scale={[3.1, 3.11, 3.1]}
      />
      <mesh
        geometry={nodes.Wheel_Left_Back001.geometry}
        material={nodes.Wheel_Left_Back001.material}
        position={[222, -7.98, 70.01]}
        rotation={[0, 1.57, 0]}
        scale={[3.1, 3.11, 3.1]}
      />
      <mesh
        geometry={nodes.Wheel_Left_Front001.geometry}
        material={nodes.Wheel_Left_Front001.material}
        position={[222, -8.3, 83]}
        rotation={[0, 1.57, 0]}
        scale={[3.1, 3.11, 3.1]}
      />
      <mesh
        geometry={nodes.Wheel_Right_Back001.geometry}
        material={nodes.Wheel_Right_Back001.material}
        position={[237.49, -7.98, 70.06]}
        rotation={[0, 1.57, 0]}
        scale={[3.1, 3.11, 3.1]}
      />
      <mesh
        geometry={nodes.Wheel_Right_Front001.geometry}
        material={nodes.Wheel_Right_Front001.material}
        position={[237.36, -8.3, 83.05]}
        rotation={[0, 1.57, 0]}
        scale={[3.1, 3.11, 3.1]}
      />
      <mesh
        name="Cylinder052"
        geometry={nodes.Cylinder052.geometry}
        material={nodes.Cylinder052.material}
        position={[0, 3.86, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.03, 3.24, 0.03]}
      />
      <mesh
        name="Cylinder053"
        geometry={nodes.Cylinder053.geometry}
        material={nodes.Cylinder053.material}
        position={[0, 3.86, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.03, 3.24, 0.03]}
      />
      <mesh
        name="Cylinder054"
        geometry={nodes.Cylinder054.geometry}
        material={nodes.Cylinder054.material}
        position={[0, 3.86, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.03, 3.24, 0.03]}
      />
      <mesh
        name="Cylinder055"
        geometry={nodes.Cylinder055.geometry}
        material={nodes.Cylinder055.material}
        position={[0, 3.86, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.03, 3.24, 0.03]}
      />
      <mesh
        geometry={nodes.Body004.geometry}
        material={nodes.Body004.material}
        position={[326.4, -2.79, 219.5]}
        scale={[2.14, 1.95, 2.14]}
      />
      <mesh
        geometry={nodes.Front_Supporter.geometry}
        material={nodes.Front_Supporter.material}
        position={[313.87, -8.64, 219.5]}
        scale={[2.14, 1.95, 2.14]}
      />
      <mesh
        geometry={nodes.Front_Wheel.geometry}
        material={materials['Material.006']}
        position={[315.13, -8.8, 219.5]}
        scale={[2.14, 1.95, 2.14]}
      />
      <mesh
        geometry={nodes.Wheel_Left_Back002.geometry}
        material={nodes.Wheel_Left_Back002.material}
        position={[328.88, -9.15, 212.64]}
        scale={[2.14, 1.95, 2.14]}
      />
      <mesh
        geometry={nodes.Wheel_Right_Back002.geometry}
        material={nodes.Wheel_Right_Back002.material}
        position={[328.9, -9.15, 226.34]}
        scale={[2.14, 1.95, 2.14]}
      />
      <group position={[-296.96, -12.82, -152.5]} rotation={[Math.PI / 2, 0, -1.5]} scale={[2.05, 1.67, 1.49]}>
        <mesh geometry={nodes.Tree_2001_1.geometry} material={materials['Treetop_2.001']} />
        <mesh geometry={nodes.Tree_2001_2.geometry} material={materials['Trunk_2.001']} />
      </group>
      <group position={[-175.48, -12.94, -233.49]} rotation={[Math.PI / 2, 0, 1.47]} scale={[2.26, 2.19, 1.41]}>
        <mesh geometry={nodes.Tree_1005_1.geometry} material={materials['Trunk_1.005']} />
        <mesh geometry={nodes.Tree_1005_2.geometry} material={materials['Treetop_1.005']} />
      </group>
      <group position={[-175.48, -13.14, -171.67]} rotation={[Math.PI / 2, 0, 0]} scale={[2.26, 2.19, 1.41]}>
        <mesh geometry={nodes.Tree_1001_1.geometry} material={materials['Trunk_1.001']} />
        <mesh geometry={nodes.Tree_1001_2.geometry} material={materials['Treetop_1.001']} />
      </group>
      <group position={[-263.29, -13.77, -436.32]} rotation={[Math.PI / 2, 0, -0.99]} scale={[2.26, 2.19, 1.41]}>
        <mesh geometry={nodes.Tree_1002_1.geometry} material={materials['Trunk_1.002']} />
        <mesh geometry={nodes.Tree_1002_2.geometry} material={materials['Treetop_1.002']} />
      </group>
    </group>
  )
}

useGLTF.preload('assets/models/city.glb')
