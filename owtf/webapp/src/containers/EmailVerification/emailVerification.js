/*
 * Component to show when email is being verified.
 */

import React from "react";
import { emailVerificationStart } from "./actions";
import { connect } from "react-redux";

export class EmailVerfication extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.props.onLoad(this.props.match.params.link);
  }

  render() {
    return <p>Email verification in progress</p>;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLoad: link => dispatch(emailVerificationStart(link))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(EmailVerfication);
