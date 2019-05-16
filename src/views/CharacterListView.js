import React from "react";
import { connect } from "react-redux";
import action from '../actions'

import { CharacterList } from "../components";
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.action()
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return(
        <h1>Fetching...</h1>
      )
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = (state) => ({
 characters: state.charsReducer.characters,
 fetching: state.charsReducer.fetching
})

export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    /* action creators go here */
    action
  }
)(CharacterListView);
