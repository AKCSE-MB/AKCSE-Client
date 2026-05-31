import * as S from './index.styled';

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  imageSrc: string;
  imageAlt?: string;
}

export default function TeamMemberCard({
  name,
  role,
  bio,
  imageSrc,
  imageAlt,
}: TeamMemberCardProps) {
  return (
    <S.Card>
      <S.ImageWrapper>
        <S.Image src={imageSrc} alt={imageAlt ?? name} />
      </S.ImageWrapper>
      <S.Content>
        <S.Name>{name}</S.Name>
        <S.Role>{role}</S.Role>
        <S.Bio>{bio}</S.Bio>
      </S.Content>
    </S.Card>
  );
}
