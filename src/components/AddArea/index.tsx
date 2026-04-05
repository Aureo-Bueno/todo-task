import { useState } from 'react';
import * as S from './styles';

type Props = {
  onEnter: (taskName: string) => void;
};

export function AddArea({ onEnter }: Props) {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedValue = inputText.trim();

    if (!trimmedValue) {
      return;
    }

    onEnter(trimmedValue);
    setInputText('');
  };

  return (
    <S.Container onSubmit={handleSubmit}>
      <S.FieldGroup>
        <S.FieldLabel htmlFor="new-task">Descrição da tarefa</S.FieldLabel>
        <S.Input
          id="new-task"
          type="text"
          placeholder="Ex.: Revisar sprint planning"
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
          aria-label="Campo para adicionar nova tarefa"
        />
      </S.FieldGroup>

      <S.ButtonAddTask type="submit" disabled={!inputText.trim()}>
        Adicionar
      </S.ButtonAddTask>
    </S.Container>
  );
}
