import React, {Component} from "react";
import './todo-list-item.css';

export default class TodoListItem extends Component{

    render(){
        const {label, onDeleted, toggleImportant, toggleDone, important, done} = this.props;



        let classNames = 'todo-list-item ';

        if (done){
            classNames += ' line-through'
        }
        if (important){
            classNames += ' important'
        }
        return (
            <div className='d-flex justify-content-between w-100'>
            <span className={classNames}
                  onClick={toggleDone}>
              {label}
            </span>

                <div>
                   <button type='button' className='btn btn-outline-danger fa fa-trash-o m-1' onClick={onDeleted}></button>
                   <button type='button' className='btn btn-outline-success fa fa-exclamation m-1' onClick={toggleImportant}></button>
               </div>
            </div>
        );
    }

}

