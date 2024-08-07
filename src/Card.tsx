import React from "react";

interface CardProps {
  title: string;
  subtitle?: string;
  image?: string;
  content: React.ReactNode;
  actions?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  image,
  content,
  actions,
}) => {
  return (
    <div className="card size-min">
      {image && <img src={image} alt="Card Image" />}
      <div className="card-content">
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
        <div>{content}</div>
      </div>
      {actions && <div className="card-actions">{actions}</div>}
    </div>
  );
};

export default Card;
