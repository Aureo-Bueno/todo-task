// components/ListItem/styles.ts
import styled from 'styled-components';

type ContainerProps = {
  done: boolean;
};

export const Wrapper = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  opacity: ${({ done }) => (done ? 0.6 : 1)};
  transition: opacity ${({ theme }) => theme.transitions.normal};

  ${({ theme }) => theme.media.tablet} {
    flex-direction: row;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

export const Container = styled.div<ContainerProps>`
  display: flex;
  background-color: ${({ theme }) => theme.colors.neutral.darkCard};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  align-items: center;
  width: 100%;
  text-decoration: ${({ done }) => (done ? 'line-through' : 'none')};
  color: ${({ done, theme }) =>
    done ? theme.colors.neutral.text : theme.colors.neutral.textLight};
  transition: all ${({ theme }) => theme.transitions.normal};

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[700]};
  }

  ${({ theme }) => theme.media.tablet} {
    flex: 1;
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

export const Label = styled.label`
  flex: 1;
  margin-left: ${({ theme }) => theme.spacing.md};
  word-wrap: break-word;
  overflow-wrap: break-word;
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  cursor: pointer;
  user-select: none;
  width: 30px;

  ${({ theme }) => theme.media.tablet} {
    margin-left: ${({ theme }) => theme.spacing.lg};
  }
`;

export const InputCheckbox = styled.input`
  width: 1.2rem;
  height: 1.2rem;
  cursor: pointer;
  accent-color: ${({ theme }) => theme.colors.semantic.success};
`;

// ============= BOTÕES =============
const ButtonBase = styled.button`
  border: none;
  color: ${({ theme }) => theme.colors.neutral.textLight};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  transition: all ${({ theme }) => theme.transitions.fast};
  flex: 1;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }

  ${({ theme }) => theme.media.tablet} {
    flex: initial;
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
    font-size: ${({ theme }) => theme.typography.fontSize.base};
  }
`;

export const ButtonRemoveTask = styled(ButtonBase)`
  background-color: ${({ theme }) => theme.colors.semantic.error};

  &:hover {
    background-color: ${({ theme }) => theme.colors.semantic.errorHover};
    color: ${({ theme }) => theme.colors.neutral.textLight};
  }
`;

export const ButtonEditTask = styled(ButtonBase)`
  background-color: ${({ theme }) => theme.colors.semantic.info};
  margin-left: 0;

  &:hover {
    background-color: ${({ theme }) => theme.colors.semantic.infoHover};
  }

  ${({ theme }) => theme.media.tablet} {
    margin-left: ${({ theme }) => theme.spacing.sm};
  }
`;

export const ButtonCompleteTask = styled(ButtonBase)`
  background-color: ${({ theme }) => theme.colors.semantic.success};
  margin-left: 0;

  &:hover {
    background-color: ${({ theme }) => theme.colors.semantic.successHover};
  }

  ${({ theme }) => theme.media.tablet} {
    margin-left: ${({ theme }) => theme.spacing.sm};
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  width: 100%;

  ${({ theme }) => theme.media.tablet} {
    width: auto;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;
