import executives from '@/assets/data/team.json';
import ExecutiveCard from '@/components/c-executive-card';

export default function ExecutiveList() {
  return (
    <div className="w-full px-4 py-10">
      <h1 className="mb-[33px] text-left text-[36px] font-semibold text-[#39170e]">
        Our Team
      </h1>

      <div className="mx-auto grid max-w-[1050px] grid-cols-1 gap-6 md:grid-cols-3">
        {executives.map((executive) => (
          <ExecutiveCard key={executive.id} {...executive} />
        ))}
      </div>
    </div>
  );
}
