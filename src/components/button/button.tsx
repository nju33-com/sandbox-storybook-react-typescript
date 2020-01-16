import * as React from 'react';

export const Button: React.FC = ({ children }) => {
  return (
    <div>
      <button>{children}</button>
    </div>
  );
}