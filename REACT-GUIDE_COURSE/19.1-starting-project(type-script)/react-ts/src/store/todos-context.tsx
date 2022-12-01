import React from 'react';
import Todo from "../modules/todo";

type TodosContextObj = {
    items: Todo[],
    addTodo: (text: string) => void,
    removeTodo: (id: string) => void
};

export const TodosContext = React.createContext<TodosContextObj>({
    items: [],
    addTodo: () => {},
    removeTodo: (id: string) => {}
});

export const TodosContextProvider: React.FC<{children: React.ReactNode}> = (props) => {
    const [todos, setTodos] = React.useState<Todo[]>([]);

    const addTodoHandler = (todoText: string): void => {
        const newTodo = new Todo(todoText);

        setTodos((prevState) => {
            return [...prevState, newTodo];
        })
    };

    const removeTodoHandler = (todoId: string) => {
        setTodos((preTodos) => {
            return preTodos.filter(todo => todo.id !== todoId);
        });
    };

    const contextValue: TodosContextObj = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler
    }

    return(
        <TodosContext.Provider
            value={contextValue}
        >
            {props.children}
        </TodosContext.Provider>
    )
};