import styled from 'styled-components';

export const Container = styled.form`
  display: grid;
  gap: ${({ theme }) => theme.spacing.sm};

  ${({ theme }) => theme.media.tablet} {
    grid-template-columns: 1fr auto;
    align-items: end;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

export const FieldGroup = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const FieldLabel = styled.label`
  color: ${({ theme }) => theme.colors.mutedStrong};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

export const Input = styled.input`
  min-height: 3rem;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  background-color: ${({ theme }) => theme.colors.surfaceMuted};
  color: ${({ theme }) => theme.colors.foreground};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  transition:
    border-color ${({ theme }) => theme.transitions.fast},
    background-color ${({ theme }) => theme.transitions.fast};

  &::placeholder {
    color: ${({ theme }) => theme.colors.muted};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.surface};
    outline: none;
  }
`;

export const ButtonAddTask = styled.button`
  min-height: 3rem;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.base};
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  transition:
    transform ${({ theme }) => theme.transitions.fast},
    background-color ${({ theme }) => theme.transitions.fast};

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.primaryHover};
    transform: translateY(-1px);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`;
