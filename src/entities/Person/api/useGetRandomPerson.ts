import { useEffect, useState } from 'react';
import { Person } from '../Person';

export const getRandomPerson = async () => {
  const response = await fetch('https://randomuser.me/api');
  const json = await response.json();
  const personRaw = json.results[0];
  return {
    age: personRaw.dob.age,
    name: `${personRaw.name.first} ${personRaw.name.last}`,
    email: personRaw.email,
    gender: personRaw.gender,
    img: personRaw.picture.large,
    id: personRaw.id.value,
  } as Person;
};

export const useGetRandomPerson = (onError: (err: string) => void) => {
  const [person, setPerson] = useState<Person | undefined>(undefined);

  useEffect(() => {
    const fetchPerson = async () => {
      try {
        const personRaw = await getRandomPerson();
        setPerson(personRaw);
      } catch (err: any) {
        onError(err.message);
      }
    };
    fetchPerson();
  }, []);

  return person;
};
