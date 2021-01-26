import React from 'react';
import { connect } from 'react-redux';
import Item from './Item';
import './List.css'


const List = ({todos}) => {
    return (
        <div className="List">
            <ul>
                {
                    todos.map( todo => <Item key={todo.id} 
                        todo ={ todo }
                    />)
                }
            </ul>
        </div>
    );
};

export default connect(
    ({todos}) => ({
        todos : todos.todos
    }),
    {}
) (List);