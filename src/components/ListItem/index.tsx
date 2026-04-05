import { Item } from '../../context/types';
import { useTask } from '../../hooks/useTask';
import * as S from './styles';

type Props = {
  item: Item;
};

export function ListItem({ item }: Props) {
  const { handleCompleteTask, handleDeleteTask, handleEditTask } = useTask();

  const handleToggleTaskStatus = () => {
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
    <S.Wrapper done={item.done}>
      <S.Container done={item.done}>
        <S.StatusBadge done={item.done} aria-hidden="true" />
        <S.Label done={item.done}>{item.name}</S.Label>
      </S.Container>

      <S.ContainerButtons>
        <S.ButtonCompleteTask onClick={handleToggleTaskStatus}>
          {item.done ? 'Reabrir' : 'Concluir'}
        </S.ButtonCompleteTask>
        <S.ButtonEditTask onClick={handleEditClick}>Editar</S.ButtonEditTask>
        <S.ButtonRemoveTask onClick={handleRemoveClick}>Excluir</S.ButtonRemoveTask>
      </S.ContainerButtons>
    </S.Wrapper>
  );
}
