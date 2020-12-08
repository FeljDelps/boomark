import React, { Component } from 'react';
import AddBookmark from './AddBookmark/Addbookmark';
import BookmarkApp from './BookmarkApp/BookmarkApp';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      bookmarks:[],
      showAddForm:false
    };
  }

  //we're fetching the data from the API
  componentDidMount(){
    const url='https://thinkful-list-api.herokuapp.com/v3/bookmarks';
    const options= {
      method: 'GET',
      headers: { //insert API key after bearer
        'Authorization': 'Bearer $2a$10$UCsSAVvTXv2/UPwq13pm2.Xk9EkLGW9b1mYha7Y03X8/4EKearLPa',
        'Content-Type': 'application/json'        
      }
    };

    fetch(url,options)
      .then(res => {
        if(!res.ok){
          throw new Error('Something went wrong.  Try again later');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          bookmarks:data,
          error:null
        });
      })
      .catch(err => {
        this.setState({
          err:err.message
        });
      })


  }

  
  render(){
    
    //this variable conditionally displays the Addbookmark component if it's true, otherwise it displays the BookmarkApp component
    const page = this.state.showAddForm ? <AddBookmark /> : <BookmarkApp bookmarks={this.state.bookmarks} />
    
    return(
      <div className='App'>
        {page}
      </div>
    )
  }
}

export default App;