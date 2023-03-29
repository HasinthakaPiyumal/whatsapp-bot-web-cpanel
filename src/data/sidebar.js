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
import LevelWiseKeywordsLevel1 from "../pages/Keywords/LevelWiseKeywords/1";
import LevelWiseKeywordsLevel2 from "../pages/Keywords/LevelWiseKeywords/2";
import LevelWiseKeywordsLevel3 from "../pages/Keywords/LevelWiseKeywords/3";
import LevelWiseKeywordsLevel4 from "../pages/Keywords/LevelWiseKeywords/4";
import LevelWiseKeywordsLevel5 from "../pages/Keywords/LevelWiseKeywords/5";
import LevelWiseKeywordsLevel6 from "../pages/Keywords/LevelWiseKeywords/6";
import SpecialKeywordsList from "../pages/Keywords/SpecialKeywords/SpecialKeywordsList";
import SpecialKeywordsEdit from "../pages/Keywords/SpecialKeywords/SpecialKeywordsEdit";
import SpecialKeywordsLayout from "../layouts/SpecialKeywordsLayout"
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
		page: SpecialKeywordsLayout,
		children: [
			{
				title: "special keywords",
				path: "add",
				page: SpecialKeywords,
			},
			{
				title: "special keywords list",
				path: "list",
				page: SpecialKeywordsList,
			},
		],
	},
	{
		title: "special keywords edit",
		path: "special-keywords-edit",
		page: SpecialKeywordsEdit,
		hidden: true,
		back: true,
	},
	{
		title: "level wise",
		path: "level-wise",
		icon: HiOutlineQrCode,
		page: LevelWiseKeywords,
		children: [
			{
				title: "01 - Main Menu",
				path: "main-menu",
				page: LevelWiseKeywordsLevel1,
			},
			{
				title: "02 - About",
				path: "about",
				page: LevelWiseKeywordsLevel2,
			},
			{
				title: "03 - Age Selection",
				path: "ages",
				page: LevelWiseKeywordsLevel3,
			},
			{
				title: "04 - Course Selection",
				path: "courses",
				page: LevelWiseKeywordsLevel4,
			},
			{
				title: "05 - Details Form",
				path: "form",
				page: LevelWiseKeywordsLevel5,
			},
			{
				title: "06 - Thanks Message",
				path: "thanks",
				page: LevelWiseKeywordsLevel6,
			},
		],
	},

	{
		title: "courses",
		path: "courses",
		icon: MdSchool,
		page: Courses,
	},
	// {
	// 	title: "manage users",
	// 	path: "users",
	// 	icon: FaUser,
	// 	page: Users,
	// },
	// {
	// 	title: "analytics",
	// 	path: "analytics",
	// 	icon: IoMdAnalytics,
	// 	page: Dashboard,
	// },
	// {
	// 	title: "manage staff",
	// 	path: "staff",
	// 	icon: RiAdminFill,
	// 	page: Dashboard,
	// },
	{
		title: "settings",
		path: "setting",
		icon: RiSettings4Fill,
		page: Dashboard,
	},
	// {
	// 	title: "profile",
	// 	path: "profile",
	// 	icon: CgProfile,
	// 	page: Profile,
	// },
];
