import React from 'react';
import Link from 'next/link';

const TOKEN_PATTERN = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;
const BOLD_PATTERN = /^\*\*([^*]+)\*\*$/;
const LINK_PATTERN = /^\[([^\]]+)\]\(([^)]+)\)$/;

export function renderRichText(text: string): React.ReactNode[] {
  return text.split(TOKEN_PATTERN).map((part, index) => {
    const bold = BOLD_PATTERN.exec(part);
    if (bold) {
      return (
        <strong key={index} className="text-white font-bold">
          {bold[1]}
        </strong>
      );
    }
    const link = LINK_PATTERN.exec(part);
    if (link) {
      return (
        <Link key={index} href={link[2]} className="text-blue-400 hover:text-blue-300 underline underline-offset-2">
          {link[1]}
        </Link>
      );
    }
    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
}

