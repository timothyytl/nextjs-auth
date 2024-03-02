import Links from "./links/Links"
import styles from "@/src/components/header/header.module.css"

const Header = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.logo}>Logo</h1>
      <div>
        <Links />
      </div>
    </div>
  )
}

export default Header
