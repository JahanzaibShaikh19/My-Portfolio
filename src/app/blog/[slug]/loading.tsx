export default function BlogPostLoading() {
  return (
    <main className="relative z-10 min-h-screen px-6 pb-16 pt-32 md:px-10 lg:px-16">
      <article className="mx-auto max-w-[1120px] space-y-6">
        <div className="skeleton-pill h-8 w-32" />
        <section className="section-panel overflow-hidden p-0">
          <div className="skeleton-block aspect-[16/9] w-full" />
          <div className="space-y-4 p-5 md:p-8 lg:p-10">
            <div className="flex flex-wrap gap-3">
              <div className="skeleton-pill h-7 w-28" />
              <div className="skeleton-pill h-7 w-24" />
            </div>
            <div className="skeleton-line h-12 w-full max-w-3xl" />
            <div className="skeleton-line h-12 w-9/12" />
            <div className="skeleton-line h-4 w-full max-w-2xl" />
            <div className="skeleton-line h-4 w-8/12" />
          </div>
        </section>
        <section className="grid grid-cols-1 gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="skeleton-card h-64" />
          <div className="skeleton-card h-64" />
        </section>
      </article>
    </main>
  );
}
