import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: ${p => p.theme.space[4]}px;

  border: ${props => props.theme.borders.addTaskBTN};
  border-radius: ${props => props.theme.radii.normal};

  background-color: ${props => props.theme.colors.btnMain};
  box-shadow: ${props => props.theme.shadows.loginBtn};

  cursor: pointer;

  font-weight: ${props => props.theme.fontWeights.semibold};
  font-size: ${props => props.theme.fontSizes.s};

  color: ${props => props.theme.colors.black};

  img {
    margin-right: ${p => p.theme.space[4] - 1}px;
  }
`;