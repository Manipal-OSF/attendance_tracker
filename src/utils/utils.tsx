import { CalendarSearchIcon, HouseIcon, UsersRoundIcon } from "lucide-react"

const NAVBAR_ITEMS = [
    { label: 'Home', route: '/', icon: <HouseIcon className="h-5 w-5" /> },
    { label: 'Track Attendance', route: '/tracker', icon: <CalendarSearchIcon className="h-5 w-5" /> },
    { label: 'Team', route: '/team', icon: <UsersRoundIcon className="h-5 w-5" /> },
]

export { NAVBAR_ITEMS}