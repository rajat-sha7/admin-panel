import React from "react";



const searchBar = ({ setSearchValue }) => {
  const onChangeInput = (e) => {
    e.preventDefault()
    const { value } = e.target;
    setSearchValue(value);
  };
  return (
    <form action="/">
    
    <input type="text" placeholder="Search here..." name="search-box" id="search-box" onChange={onChangeInput}  />
</form>
  )
}


export default searchBar;