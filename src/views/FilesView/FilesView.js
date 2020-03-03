import React from "react";
import AppContext from "../../context";
import styled from "styled-components";
import FileList from "../../components/organisms/FileList/FileList";
import PageTitle from "../../components/atoms/PageTitle/PageTitle";

const NoItems = styled.h2`
  font-size: 1.2em;
  color: darkgrey;
  display: block;
  width: 100%;
  margin-top: 60px;
  margin-bottom: 25px;
  text-align: center;
`;

class FilesView extends React.Component {
  static contextType = AppContext;

  componentDidMount() {
    // this.context.fetchFiles();
  }

  state = {};

  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <>
            {context.user.username ? (
              <>
                <PageTitle>Pliki</PageTitle>

                <FileList items={context.plik} />
              </>
            ) : (
              <>
                <NoItems>Zaloguj się aby uzyskać dostęp do plików.</NoItems>
              </>
            )}
          </>
        )}
      </AppContext.Consumer>
    );
  }
}

export default FilesView;
