import React, {Component} from "react";

export default class ItemStatus extends Component{

    buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'}
    ];


    render(){

        const { filter, onFilterChange } = this.props;
        const btns = this.buttons.map(({name, label}) => {
            const isActive = filter === name;
            const clazz = isActive ? 'btn-info' : 'btn-outline-secondary'
            return(

                <button
                    key={Math.random()}
                    type='button'
                    className={`btn ${clazz}`}
                    onClick={()=>onFilterChange(name)}

                >{label}</button>
            )
        });

        return(
            <div className='btn-group ml-2 float-right'>
                {btns}
            </div>
        );
    }
}
