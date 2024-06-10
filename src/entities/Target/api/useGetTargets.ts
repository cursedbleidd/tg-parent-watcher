import { v4 as uuidv4 } from 'uuid';
import { Target } from '../Target';

const targets: Target[] = [
    {
        name: 'John Doe',
        lastonline: '00:00 01.01.1979',
        timetable: ['Пн', 'Ср', 'Пт', 'Вс'],
        timelimit: '01:00',
        id: uuidv4(),
    },
    {
        name: 'Jane Smith',
        lastonline: '00:00 01.01.1979',
        timetable: ['Пн', 'Ср', 'Пт', 'Вс'],
        timelimit: '01:00',
        id: uuidv4(),
    },
    {
        name: 'Sam Wilson',
        lastonline: '00:00 01.01.1979',
        timetable: ['Пн', 'Ср', 'Пт', 'Вс'],
        timelimit: '01:00',
        id: uuidv4(),
    },
];

const getTargets = (): Target[] => targets; // API request

export const useGetTargets = () => getTargets();
