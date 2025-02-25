import React from "react";

import AnimatedHighlight from "@/components/creative/AnimatedHighlight/AnimatedHighlight";

export type HighlightedTerm = {
  text: string;
  gradient: string;
};

export const renderWithHighlights = (
  text: string,
  highlightedTerms: HighlightedTerm[]
) => {
  let result: (string | JSX.Element)[] = [text];

  // Sort highlighted terms by length (descending) to avoid partial replacements
  const sortedTerms = [...highlightedTerms].sort(
    (a, b) => b.text.length - a.text.length
  );

  for (const term of sortedTerms) {
    result = result.flatMap((part) => {
      if (typeof part !== "string") return [part];

      const split = part.split(term.text);
      if (split.length === 1) return [part];

      return split.flatMap((subpart, i) =>
        i === 0
          ? [subpart]
          : [
              <AnimatedHighlight
                key={`${term.text}-${i}`}
                gradient={term.gradient}
              >
                {term.text}
              </AnimatedHighlight>,
              subpart,
            ]
      );
    });
  }

  return result;
};
