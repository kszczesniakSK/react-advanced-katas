import { Factory } from 'fishery';
 
import { Props as ProfileCardProps } from '../components/ProfileCard';
//Generate data for the test using the fishery package

const profileCardFactory = Factory.define<ProfileCardProps>(({ sequence }) => ({
  name: `User ${sequence}`,
  bio: `This is the bio for User ${sequence}.`,
  age: Math.floor(Math.random() * (60 - 18 + 1)) + 18, // Random age between 18 and 60
}));

export default profileCardFactory;