import styled from 'styled-components';

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
  position: relative;
  margin: 0 auto;
  max-width: 72rem;
  width: 100%;
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};

  ${({ theme }) => theme.media.tablet} {
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

export const Hero = styled.header`
  display: grid;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  box-shadow: ${({ theme }) => theme.shadows.base};

  ${({ theme }) => theme.media.tablet} {
    padding: ${({ theme }) => theme.spacing.xl};
  }
`;

export const Kicker = styled.span`
  width: fit-content;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  color: ${({ theme }) => theme.colors.mutedStrong};
  background-color: ${({ theme }) => theme.colors.surfaceMuted};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  letter-spacing: 0.06em;
  padding: ${({ theme }) => theme.spacing.xxs} ${({ theme }) => theme.spacing.sm};
  text-transform: uppercase;
`;

export const Header = styled.h1`
  color: ${({ theme }) => theme.colors.foreground};
  font-family: ${({ theme }) => theme.typography.displayFamily};
  font-size: clamp(2rem, 6vw, 3.25rem);
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.mutedStrong};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  max-width: 52ch;

  ${({ theme }) => theme.media.tablet} {
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
  }
`;

export const DateLabel = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

export const StatsGrid = styled.section`
  display: grid;
  gap: ${({ theme }) => theme.spacing.sm};
  grid-template-columns: repeat(1, minmax(0, 1fr));

  ${({ theme }) => theme.media.mobile} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const StatCard = styled.article`
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.surface};
  display: grid;
  gap: ${({ theme }) => theme.spacing.xxs};
`;

export const StatLabel = styled.span`
  color: ${({ theme }) => theme.colors.muted};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const StatValue = styled.strong`
  color: ${({ theme }) => theme.colors.foreground};
  font-size: clamp(1.35rem, 4vw, 2rem);
  font-family: ${({ theme }) => theme.typography.displayFamily};
`;

export const Section = styled.section`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.base};

  ${({ theme }) => theme.media.tablet} {
    padding: ${({ theme }) => theme.spacing.xl};
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.sm};
  flex-wrap: wrap;
`;

export const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.foreground};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-family: ${({ theme }) => theme.typography.displayFamily};
`;

export const CountBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2rem;
  min-width: 2rem;
  padding: 0 ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.mutedStrong};
  background-color: ${({ theme }) => theme.colors.surfaceMuted};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
`;

export const TasksList = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const EmptyState = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  background-color: ${({ theme }) => theme.colors.surfaceMuted};
  border: 1px dashed ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  padding: ${({ theme }) => theme.spacing.lg};
  text-align: center;
`;
