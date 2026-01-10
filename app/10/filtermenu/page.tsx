import React, { useState } from 'react';
import './filtermenu.css';

interface FilterMenuProps {
  label: string;
  options: string[];
  selectedOptions: string[];
  onChange: (option: string, checked: boolean) => void;
}

const FilterMenu: React.FC<FilterMenuProps> = ({ label, options, selectedOptions, onChange }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="filter-menu">
      <button onClick={() => setOpen(prev => !prev)}>
        {label} ▼
      </button>

      {open && (
        <div className="dropdown-content">
          {options.map(option => (
            <div key={option}>
                <label className="checkbox-label">
                <input
                    type="checkbox"
                    checked={selectedOptions.includes(option)}
                    onChange={e => onChange(option, e.target.checked)}
                />
                <span>{option}</span>
                </label>
            </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default FilterMenu;
