import { Calendar } from "@/components/ui/calendar"
import { Label } from "@radix-ui/react-label"
import { useId, useState } from "react"
import {AiFillCalendar} from "react-icons/ai"
import { fr} from 'date-fns/locale';

import { Button } from "../ui/button"
import { Popover,PopoverContent,PopoverTrigger } from "../ui/popover"
const CalendarInput = () => {

    const [date, setDate] = useState<Date | undefined>(new Date())
    const [isOpen,setIsOpen]=useState(false)
const refId=useId()
    return (
        <Popover   modal
        
     >
        <PopoverTrigger id={refId} asChild>
          <div className="flex flex-col gap-2">
            <Label htmlFor={refId} className=" cursor-pointer text-sm text-black font-medium
            ">{`Date de début de service`}</Label>
        <Button 
        type="button"
        onClick={()=>setIsOpen(true)}
                      variant={"outline"}
                      className={
                        "w-full pl-3 text-left font-normal"}
                    >
                        {date?.toLocaleDateString()}
                    
                      <AiFillCalendar className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                    </div>

        </PopoverTrigger>
        <PopoverContent
        
        className="relative z-50">
        <Calendar locale={fr}
            selected={date}
                    mode="single"
                    onSelect={setDate}
                     
                    initialFocus/>
            </PopoverContent>
      </Popover>
    )
    

}
export default CalendarInput