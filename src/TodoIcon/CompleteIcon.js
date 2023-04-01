import React from 'react';
import { TodoIcon } from './';

function CompleteIcon({ completed, onComplete }) {
  console.log('completed-----',completed)
 
  return (
    <TodoIcon
      type="check"
      color={completed ? 'green' : 'gray'}
      onClick={onComplete}
    />
  );
}

export { CompleteIcon };
