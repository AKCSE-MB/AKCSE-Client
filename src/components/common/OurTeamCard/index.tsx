import * as S from './index.styled';

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio?: string;
  imageSrc?: string;
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
      <S.Portrait
        $image={imageSrc}
        role="img"
        aria-label={imageAlt ?? `Portrait of ${name}`}
      />
      <S.Body>
        <S.RoleBadge>{role}</S.RoleBadge>
        <S.Name>{name}</S.Name>
        {bio && <S.Bio>{bio}</S.Bio>}
      </S.Body>
    </S.Card>
  );
}
