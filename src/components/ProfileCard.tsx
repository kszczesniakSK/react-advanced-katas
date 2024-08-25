import React from 'react';
import Card from './Card';
// Create a generic component used by at least 2 specialized components

export type Props = {
  name: string;
  bio: string;
  age: number;
};

const ProfileCard: React.FC<Props> = ({ name, bio, age }) => {
  return (
    <Card
      title={`Profile: ${name}`}
      footer={`Age: ${age}`}
    >
      <p>{bio}</p>
    </Card>
  );
};

export default ProfileCard;