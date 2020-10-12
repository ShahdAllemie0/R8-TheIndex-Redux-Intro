import React from "react";
import { connect } from "react-redux";

const Sidebar = (props) => {
  return (
    <div id="sidebar">
      <img src="theindex.svg" className="logo" alt="the index logo" />
      <section>
        <h4 className="menu-item active">
          <button>AUTHORS</button>
        </h4>
        <button
          id="add-button"
          className="btn btn-block btn-light"
          onClick={props.addAuthor}
        >
          + ADD AUTHOR
        </button>
      </section>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    authorss: state.authors,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addAuthor: () => dispatch({ type: "ADD_AUTHOR" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
