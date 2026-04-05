import * as S from './styles';
import { AddArea } from '../../components/AddArea';
import { ListItem } from '../../components/ListItem';
import { TopNav } from '../../components/TopNav';
import { useTask } from '../../hooks/useTask';

export function Home() {
  const { columns, tasks, handleAddTask, listDoneTasks } = useTask();
  const totalTasks = tasks.length;
  const openTasksCount = totalTasks - listDoneTasks.length;

  const columnsWithTasks = columns.map((column) => ({
    column,
    tasks: tasks.filter((task) => task.columnId === column.id),
  }));

  const formattedDate = new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'full',
  }).format(new Date());

  return (
    <S.Container>
      <S.Area>
        <TopNav />

        <S.Hero>
          <S.Kicker>Todo Task 2026</S.Kicker>
          <S.Header>Organize seu dia com clareza</S.Header>
          <S.Subtitle>
            Capture tarefas em segundos, acompanhe progresso em tempo real e
            mantenha o foco no que realmente importa.
          </S.Subtitle>
          <S.DateLabel>{formattedDate}</S.DateLabel>
        </S.Hero>

        <S.StatsGrid>
          <S.StatCard>
            <S.StatLabel>Total</S.StatLabel>
            <S.StatValue>{totalTasks}</S.StatValue>
          </S.StatCard>
          <S.StatCard>
            <S.StatLabel>Abertas</S.StatLabel>
            <S.StatValue>{openTasksCount}</S.StatValue>
          </S.StatCard>
          <S.StatCard>
            <S.StatLabel>Concluídas</S.StatLabel>
            <S.StatValue>{listDoneTasks.length}</S.StatValue>
          </S.StatCard>
        </S.StatsGrid>

        <S.Section>
          <S.SectionHeader>
            <S.SectionTitle>Nova tarefa</S.SectionTitle>
          </S.SectionHeader>
          <AddArea onEnter={handleAddTask} />
        </S.Section>

        {columnsWithTasks.map(({ column, tasks: columnTasks }) => (
          <S.Section key={column.id}>
            <S.SectionHeader>
              <S.SectionTitle>{column.title}</S.SectionTitle>
              <S.CountBadge>{columnTasks.length}</S.CountBadge>
            </S.SectionHeader>

            {columnTasks.length > 0 ? (
              <S.TasksList>
                {columnTasks.map((item) => (
                  <ListItem key={item.id} item={item} />
                ))}
              </S.TasksList>
            ) : (
              <S.EmptyState>
                Sem tarefas na coluna {column.title}. Adicione uma nova tarefa
                ou mova um card no Kanban.
              </S.EmptyState>
            )}
          </S.Section>
        ))}
      </S.Area>
    </S.Container>
  );
}
