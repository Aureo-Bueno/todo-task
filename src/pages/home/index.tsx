// pages/Home/Home.tsx
import { useState } from 'react';
import * as S from './styles';
import { AddArea } from '../../components/AddArea';
import { ListItem } from '../../components/ListItem';
import { useTask } from '../../hooks/useTask';

export function Home() {
  const { list, handleAddTask, listDoneTasks } = useTask();

  return (
    <S.Container>
      <S.Area>
        <S.Header>Lista de Tarefas</S.Header>

        <AddArea onEnter={handleAddTask} />

        <S.TodoTasksHeader>Tarefas Pendentes</S.TodoTasksHeader>
        <S.TasksList>
          {list.map((item, index) => (
            <ListItem key={index} item={item} />
          ))}
        </S.TasksList>

        {listDoneTasks.length > 0 && (
          <>
            <S.DoneTasksHeader>Tarefas Concluídas</S.DoneTasksHeader>
            <S.TasksList>
              {listDoneTasks.map((item, index) => (
                <ListItem key={index} item={item} />
              ))}
            </S.TasksList>
          </>
        )}
      </S.Area>
    </S.Container>
  );
}
