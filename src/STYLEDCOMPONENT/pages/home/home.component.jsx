import React from "react";
import { Wrapper } from "../../app.styles";

import {
  HomeContainer,
  HeroContainer,
  Heading,
  Text,
  SubscriptionForm,
} from "./home.styles";

import FormInput from "../../form-input/form-input.component";
import Button from "../../button/button.component";

const HomePage = () => {
  return (
    <HomeContainer>
      <Wrapper>
        <HeroContainer>
          <Heading>Welcome To LaunchPage</Heading>
          <Text>
            Excepteur sentum occaecat cupidatat nonet proident, vante nislat
            quistamused officiatumes ets deserunt etimus nets.
          </Text>
          <SubscriptionForm>
            <FormInput type="email" placeholder="Enter your Email Address" />
            <Button variant="primary">Get started</Button>
          </SubscriptionForm>
        </HeroContainer>
      </Wrapper>
    </HomeContainer>
  );
};

export default HomePage;
