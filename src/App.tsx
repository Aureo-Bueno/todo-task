import { useState } from 'react';
import * as S from './App.styles';
import { AddArea } from './components/AddArea';
import { ListItem } from './components/ListItem';
import { Item } from './types/Item';

export const App = () => {
  const [list, setList] = useState<Item[]>([
    {id: 1, name: 'Exemplo de Atividade', done: false},
  ]);


  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList);
  }

  return (
    <S.Container>
      <S.Area>
        <S.Header>Lista de Tarefas</S.Header>

        <AddArea onEnter={handleAddTask}/>

        {list.map((item, index) => (
          <ListItem key={index} item={item}  />
        ))}
      </S.Area>
    </S.Container>
  );
}
