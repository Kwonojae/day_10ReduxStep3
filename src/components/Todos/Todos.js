import  React, { useRef, useState } from 'react'
import '../../utils/css/reset.scss'
import './Todo.css'
import Form from './Form';
import List from './List';

const Todos = () => { 
    return (
        <div className="Todo">
            <h1>Todo List</h1>
            <Form />
            <List />
        </div>
    );
};

export default Todos;