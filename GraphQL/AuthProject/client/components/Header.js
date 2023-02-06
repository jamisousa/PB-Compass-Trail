import React, { Component } from "react";
import query from "../queries/CurrentUser";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import mutation from "../mutations/Logout";

class Header extends Component {
  onLogoutClick() {
    this.props.mutate({
      refetchQueries: [{ query: query }],
    });
  }

  renderButtons() {
    const { loading, user } = this.props.data;
    if (this.props.data.loading) {
      return <div />;
    }
    if (user) {
      return (
        <div>
          <li onClick={this.onLogoutClick.bind(this)}>
            <a>Logout</a>
          </li>
        </div>
      );
    } else {
      return (
        <div>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </div>
      );
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo left">
            Home
          </Link>
          <ul className="right">{this.renderButtons()}</ul>
        </div>
      </nav>
    );
  }
}

export default graphql(mutation)(graphql(query)(Header));
