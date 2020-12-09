import React, { Component } from 'react';


//In React, the text to be displayed in a textarea is added as a value prop, instead as of adding as children

//INTERACTIVITY - We're creating a controlled component, managing state by adding event handlers.  Checkout the constructor

class AddBoomark extends Component {

//INTERACTIVITY - Setting state in this component for the controlled form.  State is set here because it's not needed anywhere else.
    constructor(props){
        super(props)
        this.state={
            title:'',
            url:'',
            description:'',
            rating:1
        };
    }

// This method is reponsible for updating the title when that input is updated
    titleChanged(title){
        this.setState({
            title
        })
    }

//This method is responsible for updating the url when that input is changed
    urlChanged(url){
        this.setState({
            url
        })
    }

//This method is responsible for updating the textarea when that input is changed
    descriptionChanged(description){
        this.setState({
            description
        })
    }

//This method is responsible for updating the rating when that input is changed
    ratingChanged(rating){
        this.setState({
            rating
        })
    }

//This method is responsble for constructing a bookmark object out of the values in the state, 
//& will be invoked in the handleAdd callback function that was passed in as a prop for App.js.
//To create a new bookmark on the server, we have to make a POST request, sending data w/ an API key
//We'll use the 'options' object of the fetch API again.
//We can use the 'body' option which sets some data in the body of the request
    handleSubmit(e){
        e.preventDefault();
        const {title, url, description, rating} = this.state;
        const bookmark = {title, url, description, rating};
        const url2 = 'https://thinkful-list-api.herokuapp.com/v3/bookmarks';

        const options = {
            method: 'POST',
            //The JSON.stringify() method takes a javascript object & renders a json string
            body: JSON.stringify(bookmark),
            headers:{ 'content-type': 'application/json',
            'Authorization':'Bearer $2a$10$UCsSAVvTXv2/UPwq13pm2.Xk9EkLGW9b1mYha7Y03X8/4EKearLPa'
            }
        };

        fetch(url2, options)
            .then(res => {
                if(!res.ok){
                    throw new Error('Something is wrong!')
                }
                return res.json();
            })
            .then(data => {
                this.setState({
                    title: '',
                    url: '',
                    descrption:'',
                    rating:1
                });
                this.props.handleAdd(bookmark);
            })
            .catch(err => {
                this.setState({
                    error:err.message
                });
            });
    }


//INTERACTIVITY - Add a value  prop to each form input so it always displays whatever value is in the state, 
//as well as onChange event handlers for methods created to update the value's when they're change
    render(){
        return(
            <div className='addBookmark'>
                <h2>Add Bookmark</h2>
                <form classsName='addbookmark_form'>
                    <label htmlFor='title'>Title</label>
                    <input 
                        type='text' 
                        name='title' 
                        id='title' 
                        placeholder='title' 
                        value={this.state.title} 
                        onChange={e => this.titleChanged(e.target.value)}/>
                    <label htmlFor='url'>URL</label>
                    <input 
                        type='text' 
                        name='url' 
                        id='url' 
                        placeholder='url' 
                        value={this.state.url}
                        onChange={e => this.urlChanged(e.target.value)}/>
                    <label htmlFor='description'>Description</label>
                    <textarea 
                        name='description' 
                        id='description' 
                        placeholder='description' 
                        value={this.state.description}
                        onChange={e => this.descriptionChanged(e.target.value)}/>
                    <label htmlFor='rating'>Rating</label>
                    <input
                        type='number'
                        name='rating'
                        id='rating'
                        min='1'
                        max='5'
                        value={this.state.rating}
                        onChange={e => this.ratingChanged(e.target.value)}/>
                    <div className='addbookmark_buttons'>
                        <button onClick={e => this.props.showForm(false)}>Cancel</button>
                        <button type='submit'>Save</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddBoomark;