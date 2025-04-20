import style from "./navbar.module.css";
import Link from "next/link";

const Navbar = () =>{
    return(
        <>
            <div className={style.navbar}>
                <div className={style.logo}>
                    <h2>Nomeny Mitia</h2>
                </div>
                <div className={style.items}>
                    <div className={style.item}><Link href={"#about"}>About</Link></div>
                    <div className={style.item}>Service</div>
                    <div className={style.item}>Contact</div>
                </div>
            </div>
        </>
    )
}

export default Navbar;