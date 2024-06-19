import styles from './target.module.scss';

export function HomePage() {
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
