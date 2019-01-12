import React from 'react';
import "./Search.css"

const Search = ({handleClickEvent}) => (
	<div className="search-bar form-inline">
		<input className="form-control" type="text" onKeyDown={handleClickEvent} />
    <button className="btn hidden-sm-down" onClick={handleClickEvent}>
      <span className="glyphicon glyphicon-search"></span>
    </button>
	</div>
)

export default Search