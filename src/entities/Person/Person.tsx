import { Image, Text } from '@mantine/core';
import styles from './person.module.scss';

export interface Person {
  name: string;
  email: string;
  gender: string;
  age: number;
  img: string;
  id: string;
}

export const PersonView: React.FC<{ person: Person }> = ({ person }) => (
  <div className={styles.card}>
    <Text>{person.name}</Text>
    <Image src={person.img} />
    <Text>Age: {person.age}</Text>
    <Text>Gender: {person.gender}</Text>
    <Text>Email: {person.email}</Text>
  </div>
);
