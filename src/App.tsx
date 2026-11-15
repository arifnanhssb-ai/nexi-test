import React, { useState } from 'react';
import type { ActiveTab, WorkspaceItem } from './types.ts';
import { INITIAL_ITEMS } from './data/seed.ts';
import { Navbar } from './components/Navbar.tsx';
import { HomePage } from './pages/HomePage.tsx';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('overview');
  const [items, setItems] = useState<WorkspaceItem[]>(INITIAL_ITEMS);

  const handleAddItem = () => {
    setItems((prev) => [
      {
        id: String(Date.now()),
        title: `New Item #${prev.length + 1}`,
        category: activeTab,
        status: 'active',
        updatedAt: 'Now',
      },
      ...prev,
    ]);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar title="স্বপ্ন - অনলাইন গ্রোসারি সুপারশপ" activeTab={activeTab} onSelectTab={setActiveTab} />
      <main>
        <HomePage items={items} onAddItem={handleAddItem} />
      </main>
    </div>
  );
}
