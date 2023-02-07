import React, { Component } from "react";
import { graphql } from "react-apollo";
import currentUserQuery from "..queries/CurrentUser";
import { hashHistory } from "react-router";

export default (WrappedComponent) => {
  class RequireAuth extends Component {
    componentWillUpdate() {
      if (!nextProps.data.loading && !nextProps.data.user) {
        hashHistory.push("/login");
      }
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  graphql(currentUserQuery)(RequireAuth);
};
