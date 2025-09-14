"use client";

interface CategoryTabsProps {
  categories: string[];
  onSelect: (category: string) => void;
}

export default function CategoryTabs({ categories, onSelect }: CategoryTabsProps) {
  return (
    <div className="flex space-x-4 overflow-x-auto p-2 bg-white border-b border-gray-200 shadow-sm">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className="whitespace-nowrap px-4 py-2 text-sm font-medium rounded hover:bg-blue-100"
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
