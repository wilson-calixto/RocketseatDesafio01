import { useState } from 'react';
import { PlusCircle } from 'phosphor-react'
import { FormWrapper } from './styles';

interface NewTaskProps {
  createTask: (text: string) => void;
}

export function NewTask({ createTask }: NewTaskProps) {
  const [text, setText] = useState('');

  function handleCreateTask(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    if (text.length > 0) {
      createTask(text);
      setText('');
    }

  }

  return (
    <FormWrapper>
      <input placeholder='Adicione uma nova tarefa' type="text" id="ftask" name="ftask"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button onClick={(event) => handleCreateTask(event)}>
        Criar
        <PlusCircle size={24} />
      </button>
    </FormWrapper>
  );
}