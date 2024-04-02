import {AppGroupType} from "@/constants/Types";

const colors = {
    yellow: '#ecbe70',
    red: '#dd6848',
    pink: '#e582a2',
    violet: '#8158ec',
    green: '#81c4b6',
}

const items: AppGroupType[] = [
    { id: 1, color: colors.red, name: 'Срочно' },
    { id: 2, color: colors.yellow, name: 'Общие' },
    { id: 3, color: colors.violet, name: 'Долги' },
    { id: 4, color: colors.green, name: 'Цели' },
    { id: 5, color: colors.pink, name: 'Продукты' },
]

export default items

