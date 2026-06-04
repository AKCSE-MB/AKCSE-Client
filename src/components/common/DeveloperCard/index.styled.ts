import styled from 'styled-components';

export const Card = styled.div`
  width: 100%;
  min-height: 260px;
  padding: 34px 32px 36px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #ffffff;
  border: 1px solid rgba(211, 213, 222, 0.9);
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(20, 24, 40, 0.06);

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 18px 36px rgba(20, 24, 40, 0.1);
  }
`;

export const PhotoCircle = styled.div`
  width: 112px;
  height: 112px;
  margin-bottom: 28px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  overflow: hidden;

  background: repeating-linear-gradient(
    45deg,
    rgba(244, 238, 224, 0.88) 0,
    rgba(244, 238, 224, 0.88) 14px,
    rgba(250, 246, 236, 0.88) 14px,
    rgba(250, 246, 236, 0.88) 28px
  );
`;

export const PhotoText = styled.p`
  margin: 0;

  font-size: 12px;
  font-weight: 400;
  color: rgba(135, 111, 95, 0.35);
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const Name = styled.h4`
  margin: 0 0 10px;

  font-family: var(--font-outfit), var(--Pretendard-Variable), sans-serif;
  font-size: 20px;
  font-weight: 800;
  line-height: 1.15;
  color: #15192d;
  text-align: center;
`;

export const Role = styled.p`
  margin: 0;

  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  color: #4c4f5a;
  text-align: center;
`;
