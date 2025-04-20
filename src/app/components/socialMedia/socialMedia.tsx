import style from "./socialMedia.module.css";
import Image from "next/image";


const SocialMedia = () =>{
    return(
        <>
            <div className={style.socialMedia}>
                <div className={style.links}>
                    <div className={style.link}>
                        <Image src={"/image/logo/footer/white/fb.png"} width={35} height={35} alt={"facebook"}></Image>
                    </div>
                    <div className={style.link}>
                        <Image src={"/image/logo/footer/white/linkdin.png"} width={35} height={35} alt={"linkdin"}></Image>
                    </div>
                    <div className={style.link}>
                        <Image src={"/image/logo/footer/white/github.png"} width={35} height={35} alt={"github"}></Image>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SocialMedia;