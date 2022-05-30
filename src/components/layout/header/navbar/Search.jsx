import React from 'react'
import SearchIcon from '@mui/icons-material/Search';



const Search = () => {
  return (

  <div className="navbar__search">
        <div className="search__icon">
            <SearchIcon ></SearchIcon>
        </div>
        <div className="search__input">
            <input type="text" placeholder="Tìm kiếm....." name="search"/>
        </div>      
</div>  
  )
}

export default Search