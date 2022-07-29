import { shade } from "polished";
import React, { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { Wrapper } from "../header/styled";
import { Container } from "./styled";

interface Props {
  toggleTheme(): void;
}
const Navbar: React.FC<Props> = ({ toggleTheme}) => {
  const { colors,title } = useContext(ThemeContext);
  return(
    <Container >  
      <Wrapper>
        <h1>GitHub Interface</h1>
        
      <div className="toggleSwitch">

    <Switch
    onChange={toggleTheme}
    checked={title === 'dark'}
    checkedIcon={false}
    uncheckedIcon={false}
    height={10}
    width={40}
    handleDiameter={20}
    offColor={shade(0.30, colors.primary)}
    onColor={colors.secondary}
    />
      </div>
      </Wrapper>

      </Container>

  );
};

export default Navbar;