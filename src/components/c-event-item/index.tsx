import { useRouter } from 'next/navigation';
import * as S from './page.styled';

interface Props {
  title: string;
  date: string;
  description: string;
  bgUrl: string;
  link: {
    text: string;
    route: string;
  };
}

export default function CEvnetItem({
  title,
  date,
  description,
  bgUrl,
  link,
}: Props) {
  const router = useRouter();
  return (
    <S.Container>
      <S.ImageContainer>
        <S.ImageItem $bgUrl={bgUrl} />
      </S.ImageContainer>

      <S.ContentContainer>
        <S.Content>
          <S.Title>{title}</S.Title>
          <S.Date>{date.toString()} </S.Date>
          <S.Description> {description} </S.Description>
          <S.LearnMoreLink onClick={() => router.push(link.route)}>
            {' '}
            {link.text}{' '}
          </S.LearnMoreLink>
        </S.Content>
      </S.ContentContainer>
    </S.Container>
  );
}
