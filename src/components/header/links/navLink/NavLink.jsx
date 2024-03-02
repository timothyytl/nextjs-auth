"use client"

import Link from "next/link"
import styles from "./navLink.module.css"
import { usePathname } from "next/navigation"

const NavLink = ({ item }) => {
  // Use pathname condition: if pathname = item path, it's (&&) styles.active
  const pathName = usePathname()

  return (
    <Link
      href={item.path}
      className={`${styles.container} ${
        pathName === item.path && styles.active
      }`}
    >
      {item.title}
    </Link>
  )
}

export default NavLink
