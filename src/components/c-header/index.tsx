import * as S from './page.styled';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import useUser from '@/hooks/useUser';
import useKakaoLogin from '@/hooks/useKakaoLogin';
import CHamburgerIcon from '@/components/c-hamburger-icon';
import LOGO from 'assets/common/logo/logo.svg';

export default function CHeader() {
  const { push } = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isLoggedIn, logout } = useUser();
  const { loginHandler } = useKakaoLogin();
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleHomeClick = () => {
    toggleMenu();
    push('/');
  };

  const handleEventsClick = () => {
    toggleMenu();
    push('/events');
  };

  const handleResourcesClick = () => {
    toggleMenu();
    push('/');
  };

  const handleLeaderboardClick = () => {
    toggleMenu();
    push('/leaderboard');
  };

  const handleLoginClick = () => {
    toggleMenu();
    loginHandler();
  };

  const handleLogoutClick = () => {
    toggleMenu();
    logout();
  };

  return (
    <>
      <S.Container>
        <S.LogoContainer>
          <LOGO />
        </S.LogoContainer>
        <CHamburgerIcon active={isMenuOpen} clickEvent={toggleMenu} />
      </S.Container>

      {isMenuOpen && (
        <S.SideMenu>
          <S.CloseButton onClick={toggleMenu}>×</S.CloseButton>
          <S.MenuItem onClick={handleHomeClick}>Home</S.MenuItem>
          <S.MenuItem onClick={handleEventsClick}>Events</S.MenuItem>
          <S.MenuItem onClick={handleResourcesClick}>Resources</S.MenuItem>
          <S.MenuItem onClick={handleLeaderboardClick}>Leaderboard</S.MenuItem>
          {isLoggedIn ? (
            <div>
              <S.MenuItem onClick={handleLogoutClick}>Log Out</S.MenuItem>
            </div>
          ) : (
            <div>
              <S.MenuItem onClick={handleLoginClick}>Log In / Admin</S.MenuItem>
            </div>
          )}
        </S.SideMenu>
      )}
    </>
  );
}
