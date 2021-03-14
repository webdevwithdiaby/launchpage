import React, { useState } from "react";
import { Wrapper } from "../app.styles";
import Button from "../button/button.component";
import {
  Brand,
  CloseIcon,
  HeaderContainer,
  HeaderNavContainer,
  Link,
  MenuIcon,
  NavigationContainer,
} from "./header.styles";

const Header = () => {
  const [isNavShown, setIsNavShown] = useState(false);

  const handleNavStateChange = () => {
    console.log("state change");
    setIsNavShown((prev) => !prev);
  };


  return (
    <HeaderContainer>
      <Wrapper>
        <HeaderNavContainer>
          <Brand>LaunchPage</Brand>
          <NavigationContainer visible={isNavShown} >
              <Link>Home</Link>
              <Link>About</Link>
              <Link>Testimonials</Link>
              <Link>Work</Link>
              <Link>Team</Link>
              <Link>Features</Link>
              <Link>Pricing</Link>
              <Button asCTA>Get started</Button>
            </NavigationContainer>
          {
            isNavShown === false ? 
            (<MenuIcon onClick={handleNavStateChange} />)
            :
            (<CloseIcon onClick={handleNavStateChange} />)
          }
        </HeaderNavContainer>
      </Wrapper>
    </HeaderContainer>
  );
};

export default Header;
