import React from "react";

// Components
import AuthorCard from "./AuthorCard";
import { connect } from "react-redux";

const AuthorsList = (props) => {
  const authorCards = props.authorss.map((author) => (
    <AuthorCard key={author.first_name + author.last_name} author={author} />
  ));

  return (
    <div className="authors">
      <h3>Authors</h3>
      <div className="row">{authorCards}</div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    authorss: state.authors,
  };
};
export default connect(mapStateToProps)(AuthorsList);
