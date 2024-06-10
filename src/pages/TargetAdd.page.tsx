import { BackButton } from '@vkruglikov/react-telegram-web-app';
import { useNavigate } from 'react-router-dom';
import { TargetForm } from '@/entities/Target/Target';

export const TargetAdd : React.FC = () => {
    const navigate = useNavigate();
    return (
    <>
        <BackButton onClick={() => navigate(-1)} />
        <TargetForm />
    </>
);
};
