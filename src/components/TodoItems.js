import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';

const Remove = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #dee2e6;
    font-size: 24px;
    cursor: pointer;
    &:hover {
        color: #f783ac;
    }
    opacity: 0;
`;

const TodoItemBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 0 0 12px;
    &:hover {
        ${Remove} {
            opacity: 1;
        }
    }
`;

const CheckCircle = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 1px solid #91a7ff;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-right: 20px;
    ${props => 
    props.done &&
    css`
        border: 1px solid #91a7ff;
        color: #91a7ff;
    `}
`;

const Text = styled.div`
    flex: 1;
    font-size: 21px;
    color: #494949;
    ${props =>
    props.done &&
    css`
        color: #ced4da;
    `}
`;

function TodoItem({id, done, text}) {
    return(
        <TodoItemBlock>
            <CheckCircle done={done}>{done && <MdDone/>}</CheckCircle>
            <Text done={done}>{text}</Text>
            <Remove><MdDelete/></Remove>
        </TodoItemBlock>
    );
}

export default TodoItem;