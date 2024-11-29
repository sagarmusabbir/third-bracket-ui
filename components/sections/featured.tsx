import { FeaturedSectionProps } from "@/lib/types";
import CardGroup from "./CardGroup";
import { Button } from "@/packages/core/src";

const FeaturedSection: React.FC<FeaturedSectionProps> = ({
  heading,
  subheading,
  cards,
  ctaButtons: { button1 },
}) => {
  return (
    <section className="relative overflow-hidden ">
      <div className="container max-w-7xl mx-auto ">
        <div className="pt-16 pb-12 sm:pt-20 sm:pb-16 text-center mx-auto ">
          {/* Header Section */}
          <div className="text-center    ">
            <h2 className="  mx-auto">
              <span className="block">{heading.main}</span>

              {heading.highlight && (
                <span className="  block bg-gradient-to-r from-slate-500 via-gray-700  to-black dark:via-slate-300 dark:to-white bg-clip-text text-transparent max-w-md mx-auto">
                  {heading.highlight}
                </span>
              )}
            </h2>
            {subheading && <h5 className="mt-6    mx-auto  ">{subheading}</h5>}
          </div>

          {/* <CardGroup cards={cards} /> */}

          <CardGroup cards={cards} />

          <Button href={button1.href} variant="link" size="lg" className="mt-6">
            {button1.label}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
