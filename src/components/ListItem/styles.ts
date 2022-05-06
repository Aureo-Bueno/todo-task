import styled from 'styled-components';

type ContainerProps = {
    done: boolean;
}

export const Container = styled.div(({done}: ContainerProps) => (
  `
  display: flex;
  background-color: #20212C;
  padding: 0.4rem;
  border-radius: 0.4rem;
  margin-bottom: 0.5rem;
  align-items: center;

  input {
    width: 1rem;
    height: 0.9rem;
    margin-right: 1rem;
  }
  label {
      color: #CCC;
      text-decoration: ${done ? 'line-through' : 'initial'};
  }
`
));