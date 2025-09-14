"use client";

// import { useState } from "react";
import CategoryTabs from "./CategoryTabs";
import SearchBar from "./SearchBar";

interface StickySearchProps {
  categories: string[];
  onSearch: (query: string) => void;
  onCategorySelect: (category: string) => void;
  selectedCategory: string;
}

export default function StickySearch({
  categories,
  onSearch,
  onCategorySelect,
  selectedCategory,
}: StickySearchProps) {
  return (
    <div className="sticky top-16 bg-gray-100 z-40 border-b border-gray-200">
      <CategoryTabs categories={categories} onSelect={onCategorySelect} />
      <SearchBar
        placeholder={`Search in ${selectedCategory}`}
        onSearch={onSearch}
      />
    </div>
  );
}
