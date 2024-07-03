import { BackButton, MainButton } from '@vkruglikov/react-telegram-web-app';
import { useNavigate } from 'react-router-dom';
import { LoadingOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import { TargetCards } from '@/entities/Target/Target';
import { useGetTargets } from '@/entities/Target/api/useGetTargets';

export const Targets: React.FC = () => {
  //const person = useGetRandomPerson(alert);
  const navigate = useNavigate();
  const targets = useGetTargets();

  if (!targets) {
    return <Typography.Title><LoadingOutlined /></Typography.Title>;
  }
  const handleClick = async () => {
    navigate('/add');
  };
  return (
    <>
      <BackButton onClick={() => navigate(-1)} />
      <TargetCards targets={targets}></TargetCards>
      <MainButton text="Добавить устройство" onClick={handleClick} />
    </>
  );
};
