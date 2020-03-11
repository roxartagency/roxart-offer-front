import React from "react";
import StyledLink from "../../atoms/StyledLink/StyledLink";
import styled from "styled-components";
import { appLink } from "../../../utils/Utils";

const StyledTabNavigation = styled.div`
  display: flex;
  margin-bottom: 20px;
  border-bottom: 1px solid ${props => `${props.theme.colors.grey}`};
`;

const TabNavigation = () => (
  <StyledTabNavigation>
    <StyledLink to={appLink + `/briefs`} small>
      Do wyceny
    </StyledLink>
    <StyledLink to={appLink + `/archive`} small>
      Wycenione
    </StyledLink>
  </StyledTabNavigation>
);

export default TabNavigation;
