import React, {Component} from "react";


export default class SearchPanel extends Component{

    state={
        term: ''
    };


    onSearchChange = (e) =>{
        const term = e.target.value;
        this.setState({
            term
        });
        this.props.onSearchChange(term)
    };


    render(){
        return(
        <div className='m-2'>
            <input
                className='font-italic p-1 '
                type="text"
                placeholder='type to search'
                value={this.state.term}
                onChange={this.onSearchChange}

            />
        </div>
    )}
}



