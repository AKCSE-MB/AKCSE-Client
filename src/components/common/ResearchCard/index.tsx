import * as S from './index.styled';

interface Placeholder {
  label: string;
  gradient?: string;
  bgColor?: string;
  dark: boolean;
}

interface Props {
  href?: string;
  image?: string;
  alt?: string;
  placeholder?: Placeholder;
  category: string;
  badgeColor: string;
  badgeBg: string;
  title: string;
  subtitle?: string;
}

export default function ResearchCard({
  href,
  image,
  alt,
  placeholder,
  category,
  badgeColor,
  badgeBg,
  title,
  subtitle,
}: Props) {
  const card = (
    <S.Card>
      <S.ImageWrap
        $gradient={placeholder?.gradient}
        $bgColor={placeholder?.bgColor}
      >
        {image ? (
          <S.CardImg src={image} alt={alt} />
        ) : (
          placeholder && (
            <S.PlaceholderCenter>
              <S.PlaceholderLabel $dark={placeholder.dark}>
                {placeholder.label}
              </S.PlaceholderLabel>
              <S.PlaceholderText $dark={placeholder.dark}>
                [ image ]
              </S.PlaceholderText>
            </S.PlaceholderCenter>
          )
        )}
      </S.ImageWrap>

      <S.Content>
        <S.BadgeWrap>
          <S.Badge $color={badgeColor} $bg={badgeBg}>
            {category}
          </S.Badge>
        </S.BadgeWrap>

        <S.Title>{title}</S.Title>
        {subtitle && <S.Subtitle>{subtitle}</S.Subtitle>}
      </S.Content>
    </S.Card>
  );

  return href ? <S.CardLink href={href}>{card}</S.CardLink> : card;
}
