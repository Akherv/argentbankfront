import styled from "styled-components";

function FeaturesItem(props) {
  return (
    <FeatureItemContainer>
      <FeatureIcon src={props.type} alt={props.altText} />
      <FeatureItemTitle>{props.title}</FeatureItemTitle>
      <p>{props.children}</p>
    </FeatureItemContainer>
  );
}
export default FeaturesItem;

const FeatureItemContainer = styled.div`
  flex: 1;
  padding: 2.5rem;
`;

const FeatureIcon = styled.img`
  width: 100px;
  border: 10px solid #00bc77;
  border-radius: 50%;
  padding: 1rem;
`;

const FeatureItemTitle = styled.h3`
  color: #222;
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;
