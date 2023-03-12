import React from 'react';
import '../components/Search.css';

const Search = () => {
  return (
    <div className='custom_scr'>
         <div className='src ' >
           <input type='text' placeholder='search item'></input>
           <span><i class="ri-search-line"></i></span>
        </div>


    
   </div>
  )
}

export default Search