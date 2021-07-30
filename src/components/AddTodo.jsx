import { useState } from 'react';
import { HStack, Input, Button, useToast } from '@chakra-ui/react';
import { nanoid } from 'nanoid';

function AddTodo({ addTodo }) {
  const toast = useToast();

  function handleSubmit(e) {
    e.preventDefault();
    if (!content) {
      toast({
        title: 'No content :(',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const todo = {
      id: nanoid(),
      body: content,
    };

    addTodo(todo);
    setContent('');
  }

  const [content, setContent] = useState('');

  return (
    <form onSubmit={handleSubmit}>
      <HStack mt='8'>
        <Input
          variant='filled'
          placeholder='learning chakra UI'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button colorScheme='teal' px='8' type='submit'>
          Add todo
        </Button>
      </HStack>
    </form>
  );
}

export default AddTodo;
