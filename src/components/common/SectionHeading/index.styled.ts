import styled from 'styled-components';

export const Title = styled.h2`
  font-family: var(--font-outfit), var(--Pretendard-Variable), sans-serif;
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.onSurface};
  margin-bottom: 16px;

  @media (min-width: 768px) {
    font-size: 36px;
  }
`;

export const Bar = styled.div<{ $color: string; $centeredOnMobile?: boolean }>`
  height: 6px;
  width: 80px;
  background-color: ${({ $color }) => $color};
  border-radius: 999px;
  margin-bottom: 24px;

  ${({ $centeredOnMobile }) =>
    $centeredOnMobile &&
    `
    margin-left: auto;
    margin-right: auto;
    @media (min-width: 768px) {
      margin-left: 0;
      margin-right: 0;
    }
  `}
`;

export const Description = styled.p`
  font-size: 18px;
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
`;
