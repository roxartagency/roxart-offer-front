import React from "react";
import styled from "styled-components";
import ListItem from "../../components/List/ListItem";

const StyledList = styled.ul`
  padding: 0;
  margin: 0;
`;

const ListHead = styled.li`
  background: ${props => `${props.theme.colors.orange}`};
  color: #fff;
  list-style: none;
  display: grid;
  grid-template-columns: 5% 15% 10% 15% 11% 15% 15% auto;
  grid-auto-flow: row;
  grid-template-rows: 70px;
  width: 100%;
  align-items: center;
`;

const ListHeadCol = styled.div`
  margin: 0;
  padding: 10px;
  font-weight: 700;
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
    const {items} = this.props;

    return (
      <>
        {items.length ? (
          <StyledList>
            <ListHead>
              <ListHeadCol>ID</ListHeadCol>
              <ListHeadCol>Klient</ListHeadCol>
              <ListHeadCol>Kategoria</ListHeadCol>
              <ListHeadCol>Dodane przez</ListHeadCol>
              <ListHeadCol>Data dodania</ListHeadCol>
              <ListHeadCol>Status grafika</ListHeadCol>
              <ListHeadCol>Status kodera</ListHeadCol>
              <ListHeadCol>Działania</ListHeadCol>
            </ListHead>
            {items.map(item => (
              <ListItem key={item.id} {...item} />
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
