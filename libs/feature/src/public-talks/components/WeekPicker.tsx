import { useState } from 'react'
import { addWeeks, format, subWeeks, startOfWeek } from 'date-fns'
import {
  ChevronLeft,
  ChevronRight,
  Calendar as CalendarIcon,
} from 'lucide-react'




export const WeekPicker = () => {
  const [selectedWeek, setSelectedWeek] = useState(new Date())
  const minDate = subWeeks(new Date(), 180)
  const maxDate = addWeeks(new Date(), 6 * 4)

  const handleWeekChange = (diff: number) => {
    setSelectedWeek(date => {
      const newDate = addWeeks(date, diff)
      return newDate < minDate ? minDate : newDate > maxDate ? maxDate : newDate
    })
  }

  return (
    <div className="flex items-center justify-center">

      <button
        onClick={() => handleWeekChange(-1)}
        className="btn-icon btn-icon-secondary"
        disabled={selectedWeek <= minDate}
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <input
        readOnly
        type="text"
        name="weekPicker"
        value={format(startOfWeek(selectedWeek, { weekStartsOn: 1 }), 'MMM dd, yyyy')}
        className="form-input text-center w-32"
      />
      <button
        onClick={() => handleWeekChange(1)}
        className="btn-icon btn-icon-secondary"
        disabled={selectedWeek >= maxDate}
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  )
}
