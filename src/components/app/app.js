import React, {Component} from 'react';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import AddItem from '../add-item/add-item'
import ItemStatus from "../item-status-search/item-status-search";


export default class App extends Component{

    max = 1;

        state = {

         todoData: [
             this.createTodoItem('make smth'),
             this.createTodoItem('create smth'),
             this.createTodoItem('do smth')
        ],
         term: '',
         filter: 'all'
    };

    createTodoItem(label){
        return{
            label,
            done: false,
            important: false,
            id: this.max++
        }
    }

    deleteItem = (id) =>{
        this.setState(({ todoData })=>{
            const idx = todoData.findIndex((el) => el.id === id);

            const newArr = [...todoData.slice(0, idx), ...todoData.slice(idx+1)];
            return{
                todoData: newArr
            }
        });
    };

    addItem = (text) =>{

        const newItem = this.createTodoItem(text);

       this.setState(({todoData})=>{
           const newArr = [
               ...todoData,
               newItem
           ];
           return{
               todoData: newArr
           }
       })

    };

    toggleProp = (arr, id, propName)=>{

            const idx = arr.findIndex((el) => el.id === id);
            const oldItem = arr[idx];
            const newItem = {...oldItem, [propName]: !oldItem[propName]};
            return[
                ...arr.slice(0, idx),
                newItem,
                ...arr.slice(idx+1)
            ];
    };

    onToggleImportant=(id)=>{
        this.setState(()=>{
            return{
               todoData: this.toggleProp(this.state.todoData, id, 'important')
            }
        });
    };

    onToggleDone=(id)=>{
        this.setState(()=>{
            return{
                todoData: this.toggleProp(this.state.todoData, id, 'done')
            }
        });
    };

    onToggleClick = (id) =>{
        this.setState(()=>{
            return{
                todoData: this.toggleProp(this.state.todoData, id, 'active')
            }
        });
    };

    search(items, term){
        if (term.length === 0){
            return items
        }

        return items.filter((item)=>{

            return item.label.indexOf(term) > -1;
        })
    };

    onSearchChange =(term)=>{
        this.setState({term})
    };

   filter(items, filter){
       switch (filter) {
           case 'all':
               return items;
           case 'active':
               return items.filter((item)=>!item.done);
           case 'done':
               return items.filter((item)=>item.done);
           default:
               return items;
       }

   }

    onFilterChange=(filter)=>{
        this.setState({filter})
    };

    render(){
        const { todoData, term, filter } = this.state;
        const doneCount = todoData.filter((el)=>el.done).length;
        const todoCount = todoData.length - doneCount;
        const visibleItems = this.filter(this.search(todoData, term), filter);
        return (
            <div className='container'>
                <AppHeader todo={todoCount} done={doneCount}/>
                <SearchPanel
                    onSearchChange={this.onSearchChange}

                />
                <ItemStatus
                    filter={filter}
                    onFilterChange = {this.onFilterChange}


                />
                <TodoList
                    todos={visibleItems}
                    onDeleted={this.deleteItem}
                    toggleImportant={this.onToggleImportant}
                    toggleDone = {this.onToggleDone}
                />
                <AddItem onItemAdded = {this.addItem} />
            </div>
        );
    }
};

