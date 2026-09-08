'use client';

import researchSource from '@/assets/data/research.json';
import PageHero from '@/components/common/PageHero';
import { useMemo, useState } from 'react';
import * as S from './page.styled';

type Category = 'Life' | 'Tech' | 'Engineering';

interface ResearchArticle {
  id: number;
  category: Category;
  titleKo: string;
  subtitle: string;
  placeholder: {
    label: string;
    gradient?: string;
    bgColor?: string;
    dark: boolean;
  };
}

const CATEGORIES: Array<'All' | Category> = [
  'All',
  'Life',
  'Tech',
  'Engineering',
];
const ITEMS_PER_PAGE = 6;

const articles = researchSource as ResearchArticle[];

export default function ResearchPage() {
  const [activeCategory, setActiveCategory] = useState<'All' | Category>('All');
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const filteredArticles = useMemo(() => {
    if (activeCategory === 'All') return articles;
    return articles.filter((article) => article.category === activeCategory);
  }, [activeCategory]);

  const visibleArticles = filteredArticles.slice(0, visibleCount);
  const hasMore = visibleCount < filteredArticles.length;
  const isExpanded = !hasMore && visibleCount > ITEMS_PER_PAGE;

  const handleCategoryChange = (category: 'All' | Category) => {
    setActiveCategory(category);
    setVisibleCount(ITEMS_PER_PAGE);
  };

  return (
    <S.PageWrapper>
      <PageHero
        eyebrow="AKCSE UofM • Member Publications"
        title="Research"
        titleSub="& Literature"
        description="Monthly publications on life and technology"
      />

      <S.Section>
        <S.FilterRow>
          {CATEGORIES.map((category) => (
            <S.FilterPill
              key={category}
              type="button"
              $active={activeCategory === category}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </S.FilterPill>
          ))}
        </S.FilterRow>

        {filteredArticles.length === 0 && (
          <S.EmptyState>
            <S.EmptyIconWrap>
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 4h16v12H8l-4 4V4z" />
                <line x1="8" y1="9" x2="16" y2="9" />
                <line x1="8" y1="13" x2="13" y2="13" />
              </svg>
            </S.EmptyIconWrap>

            <S.EmptyTitle>No articles yet</S.EmptyTitle>

            <S.EmptyDescriptionRow>
              <S.EmptyAccentBar />
              <S.EmptyDescription>
                There are no {activeCategory} publications yet. Please check
                back soon or browse another category.
              </S.EmptyDescription>
            </S.EmptyDescriptionRow>

            <S.EmptyResetButton
              type="button"
              onClick={() => handleCategoryChange('All')}
            >
              View all articles
            </S.EmptyResetButton>
          </S.EmptyState>
        )}

        {filteredArticles.length > 0 && (
          <S.Grid>
            {visibleArticles.map((article) => (
              <S.Card key={article.id}>
                <S.ImageWrap
                  $gradient={article.placeholder.gradient}
                  $bgColor={article.placeholder.bgColor}
                >
                  <S.PlaceholderCenter>
                    <div>
                      <S.PlaceholderLabel $dark={article.placeholder.dark}>
                        {article.placeholder.label}
                      </S.PlaceholderLabel>
                      <S.PlaceholderText $dark={article.placeholder.dark}>
                        [ image ]
                      </S.PlaceholderText>
                    </div>
                  </S.PlaceholderCenter>

                  <S.CategoryBadge>
                    <S.BadgeDot />
                    {article.category}
                  </S.CategoryBadge>
                </S.ImageWrap>

                <S.CardTitle>{article.titleKo}</S.CardTitle>
                <S.CardSubtitle>{article.subtitle}</S.CardSubtitle>
              </S.Card>
            ))}
          </S.Grid>
        )}

        {hasMore && (
          <S.LoadMoreWrap>
            <S.LoadMoreButton
              type="button"
              onClick={() => setVisibleCount((count) => count + ITEMS_PER_PAGE)}
            >
              Load more articles <span aria-hidden="true">↓</span>
            </S.LoadMoreButton>
          </S.LoadMoreWrap>
        )}

        {isExpanded && (
          <S.LoadMoreWrap>
            <S.CloseButton
              type="button"
              onClick={() => setVisibleCount(ITEMS_PER_PAGE)}
            >
              Close <span aria-hidden="true">↑</span>
            </S.CloseButton>
          </S.LoadMoreWrap>
        )}
      </S.Section>
    </S.PageWrapper>
  );
}
