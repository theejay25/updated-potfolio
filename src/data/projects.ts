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

//authors comment

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
    slug: "teaching-hospital-portal",
    title: "Teaching Hospital Portal",
    summary:
      "A website for Godfrey Okoye Teaching Hospital.",
    description:
      "I built this portal for my university as a project for its teaching hospital. It gives the public one place to find out about the hospital: who they are, what they do and how to reach them. It also lets people apply for the hospital's training programmes, such as the Internship training, without going to the office in person. Applicants pick a programme, fill in a sign-up form and submit it online, and the hospital gets their details in one place.",
    highlights: [
      "Information pages about the teaching hospital",
      "A list of available programmes, including the IT internship training",
      "An online sign-up form for each programme",
      "Works on phones as well as computers",
    ],
    tech: ["Next.js", "Node.js", "Mongo Db", "Express"],
    live: "https://my-gouth.vercel.app/",
    repo: "https://github.com/theejay25/GOU-th-full-site/tree/main",
    cover: ["#34d399", "#3b82f6"],
  },
  {
    slug: "crowdfunding-dapp",
    title: "Crowdfunding dApp",
    summary:
      "A crowdfunding platform on the Sepolia testnet where anyone can launch a campaign, fund it, and get refunds if the goal is missed.",
    description:
      "Anyone can create a campaign through a factory contract by setting a goal and a deadline of up to a year. Each campaign is its own smart contract with its own funds, owned by the person who created it. Donors can deposit until the deadline. If the goal is reached, the owner withdraws the funds and deposits close. If the goal is missed, every donor can claim a full refund after the deadline. The contracts are written in Solidity with an interface, an inheritance structure and a factory, and protected with a reentrancy guard. They were tested with Foundry, including fuzz tests and a simulated reentrancy attack. The front end is a Next.js app with a warning page, a list of all campaigns beside the connected wallet's own campaigns, and a page for each campaign. It runs on a test network and is unaudited, so it holds no real money.",
    highlights: [
      "Factory contract that deploys an independent campaign for each creator",
      "Pull-based refunds when a goal is missed, with balances zeroed before ETH is sent",
      "Foundry tests with fuzzing and a reentrancy attack test",
      "Wallet connection and transactions with wagmi and viem, with readable error messages",
    ],
    tech: ["Solidity", "Foundry", "Next.js", "TypeScript", "Tailwind CSS", "wagmi", "viem"],
    live: "https://[your-vercel-production-domain]",
    repo: "https://github.com/theejay25/[repo-name]",
    cover: ["#6c4dff", "#16213e"],
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
