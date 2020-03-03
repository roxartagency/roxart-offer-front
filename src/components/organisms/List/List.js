import React from "react";
import styled from "styled-components";
import ListItem from "../../molecules/ListItem/ListItem";
import PricedListItem from "../../molecules/PricedListItem/PricedListItem";

const StyledList = styled.ul`
  padding: 0;
  margin: 0;
`;

const ListHead = styled.li`
  background: ${props => `${props.theme.colors.white}`};
  color: ${props => `${props.theme.colors.darkGrey}`};
  list-style: none;
  display: grid;
  grid-template-columns: 5% 24% 10% 11% 10% 10% 10% 10% 10%;
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
`;

const NoItems = styled.h1`
  font-size: 1.2em;
  color: darkgrey;
  display: block;
  width: 100%;
  margin-top: 100px;
  text-align: center;
`;

class List extends React.Component {
  render() {
    const { items, priced } = this.props;

    return (
      <>
        {items.length ? (
          <StyledList>
            <ListHead>
              <ListHeadCol>ID</ListHeadCol>
              <ListHeadCol>Klient</ListHeadCol>
              <ListHeadCol>Kategoria</ListHeadCol>
              <ListHeadCol>Dodał</ListHeadCol>
              <ListHeadCol>Status</ListHeadCol>
              <ListHeadCol>Grafik</ListHeadCol>
              <ListHeadCol>Koder</ListHeadCol>
              <ListHeadCol>Operator</ListHeadCol>
              <ListHeadCol>Animator</ListHeadCol>
            </ListHead>
            {priced
              ? items.map(item => (
                  <PricedListItem key={item.id} priced={priced} {...item} />
                ))
              : items.map(item => (
                  <ListItem key={item.id} priced={priced} {...item} />
                ))}
          </StyledList>
        ) : (
          <NoItems>Brak wyników spełniających podane wymagania.</NoItems>
        )}
      </>
    );
  }
}

export default List;
