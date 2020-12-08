import React from 'react';

//&#9733; is a filled in star, &#9734; is an unfilled star
function Rating(props){
    
    const stars = [0,0,0,0,0]
    .map((_, i) => i < props.value ? <span key={i}>&#9733;</span> : <span key={i}>&#9734;</span>);
    
    return(
        <div className='Rating'>
            {stars}
        </div>
    )
}

export default Rating;