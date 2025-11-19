// components/AddArea/AddArea.tsx
import { useState } from 'react';
import * as S from './styles';

type Props = {
  onEnter: (taskName: string) => void;
};

export function AddArea({ onEnter }: Props): JSX.Element {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.code === 'Enter' && inputText !== '') {
      onEnter(inputText);
      setInputText('');
    }
  };

  const handleClickAdd = () => {
    if (inputText !== '') {
      onEnter(inputText);
      setInputText('');
    }
  };

  return (
    <S.Container>
      <S.Input
        type="text"
        placeholder="Adicionar nova tarefa..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyUp={handleSubmit}
        aria-label="Campo para adicionar nova tarefa"
      />
      <S.ButtonAddTask onClick={handleClickAdd}>
        Adicionar nova tarefa
      </S.ButtonAddTask>
    </S.Container>
  );
}
