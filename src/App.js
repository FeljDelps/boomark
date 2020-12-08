import React, { Component } from 'react';
import Addbookmark from './AddBookmark/Addbookmark';
import BookmarkApp from './BookmarkApp/BookmarkApp';

class App extends Component {
  render(){
    return(
      <div className='App'>
        <BookmarkApp />
        <Addbookmark />
      </div>
    )
  }
}

export default App;