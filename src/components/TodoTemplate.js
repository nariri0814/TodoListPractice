import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
    width: 512px;
    height: 768px;

    position: relative;
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);
    margin: 50px auto 32px;

    display: flex;
    // justify-content: center;
    // align-items: center;
    flex-direction: column;
`;

function TodoTemplete({children}) {
    return (
        <TodoTemplateBlock>
            {children}
        </TodoTemplateBlock>
    );
}

export default TodoTemplete;