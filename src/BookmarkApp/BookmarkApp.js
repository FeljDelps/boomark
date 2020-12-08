import React, { Component } from 'react';
import Fab from '../Fab/Fab';
import BookmarkList from '../BookmarkList/BookmarkList';


class BookmarkApp extends Component{
    render(){
        return(
            <div className='BookmarkApp'>
                <h2>Bookmarks</h2>
                <BookmarkList bookmarks={this.props.bookmarks}/>
                <Fab />
            </div>
        )
    }
}
export default BookmarkApp;