import { BackButton } from '@vkruglikov/react-telegram-web-app';
import { useNavigate, useLocation } from 'react-router-dom';
//import { Typography } from 'antd';
import { TargetForm } from '@/entities/Target/Target';

export const TargetEdit : React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { target } = location.state || {};
  return (
    <>
      <BackButton onClick={() => navigate(-1)} />
      {target ? (
        <TargetForm key={target.id} target={target} />
      ) : (
        <TargetForm target={target} />
      )}
    </>
  );
};
