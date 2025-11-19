// pages/Home/styles.ts
import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.neutral.dark};
  color: ${({ theme }) => theme.colors.neutral.text};
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing.md};

  ${({ theme }) => theme.media.tablet} {
    padding: ${({ theme }) => theme.spacing.lg};
  }
`;

export const Area = styled.div`
  margin: 0 auto;
  max-width: 65rem;
  width: 100%;
`;

export const Header = styled.h1`
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.colors.neutral.textLight};
  text-align: center;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.neutral.border};
  padding-bottom: ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};

  ${({ theme }) => theme.media.tablet} {
    font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
    padding-bottom: ${({ theme }) => theme.spacing.xl};
  }
`;

export const TodoTasksHeader = styled.h2`
  margin: ${({ theme }) => theme.spacing.xl} 0 ${({ theme }) => theme.spacing.lg} 0;
  padding: 0;
  color: ${({ theme }) => theme.colors.neutral.textLight};
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.neutral.border};
  padding-bottom: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};

  ${({ theme }) => theme.media.tablet} {
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
    margin: ${({ theme }) => theme.spacing['2xl']} 0 ${({ theme }) => theme.spacing.lg} 0;
  }
`;

export const DoneTasksHeader = styled(TodoTasksHeader)``;

export const TasksList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;
