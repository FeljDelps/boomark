import React, { Component } from 'react';

class Fab extends Component {
    render(){
        return(
            <div className='Fab' onClick={e => this.props.showform(true)}>
                &#43;
            </div>
        )
    }
}
export default Fab;
