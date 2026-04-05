import * as S from './styles';

export function TopNav() {
  return (
    <S.Container>
      <S.Brand>Todo Task</S.Brand>

      <S.NavItems>
        <S.LinkItem to="/" end>
          Home
        </S.LinkItem>
        <S.LinkItem to="/kanban">Kanban</S.LinkItem>
      </S.NavItems>
    </S.Container>
  );
}
