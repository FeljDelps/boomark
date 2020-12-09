import React, { Component } from 'react';
import Fab from '../Fab/Fab';
import BookmarkList from '../BookmarkList/BookmarkList';


class BookmarkApp extends Component{
    render(){
        return(
            <div className='BookmarkApp'>
                <h2>Bookmarks</h2>
                <BookmarkList bookmarks={this.props.bookmarks}/>
                <Fab showForm={this.props.showForm}/>
            </div>
        )
    }
}
export default BookmarkApp;