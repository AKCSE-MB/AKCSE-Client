import styled from 'styled-components';

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border: 1px solid rgba(229, 231, 235, 0.6);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  transition:
    transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.08);
  }
`;

/* 3:4 portrait. Falls back to a subtle diagonal pattern when no image. */
export const Portrait = styled.div<{ $image?: string }>`
  aspect-ratio: 3 / 4;
  overflow: hidden;
  background-color: #fbf6ec;
  background-size: cover;
  background-position: center;
  ${({ $image }) =>
    $image
      ? `background-image: url(${$image});`
      : `background-image: repeating-linear-gradient(
          45deg,
          rgba(79, 44, 29, 0.04) 0 12px,
          transparent 12px 24px
        );`}
`;

export const Body = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 24px;
  text-align: center;
`;

export const RoleBadge = styled.span`
  align-self: center;
  display: inline-block;
  margin-bottom: 12px;
  padding: 4px 12px;
  border-radius: 9999px;
  background-color: rgba(242, 169, 0, 0.15);
  color: #7f5700;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

export const Name = styled.h3`
  font-family: 'Outfit', sans-serif;
  font-weight: 800;
  color: #141b2b;
  margin-bottom: 12px;
  font-size: 18px;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

export const Bio = styled.p`
  font-family: 'Inter', sans-serif;
  color: #434750;
  font-size: 13px;
  line-height: 1.55;
`;
