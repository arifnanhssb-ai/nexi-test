import React from 'react';
import type { WorkspaceItem } from '../types.ts';

interface HomePageProps {
  items: WorkspaceItem[];
  onAddItem: () => void;
}

export function HomePage({ items, onAddItem }: HomePageProps) {
  return (
    <section className="max-w-5xl mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Modular Workspace Ready</h1>
          <p className="text-sm text-slate-400">Organized into types, data, components, pages, and routes.</p>
        </div>
        <button
          onClick={onAddItem}
          className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500 transition"
        >
          Add Item
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item) => (
          <div key={item.id} className="rounded-xl border border-slate-800 bg-slate-900 p-4">
            <div className="font-semibold text-white">{item.title}</div>
            <div className="mt-1 text-xs text-slate-400">{item.category} · {item.status}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
