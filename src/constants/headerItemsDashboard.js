import { IoPerson, IoNotifications } from "react-icons/io5";
import { BsFillBagPlusFill } from "react-icons/bs";

import { Styles } from "./styles";

const Items = [
  {
    name: "Notification",
    icon: <IoNotifications size={Styles.sizeIconHeader} />,
  },
  {
    name: "Add Order",
    icon: <BsFillBagPlusFill size={Styles.sizeIconHeader} />,
  },
  {
    name: "Account",
    icon: <IoPerson size={Styles.sizeIconHeader} />,
  },
];
export { Items };
