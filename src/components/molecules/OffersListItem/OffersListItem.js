import React from "react";
import AppContext from "../../../context";
import styled from "styled-components";
import Title from "../../atoms/Title/Title";
import Button from "../../atoms/Button/Button";
import { showAuthorOffers, showDate } from "../../../utils/Utils";
import { generateOfferPDF } from "../../organisms/PDF/PDF";

const ListItemCol = styled.div`
  padding: 13px 15px 9px 15px;
  margin: 0;
  font-size: 0.8em;
  letter-spacing: -0.28px;
  color: ${props => `${props.theme.colors.darkGrey}`};
  position: relative;
  &:hover p {
    opacity: 1;
  }
  @media (max-width: 1400px) {
    padding-left: 5px;
    padding-right: 5px;
  }
`;

// const StyledLink = styled(Link)`
//   text-decoration: none;
//   color: ${props => `${props.theme.colors.black}`};
// `;

const StyledListItem = styled.li`
  list-style: none;
  display: grid;
  grid-template-columns: ${props => `${props.theme.offerListGrid}`};
  grid-auto-flow: row;
  width: 100%;
  align-items: center;
  border-top: 1px solid ${props => `${props.theme.colors.grey}`};
  background-color: ${props => `${props.theme.colors.white}`};
  position: relative;
  transition: 0.2s ease-out all;
  svg {
    margin-right: 5px;
  }
  &:hover {
    background-color: ${props => `${props.theme.colors.lightGrey}`};
  }
`;

const BlackText = styled.span`
  color: ${props => `${props.theme.colors.black}`};
  font-weight: 500;
`;

class OffersListItem extends React.Component {
  showFile(blob) {
    var newBlob = new Blob([blob], { type: "application/pdf" });
    console.log(blob);

    console.log(newBlob);
  }

  render() {
    const { ...props } = this.props;

    // const generateLetterPdf = async ({ ...props }) => {
    //   const blob = await pdf(<PDF id={props.id} />).toBlob();
    //   saveAs(blob, "test.pdf");
    // };

    return (
      <AppContext.Consumer>
        {context => (
          <>
            {showAuthorOffers(context.user, props.user) ? (
              <StyledListItem {...props}>
                <ListItemCol>
                  <BlackText>{props.id}</BlackText>
                </ListItemCol>
                <ListItemCol>
                  <Title>{props.ofe_nazwa}</Title>
                </ListItemCol>
                <ListItemCol>{showDate(props.created_at)}</ListItemCol>
                <ListItemCol>{showDate(props.ofe_wazna)}</ListItemCol>
                <ListItemCol>
                  <BlackText>{props.kategoria_ofert.name}</BlackText>
                </ListItemCol>
                <ListItemCol>
                  {props.user ? props.user.username : null}
                </ListItemCol>
                <ListItemCol>
                  <Button onClick={() => generateOfferPDF(props)} small>
                    Pobierz
                  </Button>
                </ListItemCol>
              </StyledListItem>
            ) : null}
          </>
        )}
      </AppContext.Consumer>
    );
  }
}

export default OffersListItem;
