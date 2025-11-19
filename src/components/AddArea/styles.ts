// components/AddArea/styles.ts
import styled from 'styled-components';

export const Container = styled.div`
  border: 0.1rem solid ${({ theme }) => theme.colors.neutral.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.sm};
  margin: ${({ theme }) => theme.spacing.lg} 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  align-items: center;

  ${({ theme }) => theme.media.tablet} {
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

export const Input = styled.input`
  flex: 1;
  background-color: transparent;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.colors.neutral.textLight};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  padding: ${({ theme }) => theme.spacing.md};
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.colors.neutral.text};
  }

  ${({ theme }) => theme.media.tablet} {
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
  }
`;

export const ButtonAddTask = styled.button`
  background-color: ${({ theme }) => theme.colors.actionBg};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.neutral.textLight};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.actionBgHover};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.semantic.success};
    outline-offset: 2px;
  }

  ${({ theme }) => theme.media.tablet} {
    width: auto;
    white-space: nowrap;
  }
`;
