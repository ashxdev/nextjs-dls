import Schedule from './Schedule'

const timeSlots = [
    {
        index: 1,
        time: '9:30-11:00',
        lessons: [
            'Ballet', '', 'Ballet', '', 'Ballet'
        ]
    },
    {
        index: 2,
        time: '11:00-12:00',
        lessons: [
            'Stretching', '', 'Stretching', '', 'Stretching'
        ]
    },
    {
        index: 3,
        time: '16:00-17:00',
        lessons: [
            'Hip Hop Kids', '', 'Hip Hop Kids', '', 'Hip Hop Kids'
        ]
    },
    {
        index: 4,
        time: '17:00-18:00',
        lessons: [
            'Hip Hop Kids Begin', 'K-pop beginners', 'Hip Hop Kids Begin', 'K-pop beginners', 'Hip Hop Kids Begin'
        ]
    },
    {
        index: 5,
        time: '18:00-19:00',
        lessons: [
            'Bachata Lady Style Middle', 'K-pop', 'Bachata Lady Style Middle', 'K-pop', 'High Heels Початківці Н.'
        ]
    },
    {
        index: 6,
        time: '19:00-20:00',
        lessons: [
            'Bachata Lady Style Begin', 'Парна Bachata', 'Bachata Lady Style Begin', 'Парна Bachata', ''
        ]
    },
    {
        index: 7,
        time: '20:00-21:00',
        lessons: [
            '', 'Парна Bachata Початківці', '', 'Парна Bachata Початківці', ''
        ]
    }
]

export default function ScheduleThreeFloor() {
    return <Schedule timeSlots={timeSlots} title='Dance Line Studio - розклад 3 поверх' />
}
