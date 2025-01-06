import Image from "next/image";
import Logo from "../../public/logo-jamantek.png";

interface menuProps {
    label: string;
    links: string;
}
const menuItems: menuProps[] = [
    {
        label: "Home",
        links: "/"
    },
    {
        label: "About",
        links: "/About"
    },
    {
        label: "Contact",
        links: "/Contact"
    }
]

const Navbar = () => {
  return (
    <div className="navbar bg-[linear-gradient(110deg,#ffff,45%,#A6A6A6,55%,#ffff)] bg-[length:200%_100%] animate-shimmernav">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">
          <Image src={Logo} width={100} height={100} alt="logo" />
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 font-bold text-md">
         {menuItems.map((menu, index) => (
             <li key={index}>
             <a href={menu.links}>{menu.label}</a>
           </li>
         ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
