import { MainButton } from '@vkruglikov/react-telegram-web-app';
import { useNavigate } from 'react-router-dom';
import { LoadingOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import { TargetCards } from '@/entities/Target/Target';
import { useGetTargets } from '@/entities/Target/api/useGetTargets';

export const Targets: React.FC = () => {
  const navigate = useNavigate();
  const targets = useGetTargets();

  if (!targets) {
    return <Typography.Title style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><LoadingOutlined /></Typography.Title>;
  }
  const handleClick = async () => {
    navigate('/add');
  };
  return (
    <>
       {(targets.length === 0) ?
       <>
       <Typography.Title level={2} style={{ textAlign: 'center' }}>Список устройств пуст</Typography.Title>
       <Typography.Title level={4} style={{ textAlign: 'center' }}>Добавьте новое устройство</Typography.Title>
       </>
       :
       <TargetCards targets={targets}></TargetCards>}
      <MainButton text="Добавить устройство" onClick={handleClick} />
    </>
  );
};
