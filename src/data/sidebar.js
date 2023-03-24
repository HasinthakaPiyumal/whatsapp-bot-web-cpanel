import { RxDashboard } from "react-icons/rx";
import { MdSchool } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoMdAnalytics } from "react-icons/io";
import { RiAdminFill, RiSettings4Fill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { HiOutlineQrCode } from "react-icons/hi2";
import Dashboard from "../pages/Dashboard";
import Courses from "../pages/Courses";
import Profile from "../pages/Profile";
import Users from "../pages/Users";
import Session from "../pages/Session/Index";
import SpecialKeywords from "../pages/Keywords/SpecialKeywords";
import LevelWiseKeywords from "../pages/Keywords/LevelWiseKeywords";
export const sidebarItems = [
	{
		title: "dashboard",
		path: "dashboard",
		icon: RxDashboard,
		page: Dashboard,
	},
	{
		title: "sessions",
		path: "session",
		icon: HiOutlineQrCode,
		page: Session,
	},
	{
		title: "special keywords",
		path: "special-keywords",
		icon: HiOutlineQrCode,
		page: SpecialKeywords,
	},
	{
		title: "level wise keywords",
		path: "level-wise-keyword",
		icon: HiOutlineQrCode,
		page: LevelWiseKeywords,
	},
	{
		title: "courses",
		path: "courses",
		icon: MdSchool,
		page: Courses,
	},
	{
		title: "manage users",
		path: "users",
		icon: FaUser,
		page: Users,
	},
	{
		title: "analytics",
		path: "analytics",
		icon: IoMdAnalytics,
		page: Dashboard,
	},
	{
		title: "manage staff",
		path: "staff",
		icon: RiAdminFill,
		page: Dashboard,
	},
	{
		title: "settings",
		path: "setting",
		icon: RiSettings4Fill,
		page: Dashboard,
	},
	{
		title: "profile",
		path: "profile",
		icon: CgProfile,
		page: Profile,
	},
];
