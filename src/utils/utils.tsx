import { CalendarSearchIcon, HouseIcon, UsersRoundIcon } from "lucide-react"

const NAVBAR_ITEMS = [
    { label: 'Home', route: '/', icon: <HouseIcon className="h-5 w-5" /> },
    { label: 'Track Attendance', route: '/tracker', icon: <CalendarSearchIcon className="h-5 w-5" /> },
    { label: 'Team', route: '/team', icon: <UsersRoundIcon className="h-5 w-5" /> },
]

export { NAVBAR_ITEMS}

const TEAM = [
  { image: "/pu.png", name: "Pranav Unni", role: "Gang Leader", githubLink: "https://github.com/PranavU-Coder" },
  { image: "/pain.jpg", name: "Honored One", role: "Gang Co-Leader", githubLink: "https://github.com/FirezTheGreat" },
  { image: "/cv.webp", name: "Chatur Vasireddy", role: "Gang Co-Leader", githubLink: "https://github.com/ChaturVasireddy" },
  { image: "/pk.png", name: "Pranav Kumar", role: "Gang Member", githubLink: "https://github.com/Pranav-Kumar14" },
  { image: "/ph.png", name: "PixelHalide", role: "Gang Member", githubLink: "https://github.com/PixelHalide" },
  { image: "/bac.webp", name: "bang-a-cat", role: "Gang Member", githubLink: "https://github.com/bongacat" },
  { image: "/ad.png", name: "Orca", role: "Gang Member", githubLink: "https://github.com/ObnoxiousOrca"}
]
export {TEAM};
