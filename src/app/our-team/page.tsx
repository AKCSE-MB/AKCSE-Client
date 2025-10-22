import executives from '@/assets/data/team.json';

export default function ExecutiveList() {
  return (
    <div className="w-full px-4 py-10">
      <h1 className="mb-[33px] text-left text-[36px] font-semibold text-[#39170e]">
        Our Team
      </h1>

      <div className="mx-auto grid max-w-[1050px] grid-cols-1 gap-6 md:grid-cols-3">
        {executives.map((person) => (
          <div
            key={person.id}
            className="mx-auto h-[370px] w-full md:w-[318px]"
          >
            <img
              src={person.image}
              alt={person.id}
              className="h-full w-full rounded-[24px] object-cover shadow-[0_0_10px_rgba(37,37,37,0.15)]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
