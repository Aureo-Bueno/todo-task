import { FormEvent, useMemo, useState } from 'react';
import { TopNav } from '../../components/TopNav';
import { useTask } from '../../hooks/useTask';
import * as S from './styles';

export function Kanban() {
  const {
    columns,
    tasks,
    handleMoveTaskToColumn,
    handleAddColumn,
    handleEditColumn,
    handleDeleteColumn,
    handleEditTask,
    handleDeleteTask,
  } = useTask();

  const [newColumnName, setNewColumnName] = useState('');
  const [draggedTaskId, setDraggedTaskId] = useState<number | null>(null);

  const groupedColumns = useMemo(
    () =>
      columns.map((column) => ({
        column,
        tasks: tasks.filter((task) => task.columnId === column.id),
      })),
    [columns, tasks],
  );

  const handleSubmitColumn = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleAddColumn(newColumnName);
    setNewColumnName('');
  };

  const handleRenameColumn = (columnId: string, currentName: string) => {
    const newName = prompt('Novo nome da coluna:', currentName);

    if (newName !== null && newName.trim() !== '') {
      handleEditColumn(columnId, newName);
    }
  };

  const handleRemoveColumn = (columnId: string, columnName: string) => {
    if (columns.length <= 1) {
      return;
    }

    const confirmed = window.confirm(
      `Excluir a coluna "${columnName}"? As tarefas dela serão movidas para a primeira coluna.`,
    );

    if (confirmed) {
      handleDeleteColumn(columnId);
    }
  };

  const handleMoveTask = (taskId: number, nextColumnIndex: number) => {
    const nextColumn = columns[nextColumnIndex];

    if (!nextColumn) {
      return;
    }

    handleMoveTaskToColumn(taskId, nextColumn.id);
  };

  const handleEditTaskName = (taskId: number, currentName: string) => {
    const nextName = prompt('Editar tarefa:', currentName);

    if (nextName !== null && nextName.trim() !== '') {
      handleEditTask(taskId, nextName);
    }
  };

  const handleDeleteTaskCard = (taskId: number) => {
    handleDeleteTask(taskId);
  };

  return (
    <S.Container>
      <S.Area>
        <TopNav />

        <S.Hero>
          <S.Title>Kanban Board</S.Title>
          <S.Subtitle>
            Mova tarefas entre etapas com drag and drop ou pelos botões de
            avanço e retorno.
          </S.Subtitle>
          <S.BoardStats>
            {tasks.length} tarefa(s) distribuídas em {columns.length} coluna(s)
          </S.BoardStats>
        </S.Hero>

        <S.AddColumnForm onSubmit={handleSubmitColumn}>
          <S.AddColumnInput
            type="text"
            value={newColumnName}
            onChange={(event) => setNewColumnName(event.target.value)}
            placeholder="Nome da nova coluna"
            aria-label="Nome da nova coluna"
          />
          <S.AddColumnButton type="submit">Adicionar coluna</S.AddColumnButton>
        </S.AddColumnForm>

        <S.BoardWrapper>
          <S.ColumnsGrid>
            {groupedColumns.map(({ column, tasks: columnTasks }, columnIndex) => (
              <S.Column
                key={column.id}
                onDragOver={(event) => event.preventDefault()}
                onDrop={(event) => {
                  event.preventDefault();

                  if (draggedTaskId !== null) {
                    handleMoveTaskToColumn(draggedTaskId, column.id);
                  }

                  setDraggedTaskId(null);
                }}
              >
                <S.ColumnHeader>
                  <S.ColumnTitle>{column.title}</S.ColumnTitle>
                  <S.CountBadge>{columnTasks.length}</S.CountBadge>
                </S.ColumnHeader>

                <S.ColumnActions>
                  <S.ActionButton
                    type="button"
                    onClick={() => handleRenameColumn(column.id, column.title)}
                  >
                    Editar
                  </S.ActionButton>
                  <S.ActionButton
                    type="button"
                    $danger
                    disabled={columns.length <= 1}
                    onClick={() => handleRemoveColumn(column.id, column.title)}
                  >
                    Excluir
                  </S.ActionButton>
                </S.ColumnActions>

                <S.TaskList>
                  {columnTasks.length === 0 ? (
                    <S.EmptyColumn>
                      Sem tarefas aqui. Arraste um card para esta etapa.
                    </S.EmptyColumn>
                  ) : (
                    columnTasks.map((task) => (
                      <S.TaskCard
                        key={task.id}
                        draggable
                        onDragStart={() => setDraggedTaskId(task.id)}
                        onDragEnd={() => setDraggedTaskId(null)}
                      >
                        <S.TaskName>{task.name}</S.TaskName>

                        <S.StepActions>
                          <S.StepButton
                            type="button"
                            disabled={columnIndex === 0}
                            onClick={() => handleMoveTask(task.id, columnIndex - 1)}
                          >
                            Etapa anterior
                          </S.StepButton>
                          <S.StepButton
                            type="button"
                            disabled={columnIndex === columns.length - 1}
                            onClick={() => handleMoveTask(task.id, columnIndex + 1)}
                          >
                            Próxima etapa
                          </S.StepButton>
                        </S.StepActions>

                        <S.TaskActions>
                          <S.ActionButton
                            type="button"
                            onClick={() => handleEditTaskName(task.id, task.name)}
                          >
                            Editar tarefa
                          </S.ActionButton>
                          <S.ActionButton
                            type="button"
                            $danger
                            onClick={() => handleDeleteTaskCard(task.id)}
                          >
                            Excluir tarefa
                          </S.ActionButton>
                        </S.TaskActions>
                      </S.TaskCard>
                    ))
                  )}
                </S.TaskList>
              </S.Column>
            ))}
          </S.ColumnsGrid>
        </S.BoardWrapper>
      </S.Area>
    </S.Container>
  );
}
