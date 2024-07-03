import axios from 'axios';
import { useWebApp } from '@vkruglikov/react-telegram-web-app';
import { useEffect } from 'react';

export const useGetToken = (onError: (err: string) => void) => { //return response.status
    const webApp = useWebApp();

    useEffect(() => {
        const fetchToken = async () => {
            try {
                const response = await axios.post('https://tgwatcher-be.qpilipp.ru/Users', webApp.initData, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (response.status === 200) { //refactor
                    localStorage.setItem('token', response.data); // Сохранение токена в localStorage
                } else {
                    onError('Ошибка при получении токена');
                }
            } catch (error: any) {
                onError(error.message);
            }
        };

        fetchToken();
    }, []);
};
