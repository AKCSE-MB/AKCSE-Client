import * as S from './index.styled';

interface DeveloperCardProps {
  name: string;
  role: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function DeveloperCard({
  name,
  role,
  imageSrc,
  imageAlt,
}: DeveloperCardProps) {
  const hasImage =
    imageSrc !== undefined && imageSrc !== null && imageSrc !== '';

  return (
    <S.Card>
      <S.PhotoCircle>
        {hasImage ? (
          <S.Image src={imageSrc} alt={imageAlt ?? name} />
        ) : (
          <S.PhotoText>photo</S.PhotoText>
        )}
      </S.PhotoCircle>

      <S.Name>{name}</S.Name>
      <S.Role>{role}</S.Role>
    </S.Card>
  );
}
