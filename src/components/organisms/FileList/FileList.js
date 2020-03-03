import React from "react";
import styled from "styled-components";
import Title from "../../atoms/Title/Title";
import Button from "../../atoms/Button/Button";

const StyledList = styled.ul`
  padding: 0;
  margin: 0;
  max-width: 50vw;
`;

const ListHead = styled.li`
  background: ${props => `${props.theme.colors.white}`};
  color: ${props => `${props.theme.colors.darkGrey}`};
  list-style: none;
  display: grid;
  grid-template-columns: auto;
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

const FileListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 22px 15px 20px 15px;
  border-bottom: 1px solid ${props => `${props.theme.colors.grey}`};
`;

const NoItems = styled.h1`
  font-size: 1.2em;
  color: darkgrey;
  display: block;
  width: 100%;
  margin-top: 100px;
  text-align: center;
`;

class FileList extends React.Component {
  render() {
    const { items } = this.props;

    return (
      <>
        {items.length ? (
          <StyledList>
            <ListHead>
              <ListHeadCol>Nazwa pliku</ListHeadCol>
            </ListHead>
            {items.map(item => (
              <FileListItem>
                <Title>{item.file_name}</Title>
                <a
                  href={item.file_url}
                  target="_blank"
                  rel="noopener noreferrer">
                  <Button small>pobierz</Button>
                </a>
              </FileListItem>
            ))}
          </StyledList>
        ) : (
          <NoItems>Brak wyników spełniających podane wymagania.</NoItems>
        )}
      </>
    );
  }
}

export default FileList;
