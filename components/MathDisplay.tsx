'use client';

import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

interface MathDisplayProps {
  math: string;
  block?: boolean;
}

export default function MathDisplay({ math, block = false }: MathDisplayProps) {
  if (block) {
    return <BlockMath math={math} />;
  }
  return <InlineMath math={math} />;
}

// Metin içindeki $...$ ve $$...$$ ifadelerini parse eden yardımcı fonksiyon
export function renderMathInText(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;

  // Önce $$...$$ (block math) bul
  const blockRegex = /\$\$(.*?)\$\$/gs;
  const inlineRegex = /\$(.*?)\$/g;

  // Tüm math ifadelerini bul ve sırala
  const matches: { start: number; end: number; content: string; isBlock: boolean }[] = [];

  let match;
  while ((match = blockRegex.exec(text)) !== null) {
    matches.push({
      start: match.index,
      end: match.index + match[0].length,
      content: match[1],
      isBlock: true
    });
  }

  while ((match = inlineRegex.exec(text)) !== null) {
    // Block math içinde değilse ekle
    const isInsideBlock = matches.some(
      m => m.isBlock && match!.index >= m.start && match!.index < m.end
    );
    if (!isInsideBlock) {
      matches.push({
        start: match.index,
        end: match.index + match[0].length,
        content: match[1],
        isBlock: false
      });
    }
  }

  // Başlangıç pozisyonuna göre sırala
  matches.sort((a, b) => a.start - b.start);

  for (const m of matches) {
    // Math öncesi metin
    if (m.start > lastIndex) {
      parts.push(<span key={key++}>{text.slice(lastIndex, m.start)}</span>);
    }

    // Math ifadesi
    if (m.isBlock) {
      parts.push(
        <div key={key++} className="my-2">
          <BlockMath math={m.content} />
        </div>
      );
    } else {
      parts.push(<InlineMath key={key++} math={m.content} />);
    }

    lastIndex = m.end;
  }

  // Kalan metin
  if (lastIndex < text.length) {
    parts.push(<span key={key++}>{text.slice(lastIndex)}</span>);
  }

  return parts;
}
