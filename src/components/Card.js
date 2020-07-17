import React from 'react';
// import Tachyons from 'tachyons';
const Card = (props) => {
    return (
        
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
            <img src={`https://robohash.org/set_set1/${props.id}?200x200`} alt='roboPics' />
            <h2>{props.name}</h2>
            <p>{props.email}</p>
        </div>
    )
};

export default Card;