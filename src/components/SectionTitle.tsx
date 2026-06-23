type SectionTitleProps = {
  children: string;
};

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <div className="flex flex-col items-center text-center mb-12">
      <h5 className="mb-3">{children}</h5>
      <svg
        width="37"
        height="20"
        viewBox="0 0 69.172 14.975"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M1.357,12.26 10.807,2.81 20.328,12.332 29.781,2.879 39.223,12.321 48.754,2.79 58.286,12.321 67.815,2.793"
          fill="none"
          className="zigzag-line"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}
