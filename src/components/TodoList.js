import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItems';

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px 48px;
    overflow-y: auto;
`;

function TodoList() {
    return(
        <TodoListBlock>
           <TodoItem text="1" done={true}/>
           <TodoItem text="2" done={true}/>
           <TodoItem text="3" done={false}/>
           <TodoItem text="4" done={false}/>
        </TodoListBlock>
    );
}

export default TodoList;