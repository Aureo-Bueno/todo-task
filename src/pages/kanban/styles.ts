import styled from 'styled-components';

type ActionButtonProps = {
  $danger?: boolean;
};

export const Container = styled.main`
  min-height: 100dvh;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.md}
    ${({ theme }) => theme.spacing['3xl']};

  ${({ theme }) => theme.media.tablet} {
    padding: ${({ theme }) => theme.spacing['2xl']} ${({ theme }) => theme.spacing.lg}
      ${({ theme }) => theme.spacing['4xl']};
  }
`;

export const Area = styled.div`
  max-width: 90rem;
  margin: 0 auto;
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const Hero = styled.section`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xs};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  background-color: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.base};
  padding: ${({ theme }) => theme.spacing.lg};
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.foreground};
  font-family: ${({ theme }) => theme.typography.displayFamily};
  font-size: clamp(1.65rem, 5vw, 2.4rem);
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.mutedStrong};
`;

export const BoardStats = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

export const AddColumnForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background-color: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing.sm};
`;

export const AddColumnInput = styled.input`
  min-height: 2.9rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  background-color: ${({ theme }) => theme.colors.surfaceMuted};
  padding: 0 ${({ theme }) => theme.spacing.md};

  &::placeholder {
    color: ${({ theme }) => theme.colors.muted};
  }
`;

export const AddColumnButton = styled.button`
  min-height: 2.9rem;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.base};
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  padding: 0 ${({ theme }) => theme.spacing.md};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;

export const BoardWrapper = styled.section`
  overflow-x: auto;
  padding-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const ColumnsGrid = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(18rem, 1fr);
  gap: ${({ theme }) => theme.spacing.md};
  align-items: start;
`;

export const Column = styled.article`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background-color: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  min-height: 24rem;
  display: grid;
  grid-template-rows: auto auto 1fr;
`;

export const ColumnHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const ColumnTitle = styled.h2`
  color: ${({ theme }) => theme.colors.foreground};
  font-family: ${({ theme }) => theme.typography.displayFamily};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
`;

export const CountBadge = styled.span`
  min-width: 2rem;
  min-height: 2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.surfaceMuted};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.mutedStrong};
`;

export const ColumnActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: 0 ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.sm};
`;

export const ActionButton = styled.button<ActionButtonProps>`
  min-height: 2.25rem;
  border-radius: ${({ theme }) => theme.borderRadius.base};
  border: 1px solid
    ${({ $danger, theme }) =>
      $danger ? 'rgba(185, 28, 28, 0.22)' : theme.colors.border};
  background-color: ${({ $danger, theme }) =>
    $danger ? theme.colors.dangerSoft : theme.colors.surfaceMuted};
  color: ${({ $danger, theme }) =>
    $danger ? theme.colors.danger : theme.colors.mutedStrong};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  padding: 0 ${({ theme }) => theme.spacing.sm};

  &:hover:not(:disabled) {
    opacity: 0.88;
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`;

export const TaskList = styled.div`
  display: grid;
  align-content: start;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.md};
`;

export const EmptyColumn = styled.p`
  border: 1px dashed ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  background-color: ${({ theme }) => theme.colors.surfaceMuted};
  color: ${({ theme }) => theme.colors.muted};
  text-align: center;
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

export const TaskCard = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  background-color: ${({ theme }) => theme.colors.surface};
  display: grid;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => theme.spacing.sm};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

export const TaskName = styled.p`
  color: ${({ theme }) => theme.colors.foreground};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  word-break: break-word;
`;

export const StepActions = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const StepButton = styled.button`
  min-height: 2.2rem;
  border-radius: ${({ theme }) => theme.borderRadius.base};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.surfaceMuted};
  color: ${({ theme }) => theme.colors.mutedStrong};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};

  &:hover:not(:disabled) {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.foreground};
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export const TaskActions = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.xs};
`;
