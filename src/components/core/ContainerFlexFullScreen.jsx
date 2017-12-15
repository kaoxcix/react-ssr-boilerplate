import Styled from "styled-components";

const ContainerFlexFullScreen = Styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    
    ${prop => prop.center && `
      justify-content: center;
    `}
    
    ${prop => prop.middle && `
      align-items: center;
    `}
`;

export default ContainerFlexFullScreen;
