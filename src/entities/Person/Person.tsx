import { Image, Typography } from 'antd';
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
    <Typography.Text>{person.name}</Typography.Text>
    <Image src={person.img} />
    <Typography.Text>Age: {person.age}</Typography.Text>
    <Typography.Text>Gender: {person.gender}</Typography.Text>
    <Typography.Text>Email: {person.email}</Typography.Text>
  </div>
);
