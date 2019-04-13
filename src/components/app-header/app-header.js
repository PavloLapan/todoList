import React, {Component} from "react";

export default class AppHeader extends Component{
    render(){

       const {todo, done }= this.props;
       return(
           <div className='card-header'>
               <h1 className=''>MY todoList  </h1><span>{todo} more to do, {done} done</span>
           </div>
       )
    }
}