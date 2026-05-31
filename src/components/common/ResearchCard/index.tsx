import * as S from './index.styled';

interface Props {
  image: string;
  alt: string;
  category: string;
  badgeColor: string;
  badgeBg: string;
  title: string;
  author: string;
  editor: string;
}

export default function ResearchCard({
  image,
  alt,
  category,
  badgeColor,
  badgeBg,
  title,
  author,
  editor,
}: Props) {
  return (
    <S.Card>
      <S.ImageWrap>
        <S.CardImg src={image} alt={alt} />
      </S.ImageWrap>

      <S.Content>
        <S.BadgeWrap>
          <S.Badge $color={badgeColor} $bg={badgeBg}>
            {category}
          </S.Badge>
        </S.BadgeWrap>

        <S.Title>{title}</S.Title>

        <S.Footer>
          <S.FooterRow>
            <S.FooterLabel>Author</S.FooterLabel>
            <S.FooterValue>{author}</S.FooterValue>
          </S.FooterRow>
          <S.FooterRow>
            <S.FooterLabel $italic>Edited By</S.FooterLabel>
            <S.FooterValue $italic>{editor}</S.FooterValue>
          </S.FooterRow>
        </S.Footer>
      </S.Content>
    </S.Card>
  );
}
