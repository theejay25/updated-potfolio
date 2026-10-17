type P = { className?: string };

/** Three linked blocks. */
export function BlockchainIcon({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2.5" y="3" width="8" height="8" rx="2" />
      <rect x="13.5" y="13" width="8" height="8" rx="2" />
      <path d="M10.5 7h3a3 3 0 0 1 3 3v3" />
      <path d="M13.5 17h-3a3 3 0 0 1-3-3v-3" />
    </svg>
  );
}

/** Simple anvil shape for Foundry (no official icon exists in common icon packs). */
export function FoundryIcon({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M3 5h12.5c1.6 0 3 .7 4 1.9L21.5 9.5c.3.4 0 .9-.5.9H17c-.8 1.6-2.3 2.6-4 2.9V15h2.5c.8 0 1.5.7 1.5 1.5V18h2v2H4v-2h2v-1.5C6 15.7 6.7 15 7.5 15H10v-1.7C7.3 12.8 5.2 10.6 5 8H3V5Z" />
    </svg>
  );
}
