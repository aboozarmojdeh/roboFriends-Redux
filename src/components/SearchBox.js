import React from 'react';

const SearchBox=({onSearchChange})=>{
    return(
        <div>
            <input className='pa3 ba b--green bg-lightest-blue' type='search' placeholder='Search your Robot' onChange={onSearchChange}/>
        </div>
    )
};
export default SearchBox;