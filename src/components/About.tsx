const now = [
  { title: "Learning", text: "Foundry testing: fuzzing, invariants, and fork tests." },
  { title: "Building", text: "Small, finished contracts with a front end on top." },
  { title: "Sharing", text: "Posting updates on socials for others to learn along."}
];

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">About me</h2>
          <div className="mt-6 max-w-prose space-y-4 text-lg leading-relaxed text-muted">
            <p>
              Placeholder: tell your story here. I started with web pages, got pulled into smart contracts,
              and now I split my time between writing Solidity and making videos about the process.
            </p>
            <p>
              I like projects that end with something you can click. If it has a contract, it gets tests.
              If it has an interface, it works on a phone.
            </p>
          </div>
        </div>

        <ul className="grid gap-4">
          {now.map((item) => (
            <li key={item.title} className="rounded-2xl border border-line bg-surface p-6 shadow-card">
              <h3 className="font-display text-xl font-bold">{item.title}</h3>
              <p className="mt-1 text-muted">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
