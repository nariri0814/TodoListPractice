import React, { useReducer, createContext, useContext, useRef } from 'react';

const initialTodos = [
    {
        id: 1,
        text: '리액트 공부하기',
        done: true
    },
    {
        id: 2,
        text: '리액트 복습하기',
        done: true
    },
    {
        id: 3,
        text: '깃허브 올리기',
        done: false
    },
    {
        id: 4,
        text: '기리 산책하기',
        done: false
    }
];

function todoReducer(state, action) {
    switch (action.type) {
        case 'CREATE':
            return state.concat(action.todo);
        case 'TOGGLE':
            return state.map(todo =>
                todo.id === action.id ?
                { ...todo, done: !todo.done } : todo
            );
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.id)
        default:
            console.log('error');
    }
}

//state 와 dispatch 를 함께 넣어주는 대신에, 두개의 Context 를 만들어서 따로 따로 넣어줄 것입니다. 이렇게 하면 dispatch 만 필요한 컴포넌트에서 불필요한 렌더링을 방지
const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

//state 와 dispatch 를 Context 통하여 다른 컴포넌트에서 바로 사용
export function TodoProvider({children}) {
    const [state, dispatch] = useReducer(todoReducer, initialTodos);
    const nextId = useRef(5);
    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>
                    {children}
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
}

export function useTodoState() {
    return useContext(TodoStateContext);
}
export function useTodoDispatch() {
    return useContext(TodoDispatchContext);
}
export function useTodoNextId() {
    return useContext(TodoNextIdContext);
}