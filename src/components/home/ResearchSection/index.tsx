'use client';

import CarouselNavButtons from '@/components/common/CarouselNavButton';
import ResearchCard from '@/components/common/ResearchCard';
import SectionHeading from '@/components/common/SectionHeading';
import * as S from './index.styled';

const RESEARCH_ITEMS = [
  {
    id: 1,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDgyrwBl5rV7nTgGNNUHY_sjiqumvzgrMjtMQTJp7hluQTLu56mSh1E49OLbY0X3-H17GoAiqQVrOlEAR0xO4R2dCHjFMdWl5yx5PPFbNNzejw00rugBRzAaLCUw4EO2p6C2ozY2fvcBtsorhtU5lXS1oZHCxGidHKkYf3D9t8WVndrDjatuOaiY6DE2Bpm9YwZYKvwtMs3YJk6_-V3jqn_f_XJyDwn7bSILPunzwT1k536pbZuvuWfoEToNlv1CH_bwPNpWAlLKFg',
    alt: 'High-tech microprocessor',
    category: 'Engineering',
    badgeColor: '#1c4684',
    badgeBg: 'rgba(28, 70, 132, 0.05)',
    title: 'Advancements in Low-Power Microchip Design',
    author: 'Dr. Hyun-woo Park',
    editor: 'AKCSE Team',
  },
  {
    id: 2,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDhu8bw_M7jdBVvvwXMUmWY6zHnec59z_K2aZQucNh1UmHKLXoi1gQdT9Y2Yx9YrN3f1cY1lyzlx1FakZ_zZRPCY3bBJKr0jnB9OFpp_HTJBwG3AHZg-vVZi8LkQ1IHWcBU0TC7bxtJaoA2BkTbR1LjXYQj3vnlqmHke-wNIzlUEKSpTRAd4jRHFNK8A89tAvEd426Jh-zeLtn68xWG4BlK_GcrFg1SmJbmZGVnu6v2Tr2DArhmN7zPLQFooHNjCW0NxobHFEVFXH4',
    alt: 'Microscope lens',
    category: 'Biology',
    badgeColor: '#7f5700',
    badgeBg: 'rgba(127, 87, 0, 0.05)',
    title: 'CRISPR and the Future of Personalized Medicine',
    author: 'Ji-min Ryu',
    editor: 'R. Hamilton',
  },
  {
    id: 3,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD4zC56SaIEEYR3IF8KG4Xo5X3JEIhzHDumrBIynJZIpbZw-0YOT_WzPoQIzz3mAGEo1yMDf8DpRG8uII4d6Ulx3dKaIBbQOzAvAbpGm5ULiRv5P_YOAXa1Pv8tNDs57JV7EVy1bWTt0e96vnpMc84HgmDI5gk-zbUpfaavX9PlLqPoor1OaBhGDXrrEolJK1n3dzlb-V6Pp0e12GwyhAmyMQuNK--aEKzLG6kRVx-Zz6yzdlzu2-ARtkUhXnTUaGtSNE2VTISRft0',
    alt: 'Quantum network',
    category: 'Physics',
    badgeColor: '#643d2d',
    badgeBg: 'rgba(126, 84, 67, 0.1)',
    title: 'Quantum Entanglement in Fiber Optic Networks',
    author: 'Sang-hoon Oh',
    editor: 'AKCSE Team',
  },
];

export default function ResearchSection() {
  return (
    <S.Section>
      <S.Inner>
        <S.SectionHeader>
          <S.HeaderLeft>
            <SectionHeading
              title="Research Insights"
              barColor="blue"
              description="Monthly publications on technology and innovation."
            />
          </S.HeaderLeft>

          <CarouselNavButtons
            onPrev={() => {}}
            onNext={() => {}}
            hideOnMobile
          />
        </S.SectionHeader>

        <S.Grid>
          {RESEARCH_ITEMS.map((item) => (
            <ResearchCard
              key={item.id}
              image={item.image}
              alt={item.alt}
              category={item.category}
              badgeColor={item.badgeColor}
              badgeBg={item.badgeBg}
              title={item.title}
              author={item.author}
              editor={item.editor}
            />
          ))}
        </S.Grid>
      </S.Inner>
    </S.Section>
  );
}
