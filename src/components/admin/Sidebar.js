// import Styles from "./Styles.js";
import SidebarItem from "./SidebarItem";
import { sidebarItems } from "../../constants/sidebarItems";

const items = sidebarItems;

export default function Sidebar() {
  return (
    <div className="fixed top-0 left-0 h-full w-20 bg-white shadow-2xl">
      <div className="flex flex-col h-full">
        <div className="flex pt-5 mx-auto h-fit items-center">
          <img alt="" className="h-14 " src="/logo.png" />
        </div>
        <div className="flex flex-col h-full items-center justify-center">
          <div className="space-y-3 w-full ">
            {items.map((item, i) => (
              <SidebarItem key={i} link={item.link} icon={item.icon} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
