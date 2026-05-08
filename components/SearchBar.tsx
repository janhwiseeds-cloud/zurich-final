"use client";

import { useState, useCallback } from "react";
import { Search, X } from "lucide-react";

interface SearchBarProps {
    onSearch: (query: string) => void;
    placeholder?: string;
}

export default function SearchBar({ onSearch, placeholder = "Search products by name..." }: SearchBarProps) {
    const [query, setQuery] = useState("");

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);
        onSearch(value);
    }, [onSearch]);

    const handleClear = useCallback(() => {
        setQuery("");
        onSearch("");
    }, [onSearch]);

    return (
        <div className="w-full mb-8">
            <div className="max-w-7xl mx-auto relative">
                <div className="relative flex items-center">
                    <Search className="absolute left-4 w-5 h-5 text-green-600 pointer-events-none" />
                    <input
                        type="text"
                        value={query}
                        onChange={handleChange}
                        placeholder={placeholder}
                        className="w-full pl-12 pr-12 py-3 border-2 border-green-200 rounded-lg focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-600/10 transition-all text-gray-800 placeholder-gray-400"
                    />
                    {query && (
                        <button
                            onClick={handleClear}
                            className="absolute right-4 text-gray-400 hover:text-gray-600 transition-colors"
                            aria-label="Clear search"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
