import React from "react";
import AppContext from "../../context";
import SingleBriefContent from "./SingleBriefContent";

class SingleBriefView extends React.Component {
  render() {
    const {match} = this.props;
    return (
      <AppContext.Consumer>
        {context => (
          <>
            <SingleBriefContent items={context.brief} id={match.params.id}/>
          </>
        )}
      </AppContext.Consumer>
    );
  }
}

export default SingleBriefView;
