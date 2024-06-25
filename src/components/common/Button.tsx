import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      className="px-6 py-2 text-center font-semibold text-white shadow-md shadow-fuchsia-600 rounded hover:bg-gradient-to-r from-fuchsia-600 to-black "
      onClick={onClick}
      type="submit"
    >
      {label}
    </button>
  );
};

export default Button;
