import Link from "next/link";
import { site } from "@/data/site";

const snippet = `contract Vault {
    mapping(address => uint256) public balance;

    function deposit() external payable {
        balance[msg.sender] += msg.value;
    }

    function withdraw(uint256 amount) external {
        require(balance[msg.sender] >= amount);
        balance[msg.sender] -= amount;   // effects first
        payable(msg.sender).transfer(amount);
    }
}`;

export default function Hero() {
  return (
    <section id="home" className="flex min-h-screen items-center px-6 pb-20 pt-32">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
        <div className="reveal min-w-0 text-center lg:text-left">
          {/* font-display */}
          <h1 className=" text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            I&apos;m {site.name}. I write smart contracts and build Web Apps.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted lg:mx-0">
            Blockchain developer in the making and full-time curious. I build with Solidity, Foundry and
            Next.js.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3 lg:justify-start">
            <Link
              href="/#projects"
              className="rounded-full bg-accent px-6 py-3 font-medium text-white shadow-[0_10px_24px_-8px_rgb(var(--accent))] transition hover:brightness-110"
            >
              View projects
            </Link>
            <a
              href={`mailto:${site.email}`}
              className="rounded-full border border-line bg-surface px-6 py-3 font-medium shadow-card transition hover:shadow-card-hover"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="reveal relative min-w-0">
          <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-card">
            <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 text-xs text-muted">Vault.sol</span>
            </div>
            <pre className="overflow-x-auto p-5 text-[13px] leading-6 text-ink">
              <code>{snippet}</code>
            </pre>
          </div>
          <div className="liquid-glass absolute -bottom-6 -left-4 rounded-2xl px-4 py-3 text-sm font-medium sm:-left-8">
            forge test: 12 passed
          </div>
        </div>
      </div>
    </section>
  );
}
