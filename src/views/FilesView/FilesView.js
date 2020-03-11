import React from "react";
import AppContext from "../../context";
import FileList from "../../components/organisms/FileList/FileList";
import PageTitle from "../../components/atoms/PageTitle/PageTitle";
import NoItems from "../../components/atoms/NoItems/NoItems";

class FilesView extends React.Component {
  static contextType = AppContext;

  state = {};

  componentDidMount() {
    this.context.fetchFiles();
  }

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
