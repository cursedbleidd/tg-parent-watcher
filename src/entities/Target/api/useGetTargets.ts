//import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Target } from '../ITarget';

//const targets1: Target[] = [
//    {
//        name: 'John Doe',
//        lastonline: '00:00 01.01.1979',
//        daytable: ['Пн', 'Ср', 'Пт', 'Вс'],
//        hourlimit: 1,
//        minutelimit: 30,
//        id: uuidv4(),
//    },
//    {
//        name: 'Jane Smith',
//        lastonline: '00:00 01.01.1979',
//        daytable: ['Пн', 'Ср', 'Вс', 'Пт'],
//        hourlimit: 1,
//        minutelimit: 1,
//        id: uuidv4(),
//    },
//    {
//        name: 'Sam Wilson',
//        lastonline: '00:00 01.01.1979',
//        daytable: ['Пн', 'Ср', 'Пт', 'Вс'],
//        hourlimit: 0,
//        minutelimit: 0,
//        id: uuidv4(),
//    },
//];

const getTargets = async () => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get<Target[]>('https://tgwatcher-be.qpilipp.ru/Devices/', {
            params: { token },
        });

        if (response.status !== 200) {
            return [];
        }
        return response.data;
    } catch (error) {
        console.error('Ошибка при выполнении запроса', error);
    }
    return [];
}; // API request

export const useGetTargets = () => {
    const [targets, setTargets] = useState<Target[] | undefined>(undefined);

    useEffect(() => {
        const fetchTargets = async () => {
        const newtargets = await getTargets();
        setTargets(newtargets);
        };
        fetchTargets();
    }, []);

    return targets;
};
