'use client';

import * as S from './index.styled';

export default function NewsSection() {
  return (
    <S.Section>
      <S.Inner>
        <S.SectionTitle>Community News &amp; Opportunities</S.SectionTitle>

        <S.Grid>
          {/* ── Monthly News ── */}
          <S.Card>
            <S.CardLabel $color="#1c4684">Monthly News</S.CardLabel>
            <S.ArticleList>
              <S.Article>
                <S.ArticleDate>Oct 10, 2024</S.ArticleDate>
                <S.ArticleTitle>
                  UofM AKCSE Wins National Innovation Award
                </S.ArticleTitle>
              </S.Article>

              <S.Divider />

              <S.Article>
                <S.ArticleDate>Sep 28, 2024</S.ArticleDate>
                <S.ArticleTitle>
                  Summer Research Showcase Highlights
                </S.ArticleTitle>
              </S.Article>
            </S.ArticleList>
          </S.Card>

          {/* ── Scholarships ── */}
          <S.Card>
            <S.CardLabel $color="#7f5700">Scholarships</S.CardLabel>
            <S.ScholarshipList>
              <S.ScholarshipItem>
                <S.ScholarshipName>CKC 2025 Scholarship</S.ScholarshipName>
                <S.ScholarshipDesc>
                  Applications for the annual scientific conference scholarship
                  are now open.
                </S.ScholarshipDesc>
                <S.ScholarshipBtn>Apply Now →</S.ScholarshipBtn>
              </S.ScholarshipItem>

              <S.ScholarshipItem>
                <S.ScholarshipName>Young Professional Grant</S.ScholarshipName>
                <S.ScholarshipDesc>
                  Grants available for final-year engineering students for their
                  projects.
                </S.ScholarshipDesc>
                <S.ScholarshipBtn>Learn More →</S.ScholarshipBtn>
              </S.ScholarshipItem>
            </S.ScholarshipList>
          </S.Card>

          {/* ── Upcoming Seminar ── */}
          <S.Card style={{ justifyContent: 'space-between' }}>
            <S.SeminarTop>
              <S.CardLabel $color="#643d2d">Upcoming Seminar</S.CardLabel>
              <S.SeminarBox>
                <S.SeminarTitle>
                  &ldquo;Ethics in Artificial Intelligence&rdquo;
                </S.SeminarTitle>
                <S.SeminarSpeaker>
                  Guest Speaker: Dr. Sarah Marshall
                </S.SeminarSpeaker>
              </S.SeminarBox>
            </S.SeminarTop>
            <S.RsvpButton>RSVP Now</S.RsvpButton>
          </S.Card>
        </S.Grid>
      </S.Inner>
    </S.Section>
  );
}
