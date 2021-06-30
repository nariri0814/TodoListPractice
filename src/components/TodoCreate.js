import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { useTodoDispatch, useTodoNextId } from '../TodoContext';

const CircleButton = styled.div`
    background: #91a7ff;
    &:hover {
        background: #fcc2d7;
    }
    &:active {
        background: #f783ac;
    }

    width: 80px;
    height: 80px;

    position: absolute;
    left: 50%;
    bottom: 0;
    z-index: 5;
    transform: translate(-50%, 50%);
    transition: all 0.2s ease-in;

    cursor: pointer;
    font-size: 60px;
    color: #fff;
    border: none;
    border-radius: 50%;
    outline: none;

    display: flex;
    justify-content: center;
    align-items: center;
    
    ${props => props.open && css`
        background: #91a7ff;
        &:hover {
            background: #f783ac;
        }
        &:active {
            background: #fcc2d7;
        }
        transform: translate(-50%, 50%) rotate(45deg);
    `};
`;

const InsertFormPositioner = styled.div`
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
`;

const InsertForm = styled.form`
    background: #f8f9fa;
    padding: 32px;
    padding-bottom: 72px;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
    width: 100%;
    padding: 12px;
    border: 1px solid #dee2e6;
    border-radius: 4px;
    outline: none;
    font-size: 16px;
    box-sizing: border-box;
`;


function TodoCreate() {
    const [open, setOpen] = useState(false);
    const onToggle = () => setOpen(!open)

    const dispatch = useTodoDispatch();
    const nextId = useTodoNextId();

    const[value, setValue] = useState('');
    const onChange = (e) => setValue(e.target.value);

    const onSubmit = e => {
        e.preventDefault();
        dispatch({
            type: 'CREATE',
            todo: {
                id: nextId.current,
                text: value,
                done: false,
            }
        });
        setValue('');
        setOpen(false);
        nextId.current += 1;
    }

    return(
        <>
            {open && (
            <InsertFormPositioner>
                <InsertForm onSubmit={onSubmit}>
                    <Input
                        placeholder="할 일 입력 후 ENTER"
                        autoFocus
                        onChange={onChange}
                        value={value}
                    />
                </InsertForm>
            </InsertFormPositioner>
            )}
            <CircleButton onClick={onToggle} open={open}>
                <MdAdd/>
            </CircleButton>
        </>
    )
}

export default TodoCreate;