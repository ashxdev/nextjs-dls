type TimeSlot = {
    index: number
    time: string,
    lessons: string[]
}
type TimeSlots = TimeSlot[]

export default function Schedule({ timeSlots, title }: { timeSlots: TimeSlots, title: string }) {
    return (
        <div className="lg:flex lg:h-full lg:flex-col">
            <header className="flex items-center justify-between border-b border-gray-200 px-6 py-4 lg:flex-none">
                <h1 className="text-base font-semibold text-gray-900">
                    <time dateTime="2022-01">{title}</time>
                </h1>
                <div className="flex items-center">

                </div>
            </header>
            <div className="shadow-sm ring-1 ring-black/5 lg:flex lg:flex-auto lg:flex-col">
                <div className="grid grid-cols-6 gap-px border-b border-gray-300 bg-gray-200 text-center text-xs/6 font-semibold text-gray-700 lg:flex-none">
                    <div className="bg-white py-2">
                        Ч<span className="sr-only sm:not-sr-only">ас</span>
                    </div>
                    <div className="bg-white py-2">
                        П<span className="sr-only sm:not-sr-only">онеділок</span>
                    </div>
                    <div className="bg-white py-2">
                        В<span className="sr-only sm:not-sr-only">івторок</span>
                    </div>
                    <div className="bg-white py-2">
                        С<span className="sr-only sm:not-sr-only">есерда</span>
                    </div>
                    <div className="bg-white py-2">
                        Ч<span className="sr-only sm:not-sr-only">етверг</span>
                    </div>
                    <div className="bg-white py-2">
                        П<span className="sr-only sm:not-sr-only">&apos;ятниця</span>
                    </div>
                </div>

                <div className="flex bg-gray-200 text-xs/6 text-gray-700 lg:flex-auto">
                    <div className="hidden w-full lg:grid lg:grid-cols-6 lg:grid-rows-6 lg:gap-px">
                        {timeSlots.map((timeSlot, index) => {
                            return <>
                                <div
                                    key={timeSlot.index + index}
                                    className="bg-white relative px-0 py-0 md:px-3 md:py-2 text-gray-500 h-14"
                                >
                                    {timeSlot.time}
                                </div>
                                {timeSlot.lessons.map((lesson, index) => (
                                    <div key={index} className="bg-white relative px-0 py-0 md:px-3 md:py-2 text-gray-500 h-14">
                                        <p className="flex-auto  font-medium text-gray-900 group-hover:text-indigo-600">
                                            {lesson}
                                        </p>
                                    </div>

                                ))
                                }
                            </>
                        })}

                    </div>
                    <div className="isolate grid w-full grid-cols-6 grid-rows-6 gap-px lg:hidden">
                        {timeSlots.map(timeSlot => {
                            return <>
                                <div
                                    key={timeSlot.index}
                                    className="bg-white relative px-0 py-0 md:px-3 md:py-2 text-gray-500 "
                                >
                                    {timeSlot.time}
                                </div>
                                {timeSlot.lessons.map((lesson, index) => (
                                    <div key={index} className="bg-white relative px-0 py-0 md:px-3 md:py-2 text-gray-500 ">
                                        <p className="flex-auto text-wrap truncate font-medium text-gray-900 group-hover:text-indigo-600">
                                            {lesson}
                                        </p>
                                    </div>
                                ))
                                }
                            </>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
