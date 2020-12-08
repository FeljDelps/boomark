import React, { Component } from 'react';


//In React, the text to be displayed in a textarea is added as a value prop, instead as of adding as children
class AddBoomark extends Component {
    render(){
        return(
            <div className='addBookmark'>
                <h2>Add Bookmark</h2>
                <form classsName='addbookmark_form'>
                    <label htmlFor='title'>Title</label>
                    <input type='text' name='title' id='title' placeholder='title'/>
                    <label htmlFor='url'>URL</label>
                    <input type='text' name='url' id='url' placeholder='url'/>
                    <label htmlFor='description'>Description</label>
                    <textarea name='description' id='description' placeholder='description'/>
                    <label htmlFor='rating'>Rating</label>
                    <input
                        type='number'
                        name='rating'
                        id='rating'
                        min='1'
                        max='5'/>
                    <div className='addbookmark_buttons'>
                        <button>Cancel</button>
                        <button type='submit'>Save</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddBoomark;