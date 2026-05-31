import styled from 'styled-components';

export const Button = styled.button<{
  $bgColor?: string;
  $hoverColor?: string;
  $textColor?: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 22px;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
  background-color: ${({ $bgColor, theme }) => $bgColor || theme.colors.gold};
  width: 171px;
  height: 44px;
  color: ${({ $textColor, theme }) => $textColor || theme.colors.black};
  font-weight: 450;
  border: none;
  border-radius: 10px;

  &:hover {
    background-color: ${({ $hoverColor, theme }) =>
      $hoverColor || theme.colors.goldDark};
  }

  &:enabled:active {
    opacity: 0.4;
  }

  &:disabled {
    opacity: 0.4;
    pointer-events: none;
  }
`;
