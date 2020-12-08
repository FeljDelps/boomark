import React, { Component } from 'react';
import Bookmark from '../Bookmark/Bookmark';

class BookmarkList extends Component{
    render(){

        const bookmarks= this.props.bookmarks.map((bookmark, i) => 
            <Bookmark {...bookmark} key={i}/>
        )
        return(
            <div className='BookmarkList'>
                {bookmarks}
            </div>
        )
    }
}

BookmarkList.defaultProps = {
    bookmarks:[]
}

export default BookmarkList;