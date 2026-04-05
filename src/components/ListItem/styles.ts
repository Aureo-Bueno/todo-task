import styled from 'styled-components';

type ContainerProps = {
  done: boolean;
};

export const Wrapper = styled.article<ContainerProps>`
  display: grid;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme, done }) =>
    done ? theme.colors.surfaceMuted : theme.colors.surface};
  transition:
    transform ${({ theme }) => theme.transitions.normal},
    border-color ${({ theme }) => theme.transitions.normal};

  &:hover {
    transform: translateY(-1px);
    border-color: ${({ theme }) => theme.colors.primary};
  }

  ${({ theme }) => theme.media.desktop} {
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  min-height: 2.75rem;
  width: 100%;
`;

export const StatusBadge = styled.span<ContainerProps>`
  width: 0.8rem;
  height: 0.8rem;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  flex-shrink: 0;
  background-color: ${({ done, theme }) =>
    done ? theme.colors.success : theme.colors.accent};
`;

export const Label = styled.p<ContainerProps>`
  color: ${({ done, theme }) =>
    done ? theme.colors.muted : theme.colors.foreground};
  text-decoration: ${({ done }) => (done ? 'line-through' : 'none')};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  word-break: break-word;
`;

const ButtonBase = styled.button`
  min-height: 2.75rem;
  border-radius: ${({ theme }) => theme.borderRadius.base};
  border: 1px solid transparent;
  padding: 0 ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  transition:
    transform ${({ theme }) => theme.transitions.fast},
    background-color ${({ theme }) => theme.transitions.fast},
    border-color ${({ theme }) => theme.transitions.fast};

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const ButtonCompleteTask = styled(ButtonBase)`
  background-color: ${({ theme }) => theme.colors.successSoft};
  color: ${({ theme }) => theme.colors.success};
  border-color: rgba(22, 101, 52, 0.22);

  &:hover {
    background-color: ${({ theme }) => theme.colors.success};
    color: #fff;
  }
`;

export const ButtonEditTask = styled(ButtonBase)`
  background-color: ${({ theme }) => theme.colors.infoSoft};
  color: ${({ theme }) => theme.colors.info};
  border-color: rgba(29, 78, 216, 0.22);

  &:hover {
    background-color: ${({ theme }) => theme.colors.info};
    color: #fff;
  }
`;

export const ButtonRemoveTask = styled(ButtonBase)`
  background-color: ${({ theme }) => theme.colors.dangerSoft};
  color: ${({ theme }) => theme.colors.danger};
  border-color: rgba(185, 28, 28, 0.22);

  &:hover {
    background-color: ${({ theme }) => theme.colors.danger};
    color: #fff;
  }
`;

export const ContainerButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.xs};

  ${({ theme }) => theme.media.tablet} {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
  }
`;
