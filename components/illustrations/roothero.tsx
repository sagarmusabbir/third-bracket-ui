// components/illustrations/HeroIllustration.tsx
const HeroIllustration = () => {
  return (
    <svg
      width="600"
      height="600"
      viewBox="0 0 600 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[500px] h-auto"
    >
      {/* Background Circle */}
      <circle
        cx="300"
        cy="300"
        r="280"
        fill="currentColor"
        className="text-black/5 dark:text-white/5"
      />

      {/* Grid Pattern */}
      <path
        d="M150 150h300v300h-300z"
        stroke="currentColor"
        strokeWidth="2"
        className="text-black/20 dark:text-white/20"
        strokeDasharray="20 20"
      />

      {/* Main Components */}
      <g className="text-primary">
        {/* Central UI Window */}
        <rect
          x="200"
          y="200"
          width="200"
          height="160"
          rx="8"
          fill="currentColor"
          className="text-black/10 dark:text-white/10"
        />
        <rect
          x="220"
          y="220"
          width="160"
          height="20"
          rx="4"
          fill="currentColor"
          className="text-black/30 dark:text-white/30"
        />
        <rect
          x="220"
          y="250"
          width="160"
          height="90"
          rx="4"
          fill="currentColor"
          className="text-black/20 dark:text-white/20"
        />

        {/* Floating Elements */}
        <g className="animate-float">
          <circle
            cx="150"
            cy="250"
            r="30"
            fill="currentColor"
            className="text-black/20 dark:text-white/20"
          />
          <circle
            cx="150"
            cy="250"
            r="20"
            fill="currentColor"
            className="text-black/40 dark:text-white/40"
          />
        </g>

        <g className="animate-float-slow">
          <rect
            x="420"
            y="280"
            width="40"
            height="40"
            rx="8"
            fill="currentColor"
            className="text-black/20 dark:text-white/20"
            transform="rotate(15)"
          />
          <rect
            x="430"
            y="290"
            width="20"
            height="20"
            rx="4"
            fill="currentColor"
            className="text-black/40 dark:text-white/40"
            transform="rotate(15)"
          />
        </g>

        {/* Code Lines */}
        <g className="text-black/30 dark:text-white/30">
          <rect
            x="160"
            y="380"
            width="80"
            height="6"
            rx="3"
            fill="currentColor"
          />
          <rect
            x="260"
            y="380"
            width="60"
            height="6"
            rx="3"
            fill="currentColor"
          />
          <rect
            x="340"
            y="380"
            width="100"
            height="6"
            rx="3"
            fill="currentColor"
          />
        </g>

        {/* Decorative Dots */}
        <g className="dark:text-white/5 text-black/5">
          <circle cx="150" cy="150" r="4" fill="currentColor" />
          <circle cx="450" cy="150" r="4" fill="currentColor" />
          <circle cx="150" cy="450" r="4" fill="currentColor" />
          <circle cx="450" cy="450" r="4" fill="currentColor" />
        </g>
      </g>

      {/* Animated Rings */}
      <circle
        cx="300"
        cy="300"
        r="200"
        stroke="currentColor"
        strokeWidth="2"
        className="text-black/10 dark:text-white/10"
        fill="none"
      />
      <circle
        cx="300"
        cy="300"
        r="240"
        stroke="currentColor"
        strokeWidth="2"
        className="text-black/5 dark:text-white/5"
        fill="none"
      />
    </svg>
  );
};

export default HeroIllustration;
