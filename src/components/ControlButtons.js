import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: ${props => props.default ? "palevioletred" : "white"};
  color: ${props => props.default ? "white" : "palevioletred"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Wrapper = styled.div`
 display:flex;
 align-items:center;
 justify-content: center;;
`;

export default function ControlButtons({ parentCallback }) {
	return (
		<Wrapper>
			<Button onClick={() => parentCallback('red')}>
				Red
			</Button>
			<Button onClick={() => parentCallback('yellow')}>
				Yellow
			</Button>
			<Button default onClick={() => parentCallback('default')}>
				Default
			</Button>
		</Wrapper>
	)
}