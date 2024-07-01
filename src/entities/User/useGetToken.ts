import axios from 'axios';
import { useWebApp } from '@vkruglikov/react-telegram-web-app';
import { useEffect } from 'react';

export const useGetToken = () => { //return response.status
    const webApp = useWebApp();

    useEffect(() => {
        const fetchToken = async () => {
            try {
                const response = await axios.post('https://tgwatcher-be.qpilipp.ru/Users', webApp.initData, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (response.data !== '-1' && response.data !== '404') { //refactor
                    localStorage.setItem('token', response.data); // Сохранение токена в localStorage
                } else {
                    console.error('Ошибка при получении токена');
                }
            } catch (error) {
                console.error('Ошибка при выполнении запроса', error);
            }
        };

        fetchToken();
    }, []);
};
