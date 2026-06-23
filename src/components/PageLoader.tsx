export default function PageLoader() {
  return (
    <main className="relative z-10 min-h-screen px-6 md:px-10 lg:px-16 pt-28 pb-16">
      <div className="mx-auto max-w-[1200px]">
        <div className="skeleton-hero section-panel p-5 md:p-7 mb-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <div className="skeleton-block h-[420px] lg:w-[340px] rounded-[2rem]" />
            <div className="flex-1 pt-4">
              <div className="skeleton-line w-36 h-8 mb-6" />
              <div className="skeleton-line w-full h-16 mb-4" />
              <div className="skeleton-line w-4/5 h-16 mb-6" />
              <div className="skeleton-line w-3/4 h-5 mb-3" />
              <div className="skeleton-line w-2/3 h-5 mb-8" />
              <div className="flex gap-3 mb-10">
                <div className="skeleton-pill h-12 w-40" />
                <div className="skeleton-pill h-12 w-44" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="skeleton-card h-28" />
                <div className="skeleton-card h-28" />
                <div className="skeleton-card h-28" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="skeleton-card h-44" />
          <div className="skeleton-card h-44" />
          <div className="skeleton-card h-44" />
        </div>
      </div>
    </main>
  );
}
