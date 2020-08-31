import React from "react";
import { BackSide } from "three";

export default () => {
  return (
    <mesh>
      <sphereBufferGeometry args={[5, 10, 10]} attach="geometry" />
      <meshStandardMaterial
        color={0x150604}
        attach="material"
        side={BackSide}
        metalness={0.1}
      />
    </mesh>
  );
};
