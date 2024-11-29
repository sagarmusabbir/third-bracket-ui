import { Card, CardPropps } from "@/packages/core/src";

interface CardGroup {
  cards: CardPropps[];
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
            title={card.title}
            description={card.description}
            href={card.href}
            image={{
              src: card.image.src,
              alt: card.image.alt,
            }}
          ></Card>
        ))}
      </div>
    </section>
  );
};

export default CardGroup;
