import { useRouter } from 'next/navigation';
import * as S from './index.styled';

interface Props {
  title: string;
  date: string;
  description: string;
  bgUrl: string;
  link: {
    text: string;
    route: string;
  };
  isPast: boolean;
}

export default function CEventItem({
  title,
  date,
  description,
  bgUrl,
  link,
  isPast,
}: Props) {
  const router = useRouter();
  return (
    <S.Container $isPast={isPast}>
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
