import styled from "styled-components";
import FeaturesItem from "./FeaturesItem";
import iconChat from "../assets/icon-chat.png";
import iconMoney from "../assets/icon-money.png";
import iconSecurity from "../assets/icon-security.png";

const FeatureContainer = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: 920px) {
    flex-direction: row;
  }
`;

function Features() {
  return (
    <FeatureContainer>
      <h2 className="sr-only">Features</h2>
      <FeaturesItem
        type={iconChat}
        altText="Chat Icon"
        title="You are our #1 priority"
      >
        Need to talk to a representative? You can get in touch through our 24/7
        chat or through a phone call in less than 5 minutes.
      </FeaturesItem>
      <FeaturesItem
        type={iconMoney}
        altText="Money Icon"
        title="More savings means higher rates"
      >
        The more you save with us, the higher your interest rate will be!
      </FeaturesItem>
      <FeaturesItem
        type={iconSecurity}
        altText="Security Icon"
        title="Security you can trust"
      >
        We use top of the line encryption to make sure your data and money is
        always safe.
      </FeaturesItem>
    </FeatureContainer>
  );
}
export default Features;
