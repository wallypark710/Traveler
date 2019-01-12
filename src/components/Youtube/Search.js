import React from 'react';

const Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" onKeyDown={props.handleBtn} />
    <button className="btn hidden-sm-down" onClick={props.handleBtn}>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

export default Search;
