import * as S from './page.styled';

interface ExecutiveCardProps {
  image: string;
  id: string;
}

export default function ExecutiveCard({ image, id }: ExecutiveCardProps) {
  return (
    <S.Container>
      <S.Image src={image} alt={id} />
    </S.Container>
  );
}
