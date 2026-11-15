import React from 'react';
import type { ActiveTab } from '../types.ts';

interface NavbarProps {
  title: string;
  activeTab: ActiveTab;
  onSelectTab: (tab: ActiveTab) => void;
}

export function Navbar({ title, activeTab, onSelectTab }: NavbarProps) {
  const tabs: Array<{ id: ActiveTab; label: string }> = [
    { id: 'overview', label: 'Overview' },
    { id: 'explore', label: 'Explore' },
    { id: 'settings', label: 'Settings' },
  ];
  return (
    <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur px-6 py-3 flex items-center justify-between">
      <span className="font-bold text-white tracking-tight">{title}</span>
      <nav className="flex items-center gap-2">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => onSelectTab(t.id)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${
              activeTab === t.id ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            {t.label}
          </button>
        ))}
      </nav>
    </header>
  );
}
