import React from 'react';
import ToDo from '../models/todo';
import {useState} from 'react';

type TodosContextObj = {
    items: ToDo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
}

export const TodosContext = React.createContext<TodosContextObj>({
    items:[],
    addTodo: () => {},
    removeTodo: (id:string)=>{}
});

const TodosContextProvider: React.FC = (props) => {

    const [todos, setTodos] = useState <ToDo[]>([]);

    const addTodoHandler = (todoText: string) => {
      const newTodo = new ToDo(todoText);
      setTodos((prevTodos)=>{
        return prevTodos.concat(newTodo);
      });
    };
  
    const removeTodoHandler = (todoId: string) => {
      setTodos((prevTodos)=>{
      return prevTodos.filter(todo => todo.id !== todoId)})
    };

    const contextValue: TodosContextObj = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler
    };
  

    return <TodosContext.Provider value={contextValue}>
        {props.children}
    </TodosContext.Provider>
};


export default TodosContextProvider;

