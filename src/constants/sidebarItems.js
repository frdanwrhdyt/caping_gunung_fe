import { MdSpaceDashboard, MdList } from "react-icons/md";
import { IoPeople } from "react-icons/io5";

import { Styles } from "./styles";

const sidebarItems = [
  {
    title: "Dashboard",
    link: "/dashboard",
    icon: <MdSpaceDashboard size={Styles.sizeIconSidebar} />,
  },
  {
    title: "Queue List",
    link: "/list-menu",
    icon: <MdList size={Styles.sizeIconSidebar} />,
  },
  {
    title: "Member",
    link: "/member",
    icon: <IoPeople size={Styles.sizeIconSidebar} />,
  },
];
export { sidebarItems };
