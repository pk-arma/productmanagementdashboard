"use client";

export default function FilterDropdown({ options, onChange }) {
    return (
      <select
        onChange={(e) => onChange(e.target.value)}
        className="border rounded p-2 text-gray-950"
        defaultValue=""
      >
        <option value="">All Categories</option>
        {options.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    );
  }
  