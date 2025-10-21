import React from 'react';

interface CardProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

export const CardInformativo = ({ icon, title, text}: CardProps) => {
  return (
    <div className="col-lg-4 d-flex align-items-stretch">
      <div className="card feature-card text-center p-4">
        <div className="card-body">
          <div className="feature-icon mb-4">
            {icon}
          </div>
          <h5 className="card-title fw-bold">{title}</h5>
          <p className="card-text text-muted">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};