import { useTheme } from 'styled-components';
import * as S from './index.styled';

interface Props {
  title: string;
  barColor?: 'blue' | 'gold';
  description?: string;
  centeredOnMobile?: boolean;
}

export default function SectionHeading({
  title,
  barColor = 'blue',
  description,
  centeredOnMobile = false,
}: Props) {
  const theme = useTheme();
  const color = barColor === 'gold' ? theme.colors.gold : theme.colors.blue;

  return (
    <>
      <S.Title>{title}</S.Title>
      <S.Bar $color={color} $centeredOnMobile={centeredOnMobile} />
      {description && <S.Description>{description}</S.Description>}
    </>
  );
}
