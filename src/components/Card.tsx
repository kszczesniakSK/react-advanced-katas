import React, { PropsWithChildren } from 'react';
// Create a generic component used by at least 2 specialized components

type CardProps = {
  title: string;
  footer?: React.ReactNode;
};

type Props = PropsWithChildren<CardProps>

const Card: React.FC<Props> = ({ title, footer, children }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{title}</h3>
      </div>
      <div className="card-body">
        {children}
      </div>
      {footer && (
        <div className="card-footer">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;