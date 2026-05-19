type PageIntroProps = {
  title: string;
  description: string;
};

export default function PageIntro({ title, description }: PageIntroProps) {
  return (
    <section className="rounded-2xl bg-gradient-to-r from-brand-700 to-brand-500 p-6 text-white">
      <h1 className="text-2xl font-bold md:text-3xl">{title}</h1>
      <p className="mt-2 text-sm md:text-base">{description}</p>
    </section>
  );
}
