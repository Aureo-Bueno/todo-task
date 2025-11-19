// components/ListItem/ListItem.tsx
import { Item } from '../../context/types';
import { useTask } from '../../hooks/useTask';
import * as S from './styles';
import { useState } from 'react';

type Props = {
  item: Item;
};

export function ListItem({ item }: Props) {
  const { handleCompleteTask, handleDeleteTask, handleEditTask } = useTask();
  const [isChecked, setIsChecked] = useState(item.done);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    handleCompleteTask(item.id);
  };

  const handleRemoveClick = () => {
    handleDeleteTask(item.id);
  };

  const handleEditClick = () => {
    const newName = prompt('Digite o novo nome da tarefa:', item.name);
    if (newName !== null && newName.trim() !== '') {
      handleEditTask(item.id, newName);
    }
  };

  return (
    <S.Wrapper done={isChecked}>
      <S.Container done={isChecked}>
        <S.Label id={`label-${item.id}`}>{item.name}</S.Label>
      </S.Container>
      <S.ContainerButtons>
        <S.ButtonRemoveTask onClick={handleRemoveClick}>
          Excluir
        </S.ButtonRemoveTask>
        <S.ButtonCompleteTask onClick={handleCheckboxChange}>
          {isChecked ? 'Marcar como Pendente' : 'Concluir'}
        </S.ButtonCompleteTask>
        <S.ButtonEditTask onClick={handleEditClick}>Editar</S.ButtonEditTask>
      </S.ContainerButtons>
    </S.Wrapper>
  );
}
