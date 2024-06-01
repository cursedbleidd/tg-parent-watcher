import { BackButton, MainButton, useShowPopup } from '@vkruglikov/react-telegram-web-app';
import { useGetRandomPerson } from '../entities/Person/api/useGetRandomPerson';
import { PersonView } from '../entities/Person/Person';
import { useNavigate } from 'react-router-dom';

export const Target: React.FC = () => {
  const person = useGetRandomPerson(alert);
  const showPopup = useShowPopup();
  const navigate = useNavigate();

  if (!person) {
    return <div>Loading...</div>;
  }
  const handleClick = () => {
    showPopup({
      message: 'success or fail'
    });
    navigate(-1);
  };
  return (
    <>
      <BackButton onClick={() => navigate(-1)}/>
      <PersonView person={person} />
      <MainButton text="KILL PC" onClick={handleClick}/>
    </>
  );
};

