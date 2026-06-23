export default function WorkLoading() {
  return (
    <main className="relative z-10 min-h-screen px-6 md:px-10 lg:px-16 pt-32 pb-16">
      <div className="mx-auto max-w-[1200px]">
        <div className="section-panel p-5 md:p-7 mb-8">
          <div className="skeleton-line h-5 w-28 mb-4" />
          <div className="skeleton-line h-14 w-2/3 mb-4" />
          <div className="skeleton-line h-5 w-full max-w-3xl mb-2" />
          <div className="skeleton-line h-5 w-3/4 max-w-2xl" />
        </div>

        <div className="skeleton-block aspect-[16/9] w-full rounded-2xl mb-10" />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10">
          <div className="section-panel p-5 md:p-7">
            <div className="skeleton-line h-8 w-44 mb-5" />
            <div className="skeleton-line h-5 w-full mb-3" />
            <div className="skeleton-line h-5 w-11/12 mb-3" />
            <div className="skeleton-line h-5 w-4/5" />
          </div>
          <div className="skeleton-card h-52" />
        </div>
      </div>
    </main>
  );
}
