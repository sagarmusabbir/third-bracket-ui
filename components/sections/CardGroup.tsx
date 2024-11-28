import { CardProps } from "@/lib/types";

import Card from "../ui/Card";

interface CardGroup {
  cards: CardProps[];
}

const CardGroup: React.FC<CardGroup> = ({ cards }) => {
  return (
    <section>
      {/* Cards Grid */}
      <div
        // className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 px-4"
        className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {cards.map((card, index) => (
          <Card
            key={index}
            header={card.header}
            skeleton={{
              src: card.skeleton.src,
              alt: card.skeleton.alt,
            }}
            href={card.href}
          ></Card>
        ))}
      </div>
    </section>
  );
};

export default CardGroup;
