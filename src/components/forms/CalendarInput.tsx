import { Calendar } from "@/components/ui/calendar"
import { Label } from "@radix-ui/react-label"
import { useState } from "react"
import {AiFillCalendar} from "react-icons/ai"
import { Button } from "../ui/button"
import { Popover,PopoverContent,PopoverTrigger } from "../ui/popover"
const CalendarInput = () => {

    const [date, setDate] = useState<Date | undefined>(new Date())

    return (
        <Popover>
        <PopoverTrigger asChild>
          <div className="flex flex-col gap-2">
            <Label className="font-semibold text-sm">{`Quand souhaitez vous qu'on vous rappel`}</Label>
        <Button 
        type="button"
                      variant={"outline"}
                      className={
                        "w-full pl-3 text-left font-normal"}
                    >
                        {date?.toDateString()}
                    
                      <AiFillCalendar className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                    </div>

        </PopoverTrigger>
        <PopoverContent>
        <Calendar
            selected={date}
                    mode="single"
                    onSelect={setDate}
                     
                    initialFocus/>
            </PopoverContent>
      </Popover>
    )
    

}
export default CalendarInput