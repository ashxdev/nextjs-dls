import Schedule from './Schedule'

const timeSlots = [
    {
        index: 1,
        time: '16:00-17:00',
        lessons: [
            'Contemporary 6-8', '', 'Contemporary 6-8', '', 'Contemporary 6-8'
        ]
    },
    {
        index: 2,
        time: '17:00-18:00',
        lessons: [
            'Contemporary 9-16 B', 'Хореографія діти 4-5', 'Contemporary 9-16 B', 'Хореографія діти 4-5', 'Contemporary 9-16 B'
        ]
    },
    {
        index: 3,
        time: '18:00-19:00',
        lessons: [
            'Contemporary 9-16 A', 'High Heels Мартіна (1 год. 30хв.)', 'Contemporary 9-16 A', 'High Heels Мартіна (1 год. 30хв.)', 'Contemporary 9-16 A'
        ]
    },
    {
        index: 4,
        time: '19:00-20:00',
        lessons: [
            'High Heels Початківці Н', '', 'Contemporary 16+', '', 'Contemporary 16+'
        ]
    },
    {
        index: 5,
        time: '19:30-21:00',
        lessons: [
            '', 'High Heels Ю. Middle/Pro(1 год. 30 хв.)', '', 'High Heels Ю. Middle/Pro(1 год. 30 хв.)', ''
        ]
    },
    {
        index: 6,
        time: '20:00-21:00',
        lessons: [
            'Contemporary MDC (1 год. 30 хв.)', '', 'Contemporary MDC (1 год. 30 хв.)', '', 'Contemporary MDC (1 год. 30 хв.)'
        ]
    }

]

export default function ScheduleSecondFloor() {
    return <Schedule timeSlots={timeSlots} title='Dance Line Studio - розклад 2 поверх' />
}
