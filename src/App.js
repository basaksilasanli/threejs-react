import React, {Suspense, useState} from 'react'
import {Canvas} from 'react-three-fiber'
import Chair from "./components/Chair";
import ControlButtons from "./components/ControlButtons";
import styled from "styled-components";

const Container = styled.div` height:89vh;`;

function App() {
  const [color, setColor] = useState();
  const changeColor = (color) => {
   setColor(color)
  };
  return (
    <Container>
      <Canvas id={"canvas"} shadowMap>
        <ambientLight color={"#ffffff"} />
        <pointLight intensity={3} color={"#ffffff"} position={[2, 4, 2]} castShadow />
        <Suspense fallback={null}><Chair color={color}/></Suspense>
      </Canvas>
      <ControlButtons parentCallback={changeColor}/>
    </Container>
  );
}
export default App;
