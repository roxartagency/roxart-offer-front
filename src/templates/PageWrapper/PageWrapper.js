import styled from "styled-components";

const PageWrapper = styled.div`
  padding: 64px 64px 64px calc(15vw + 64px);
  @media (max-width: 1400px) {
    padding: 32px 32px 32px calc(15vw + 64px);
  }
`;

export default PageWrapper;
