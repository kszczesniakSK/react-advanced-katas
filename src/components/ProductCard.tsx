import React from 'react';
import Card from './Card';
// Create a generic component used by at least 2 specialized components

type Props = {
  productName: string;
  description: string;
  price: number;
};

const ProductCard: React.FC<Props> = ({ productName, description, price }) => {
  return (
    <Card
      title={`Product: ${productName}`}
      footer={`Price: $${price.toFixed(2)}`}
    >
      <p>{description}</p>
    </Card>
  );
};

export default ProductCard;