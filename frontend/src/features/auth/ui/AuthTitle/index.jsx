import { Link } from "react-router-dom";
import styles from "./AuthTitle.module.css"
const AuthTitle=()=>{
  return(<>
  <div className={styles.titleContainer}>
        <Link to="/" className={styles.logo}>
          <h2 className={styles.title}>HOME</h2>
        </Link>
      </div>
  </>)
}
export default AuthTitle;