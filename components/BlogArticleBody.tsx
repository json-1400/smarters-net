import React from 'react';
import { renderRichText } from '@/components/BlogRichText';
import type { BlogBlock, BlogPost } from '@/lib/blog/types';

function ComparisonTable({ rows }: { rows: BlogPost['comparisonRows'] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse text-xs sm:text-sm">
        <thead>
          <tr className="border-b border-slate-800 text-slate-400 uppercase">
            <th className="py-3 pr-4">Critère Technique</th>
            <th className="py-3 px-4">Serveurs Classiques / Concurrents</th>
            <th className="py-3 pl-4 text-emerald-400">Notre Infrastructure CDN 10 Gbps</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800/70 text-slate-300">
          {rows.map((row) => (
            <tr key={row.criterion}>
              <td className="py-3 pr-4 font-bold text-white">{row.criterion}</td>
              <td className="py-3 px-4 text-slate-400">{row.competitor}</td>
              <td className="py-3 pl-4 font-semibold text-emerald-400">{row.smarters}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function renderBlock(block: BlogBlock, index: number, post: BlogPost): React.ReactNode {
  switch (block.kind) {
    case 'p':
      return <p key={index}>{renderRichText(block.text)}</p>;
    case 'h3':
      return (
        <h3 key={index} className="text-lg font-bold text-white pt-2">
          {block.text}
        </h3>
      );
    case 'ul':
      return (
        <ul key={index} className="list-disc pl-5 space-y-1.5">
          {block.items.map((item) => (
            <li key={item}>{renderRichText(item)}</li>
          ))}
        </ul>
      );
    case 'ol':
      return (
        <ol key={index} className="list-decimal pl-5 space-y-1.5">
          {block.items.map((item) => (
            <li key={item}>{renderRichText(item)}</li>
          ))}
        </ol>
      );
    case 'table':
      return <ComparisonTable key={index} rows={post.comparisonRows} />;
  }
}

export function BlogArticleBody({ post }: { post: BlogPost }) {
  return (
    <>
      {post.sections.map((section) => (
        <section
          key={section.h2}
          className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-white">{section.h2}</h2>
          {section.blocks.map((block, index) => renderBlock(block, index, post))}
        </section>
      ))}
    </>
  );
}

