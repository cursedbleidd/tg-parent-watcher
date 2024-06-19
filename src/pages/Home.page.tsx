import { useNavigate } from 'react-router-dom';
import { useWebApp } from '@vkruglikov/react-telegram-web-app';
import { Button, Typography } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import styles from './target.module.scss';

export function HomePage() {
  const navigate = useNavigate();
  const webApp = useWebApp();
  return (
    <div className={styles.card}>
      <Button onClick={() => navigate('/targets')}>
        targets
      </Button>
      <Typography.Title>Welcome! <LoadingOutlined /></Typography.Title>
      <Typography.Text>{localStorage.getItem('token')}</Typography.Text>
      <Typography.Title>Debug</Typography.Title>
      <Typography.Text>{decodeURIComponent(webApp.initData)}</Typography.Text>
      <Button onClick={() => navigate('/subscription')}>
        subscription
      </Button>
    </div>
  );
}
