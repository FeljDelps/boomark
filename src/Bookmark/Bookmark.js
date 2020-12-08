import React from 'react';
import Rating from '../Rating/Rating';

//research a element targets and rel
function Bookmark (props){
    return(
        <div className='Bookmark'>
            <div className='bookmark_row'>
                <div className='bookmark_title'>
                    <a 
                        href={props.url}
                        target='blank'
                        rel='noopener noreferrer'>{props.title}</a>
                </div>
                <Rating value={props.rating}/>
            </div>
            <div className='bookmark_description'>
                {props.description}
            </div>
        </div>
    );
}

export default Bookmark;