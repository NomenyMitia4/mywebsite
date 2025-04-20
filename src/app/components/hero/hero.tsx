import style from "./hero.module.css";
import Image from "next/image";

const Hero = () => {
    return(
        <>
            <div className={style.hero}>
                <div className={style.left}>
                    <div className={style.persoInfo}>
                        <p>Hello, I am</p>
                        <h1>ANDRIAMAHEVA</h1>
                        <h1>Nomeny Mitia</h1>
                        <p>Full-stack developer</p>
                    </div>
                    <div className={style.socialLink}>
                        <div className={style.link}>
                            <Image src={"/image/social_media/facebook.png"} alt={"facebook"} width={30} height={30}></Image>
                        </div>
                        <div className={style.link}>
                            <Image src={"/image/social_media/linkedin.png"} alt={"facebook"} width={30} height={30}></Image>
                        </div>
                        <div className={style.link}>
                            <Image src={"/image/social_media/github.png"} alt={"facebook"} width={30} height={30}></Image>                            
                        </div>
                    </div>
                </div>
                <div className={style.right}>
                    <div className={style.img}>
                        <Image className={style.image} src={"/image/young_boy.png"} alt={"hero"} width={500} height={500}></Image>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;