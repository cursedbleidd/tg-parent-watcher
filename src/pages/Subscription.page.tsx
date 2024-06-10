import { useNavigate } from 'react-router-dom';
import { Typography } from 'antd';
import { BackButton } from '@vkruglikov/react-telegram-web-app';
import { BankCardForm } from '@/widgets/BankCardForm';

export const SubscriptionPage : React.FC = () => {
    const navigate = useNavigate();
    return (
    <>
        <BackButton onClick={() => navigate(-1)} />
        <Typography.Title>Оплатите подписку</Typography.Title>
        <BankCardForm />
    </>
);
};
