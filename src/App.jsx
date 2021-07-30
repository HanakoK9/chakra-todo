import { Heading } from '@chakra-ui/react';
import Todolist from './components/TodoList';
import AddTodo from './components/AddTodo';
import { VStack, IconButton, useColorMode } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useState, useEffect } from 'react';

function App() {
  // const initialTodos = [
  //   {
  //     id: 1,
  //     body: 'get bread',
  //   },
  //   {
  //     id: 2,
  //     body: 'get butter',
  //   },
  // ];

  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem('todos')) || []
  );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  }

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack p={4}>
      <IconButton
        icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
        isRound='true'
        size='lg'
        alignSelf='flex-end'
        onClick={toggleColorMode}
      />
      <Heading
        alignSelf='flex-start'
        pb='4'
        fontWeight='extrabold'
        size='2xl'
        bgGradient='linear(to-r, teal.500, teal.300, cyan.500)'
        bgClip='text'
      >
        todo
      </Heading>
      <Todolist todos={todos} deleteTodo={deleteTodo} />
      <AddTodo addTodo={addTodo} />
    </VStack>
  );
}

export default App;
