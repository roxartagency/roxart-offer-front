import React from "react";
import styled from "styled-components";
import OffersListItem from "../../molecules/OffersListItem/OffersListItem";

const StyledList = styled.ul`
  padding: 0;
  margin: 0;
`;

const ListHead = styled.li`
  background: ${props => `${props.theme.colors.white}`};
  color: ${props => `${props.theme.colors.darkGrey}`};
  list-style: none;
  display: grid;
  grid-template-columns: ${props => `${props.theme.offerListGrid}`};
  grid-auto-flow: row;
  grid-template-rows: 40px;
  border-bottom: 1px solid ${props => `${props.theme.colors.grey}`};
  width: 100%;
  align-items: center;
`;

const ListHeadCol = styled.div`
  margin: 0;
  padding: 15px 15px 12px 15px;
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 1.1;
  letter-spacing: -0.12px;
  @media (max-width: 1400px) {
    padding-left: 5px;
    padding-right: 5px;
  }
`;

const NoItems = styled.h1`
  font-size: 1.2em;
  color: darkgrey;
  display: block;
  width: 100%;
  margin-top: 100px;
  text-align: center;
`;

class OffersList extends React.Component {
  render() {
    const { items } = this.props;

    return (
      <>
        {items.length ? (
          <StyledList>
            <ListHead>
              <ListHeadCol>ID</ListHeadCol>
              <ListHeadCol>Klient</ListHeadCol>
              <ListHeadCol>Wygenerowano</ListHeadCol>
              <ListHeadCol>Ważna do</ListHeadCol>
              <ListHeadCol>Kategoria</ListHeadCol>
              <ListHeadCol>Dodał</ListHeadCol>
            </ListHead>
            {items.map(item => (
              <OffersListItem key={item.id} {...item} />
            ))}
          </StyledList>
        ) : (
          <NoItems>Brak wyników spełniających podane wymagania.</NoItems>
        )}
      </>
    );
  }
}

export default OffersList;
