export default function ExecutiveList() {
  // import { Card, CardContent } from "@/components/ui/card"

  const executives = [
    {
      name: '홍길동',
      role: '회장',
      image: 'https://placehold.co/300x300',
      description: '팀을 이끄는 리더입니다.',
    },
    {
      name: '김철수',
      role: '부회장',
      image: 'https://placehold.co/300x300',
      description: '전략과 방향을 제시합니다.',
    },
    {
      name: '이영희',
      role: '총무',
      image: 'https://placehold.co/300x300',
      description: '운영과 재정을 관리합니다.',
    },
    {
      name: '박민수',
      role: '홍보팀장',
      image: 'https://placehold.co/300x300',
      description: '소통과 홍보를 담당합니다.',
    },
    {
      name: '최지현',
      role: '기획팀장',
      image: 'https://placehold.co/300x300',
      description: '새로운 아이디어를 기획합니다.',
    },
    {
      name: '정우성',
      role: '기술팀장',
      image: 'https://placehold.co/300x300',
      description: '기술과 개발을 총괄합니다.',
    },
  ];

  return (
    <div className="w-full px-4 py-10">
      <h2 className="mb-8 text-center text-2xl font-semibold">간부 소개</h2>
      <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
        {executives.map((person) => (
          <div
            key={person.name}
            className="bg-muted hover:bg-muted/70 flex items-center gap-4 rounded-xl p-4 transition"
          >
            <img
              src={person.image}
              alt={person.name}
              className="h-16 w-16 rounded-full object-cover"
            />
            <div>
              <h3 className="text-base font-semibold">{person.name}</h3>
              <p className="text-muted-foreground text-sm">{person.role}</p>
              <p className="text-sm text-gray-600">{person.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
