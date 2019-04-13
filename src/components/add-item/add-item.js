import React, {Component} from 'react';

export default class AddItem extends Component{

    state = {
        label: ' ',
    };

    onLabelChange = (e)=>{
        this.setState({
            label: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label)
        this.setState({
            label: ''
        })
    };

    render() {
        return(
            <form className='form-group item-add-form d-flex' onSubmit={this.onSubmit}>
                <input type="text" name="" id=""
                       className='form-control mt-2 mr-2'
                       onChange={this.onLabelChange}
                       placeholder='add smth'
                       value={this.state.label}
                />
                <button type='button' className='btn btn-secondary mt-2' onClick={this.onSubmit}>Add item</button>
            </form>
        )
    }

}