import styled from "styled-components";

export const HomeContainer = styled.div`
  padding: 5rem 0;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ),
    url("https://demo.epic-webdesign.com/tf-launchpage/v3/images/bg2.jpg");
  background-position: center;
  background-size: cover;
  min-height: 92vh;
  color: #fff;
  text-align: center;
`;

export const HeroContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  margin-top: 6rem;
`;

export const Heading = styled.h2`
  font-size: 4.5rem;
  line-height: 1;
  font-weight: 700;
  margin-bottom: 2rem;
  width: 100%;
`;

export const Text = styled.p`
  font-size: 2rem;
  margin-bottom: 3rem;
`;

export const SubscriptionForm = styled.form`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 700px) {
    flex-direction: column;
  }
`;
