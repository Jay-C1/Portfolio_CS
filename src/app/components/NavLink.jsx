import Link from "next/link";

const NavLink = ({ href, title, className }) => {
  return (
    <Link
      href={href}
      className={`block py-2 pl-3 pr-4 sm:text-xl rounded md:p-0 nav-link-style ${className || ""}`}
    >
      {title}
    </Link>
  );
};

export default NavLink;
