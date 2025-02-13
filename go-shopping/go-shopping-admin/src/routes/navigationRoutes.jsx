import { TbAd, TbBrandProducthunt, TbHome, TbMotorbike, TbShoppingBag, TbUsersGroup } from "react-icons/tb";

export const navigationRoutes = [
  { name: "Home", path: "/home", icon: TbHome },
  { name: "Advertisements", path: "/home/advertisements", icon: TbAd},
  { name: "Products", path: "/home/products", icon: TbBrandProducthunt },
  { name: "Orders", path: "/home/orders", icon: TbShoppingBag },
  { name: "Users", path: "/home/users", icon: TbUsersGroup },
  { name: "Riders", path: "/home/riders", icon: TbMotorbike },
];
