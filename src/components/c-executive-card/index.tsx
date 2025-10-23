interface ExecutiveCardProps {
  image: string;
  id: string;
}

export default function ExecutiveCard({ image, id }: ExecutiveCardProps) {
  return (
    <div className="mx-auto w-full md:w-[320px]">
      <img
        src={image}
        alt={id}
        className="aspect-[318/370] w-full rounded-[24px] object-cover shadow-[0_0_10px_rgba(37,37,37,0.15)]"
      />
    </div>
  );
}
