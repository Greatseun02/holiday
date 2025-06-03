import { type ChangeEvent } from 'react';

interface SearchBarProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
}

export default function SearchBar({ value, onChange, onSearch }: SearchBarProps) {
  return (
    <div className="search-bar">
      <input type="text" value={value} onChange={onChange} className="search-input" placeholder="Search movies..." />
      <button onClick={onSearch} className="search-button">Search</button>
    </div>
  );
}