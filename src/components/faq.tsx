"use client";

import { useState } from "react";
import {
  MinusSmallIcon,
  PlusSmallIcon,
} from "@heroicons/react/24/outline";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  items: FAQItem[];
};

export function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="grid gap-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.question}
            className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-lg shadow-slate-900/5 transition-colors"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="text-base font-semibold text-slate-900">
                {item.question}
              </span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900/5 text-slate-900">
                {isOpen ? (
                  <MinusSmallIcon className="h-5 w-5" />
                ) : (
                  <PlusSmallIcon className="h-5 w-5" />
                )}
              </span>
            </button>
            {isOpen && (
              <div className="border-t border-slate-200/80 bg-white px-5 py-4 text-sm leading-6 text-slate-700">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
