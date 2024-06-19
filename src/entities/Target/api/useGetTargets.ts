import { v4 as uuidv4 } from 'uuid';
import { Target } from '../Target';

const targets: Target[] = [
    {
        name: 'John Doe',
        lastonline: '00:00 01.01.1979',
        daytable: ['Пн', 'Ср', 'Пт', 'Вс'],
        hourlimit: 1,
        minutelimit: 30,
        id: uuidv4(),
    },
    {
        name: 'Jane Smith',
        lastonline: '00:00 01.01.1979',
        daytable: ['Пн', 'Ср', 'Вс', 'Пт'],
        hourlimit: 1,
        minutelimit: 1,
        id: uuidv4(),
    },
    {
        name: 'Sam Wilson',
        lastonline: '00:00 01.01.1979',
        daytable: ['Пн', 'Ср', 'Пт', 'Вс'],
        hourlimit: 0,
        minutelimit: 0,
        id: uuidv4(),
    },
];

const getTargets = (): Target[] => targets; // API request

export const useGetTargets = () => getTargets();
