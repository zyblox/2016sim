import { NavLink } from "react-router-dom";
import homeIcon from "../../assets/icons2/home.png";
import profileIcon from "../../assets/icons2/profile.png";
import chatIcon from "../../assets/icons2/chat.png";
import friendsIcon from "../../assets/icons2/friends.png";
import avatarIcon from "../../assets/icons2/avatar.png";
import inventoryIcon from "../../assets/icons2/inventory.png";
import tradeIcon from "../../assets/icons2/trade.png";
import groupsIcon from "../../assets/icons2/groups.png";
// import forumIcon from "../../assets/icons2/forum.png";
import blogIcon from "../../assets/icons2/blog.png";
// import shopIcon from "../../assets/icons2/shop.png";


export default function Sidebar() {
  const menuItems = [
    { name: "Home", icon: homeIcon, to: "/", end: true },
    { name: "Profile", icon: profileIcon, to: "/profile" },
    { name: "Messages", icon: chatIcon, to: "/messages" },
    { name: "Friends", icon: friendsIcon, to: "/friends" },
    { name: "Avatar", icon: avatarIcon, to: "/my/avatar" },
    { name: "Inventory", icon: inventoryIcon, to: "/my/inventory" },
    { name: "Trade", icon: tradeIcon, to: "/trades" },
    { name: "Groups", icon: groupsIcon, to: "/groups" },
    // { name: "Forum", icon: forumIcon, to: "/forum" },
    { name: "Blog", icon: blogIcon, to: "/blog" },
    // { name: "Shop", icon: shopIcon, to: "/catalog" },
  ];

  return (
    <div id="sidebar">
      <p className="name">username</p>

      <hr id="sideseperator" />

      <ul id="sidebuttons">
        {menuItems.map((item) => (
          <li key={item.name} className="sideli">
            <NavLink to={item.to} end={item.end} className="sidebutton">
              <img
                className="sideliicon"
                src={item.icon}
                alt=""
              />
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <NavLink id="Upgrade" to="/upgrades/bc">Upgrade Now</NavLink>
    </div>
  );
}
