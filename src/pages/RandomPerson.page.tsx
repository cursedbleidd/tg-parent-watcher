import { MainButton, useShowPopup } from '@vkruglikov/react-telegram-web-app';
import { useGetRandomPerson } from '../entities/Person/api/useGetRandomPerson';
import { PersonView } from '../entities/Person/Person';

export const RandomPerson: React.FC = () => {
  const person = useGetRandomPerson(alert);
  const showPopup = useShowPopup();

  if (!person) {
    return <div>Loading...</div>;
  }
  const handleClick = () => {
    showPopup({
      message: person.id,
    })
  };
  return (
    <>
      <PersonView person={person} />
      <MainButton text="KILL PC" onClick={handleClick}/>
    </>
  );
};

