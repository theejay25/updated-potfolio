export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  highlights: string[];
  tech: string[];
  live: string;
  repo: string;
  cover: [string, string]; // gradient colors for the card cover
};

export const projects: Project[] = [
  {
    slug: "token-vault",
    title: "ETH-Token Vault",
    summary: "A time-locked ERC-20 vault with deposit, withdraw, and emergency exit.",
    description:
      "TokenVault is a web app for a time-locked ETH vault, a Solidity smart contract that lets users lock Ether for a chosen number of days. Funds can’t be withdrawn until the lock period has run out. Users who need their money sooner can withdraw early, but they pay a withdrawal fee capped at 10% of the locked ETH they’re taking out. Users connect their wallet and manage their locks through the interface, and everything runs on the Sepolia testnet, so the whole flow can be tried with test ETH and no real funds. I built the frontend with Next.js and Tailwind CSS in a clean, white-only theme. I wrote the contract, deployed it to Sepolia through an Infura RPC endpoint, and tested it end to end on the live testnet. I kept the dependencies up to date, so the project installs with no npm audit warnings, and I wrote a proper README so anyone can clone, configure and run it. During testing I found that the wallet connect button threw an error when both MetaMask and Phantom were enabled in the same browser. That taught me that a dApp has to handle wallet selection deliberately instead of assuming a single wallet provider.",
    highlights: [
      "Reentrancy-safe withdraw flow",
      "Fuzz tests for lock and unlock edge cases",
      "Gas-optimised storage layout",
    ],
    tech: ["Solidity", "Foundry", "Next.js", "TypeScript", "Tailwind"],
    live: "https://eth-vault-liart.vercel.app/",
    repo: "https://github.com/theejay25/ETH-vault/blob/main/src/token-vault.sol",
    cover: ["#7c5cff", "#38bdf8"],
  },
  {
    slug: "nft-mint-page",
    title: "NFT Mint Page",
    summary: "A mint site with wallet connect, allowlist checks, and live supply.",
    description:
      "nftOZ Mint is a web app for working with my nftOZ smart contract, which is deployed on the Sepolia testnet. Visitors connect their wallet and can mint NFTs, burn them, and send them to other users, all from the browser. Because it is a testnet deployment, the site opens with a warning page telling users to use a test or dummy account and never to send real ETH to the contract. I built it with Next.js in a dark theme, working from the contract’s source code, ABI and deployed address so the interface matches the contract exactly. Wallet selection is explicit, so people with both MetaMask and Phantom installed can pick the one they want without the two extensions conflicting, a lesson from my earlier TokenVault project. I also kept the dependency tree free of npm audit issues.",
    highlights: [
      "Merkle-proof allowlist",
      "Live supply counter from on-chain reads",
      "Mobile-first mint flow",
    ],
    tech: ["Solidity", "React", "Next.js", "TypeScript", "Tailwind CSS"],
    live: "https://nft-minting-phi-six.vercel.app/",
    repo: "https://github.com/theejay25/nft-minting/blob/main/nftOZ.sol",
    cover: ["#f472b6", "#8b5cf6"],
  },
  {
    slug: "creator-dashboard",
    title: "Creator Dashboard",
    summary: "Channel analytics in one place: views, retention, and upload planning.",
    description:
      "Placeholder: a dashboard built for tracking a YouTube channel's growth. Replace this text with what you built, what data it uses, and what you learned.",
    highlights: [
      "Custom charts with no chart library",
      "Upload calendar with status tracking",
      "Dark and light themes",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    live: "https://example.com/creator-dashboard",
    repo: "https://github.com/your-username/creator-dashboard",
    cover: ["#22d3ee", "#6366f1"],
  },
  {
    slug: "dao-voting",
    title: "DAO Voting",
    summary: "On-chain proposals and token-weighted voting with a clean results view.",
    description:
      "Placeholder: explain the governance design here. Proposals are created on-chain, votes are weighted by token balance at a snapshot, and results are shown live.",
    highlights: [
      "Snapshot-based vote weighting",
      "Proposal lifecycle: draft, active, executed",
      "Foundry invariant tests",
    ],
    tech: ["Solidity", "Foundry", "Blockchain", "React"],
    live: "https://example.com/dao-voting",
    repo: "https://github.com/your-username/dao-voting",
    cover: ["#a78bfa", "#f59e0b"],
  },
  {
    slug: "landing-page-kit",
    title: "Landing Page Kit",
    summary: "A set of fast, accessible landing page sections built with Tailwind.",
    description:
      "Placeholder: a reusable collection of hero, pricing, FAQ, and footer sections. Describe the design decisions and how others can use it.",
    highlights: ["Keyboard-friendly components", "No runtime dependencies", "Dark mode built in"],
    tech: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    live: "https://example.com/landing-kit",
    repo: "https://github.com/your-username/landing-page-kit",
    cover: ["#34d399", "#3b82f6"],
  },
  {
    slug: "gas-tracker",
    title: "Gas Tracker",
    summary: "Real-time gas prices with a simple 'good time to transact' signal.",
    description:
      "Placeholder: a small tool that reads gas data and tells you when fees are low. Replace with the real story of the build.",
    highlights: ["Polling with smart backoff", "Offline-friendly UI", "Under 100 KB of JavaScript"],
    tech: ["JavaScript", "React", "Blockchain"],
    live: "https://example.com/gas-tracker",
    repo: "https://github.com/your-username/gas-tracker",
    cover: ["#fb7185", "#7c5cff"],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
