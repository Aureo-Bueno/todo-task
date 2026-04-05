import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background-color: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

export const Brand = styled.strong`
  color: ${({ theme }) => theme.colors.foreground};
  font-family: ${({ theme }) => theme.typography.displayFamily};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  padding: 0 ${({ theme }) => theme.spacing.sm};
`;

export const NavItems = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const LinkItem = styled(NavLink)`
  min-height: 2.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.borderRadius.base};
  padding: 0 ${({ theme }) => theme.spacing.md};
  border: 1px solid transparent;
  color: ${({ theme }) => theme.colors.mutedStrong};
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  transition:
    background-color ${({ theme }) => theme.transitions.fast},
    color ${({ theme }) => theme.transitions.fast},
    border-color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.foreground};
    border-color: ${({ theme }) => theme.colors.border};
    background-color: ${({ theme }) => theme.colors.surfaceMuted};
  }

  &.active {
    color: #fff;
    border-color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;
