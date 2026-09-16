'use client';

import researchSource from '@/assets/data/research.json';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import { ResearchArticle } from '../types';
import * as S from './page.styled';

const articles = researchSource as ResearchArticle[];

export default function ResearchDetailPage() {
  const params = useParams<{ id: string }>();
  const article = articles.find((item) => item.id === Number(params.id));

  if (!article) {
    notFound();
  }

  return (
    <S.PageWrapper>
      <S.HeaderSection
        $gradient={article.placeholder.gradient}
        $bgColor={article.placeholder.bgColor}
      >
        <S.HeaderInner>
          <S.BackLink href="/research">← Research</S.BackLink>

          <S.Title>{article.titleKo}</S.Title>
          <S.Subtitle>{article.subtitle}</S.Subtitle>

          {article.author && <S.Author>{article.author}</S.Author>}
        </S.HeaderInner>
      </S.HeaderSection>

      <S.Body>
        {article.content ? (
          <S.ArticleContent
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        ) : (
          <S.EmptyContent>아직 등록된 본문이 없습니다.</S.EmptyContent>
        )}

        <S.FooterRow>
          <Link href="/research">
            <S.BackButton type="button">목록으로 돌아가기</S.BackButton>
          </Link>
        </S.FooterRow>
      </S.Body>
    </S.PageWrapper>
  );
}
