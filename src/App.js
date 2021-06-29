import React from 'react';
import {createGlobalStyle} from 'styled-components';
import TodoTemplete from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';





const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle/>
      <TodoTemplete>
        <TodoHead/>
        <TodoList>

        </TodoList>
      </TodoTemplete>
    </>
  );
}

export default App;
