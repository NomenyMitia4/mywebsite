import style from "./about.module.css";
import Image from "next/image";

const About = () =>{
    return(
        <>
            <div className={style.about}>
                <div className={style.spacing}></div>
                <div className={style.content}>
                    <div className={style.left}>
                        <h1>About me</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae architecto nostrum neque totam tenetur recusandae voluptate quidem, eveniet enim et ut dolores pariatur laudantium accusamus ipsum sed, ratione ipsa quia.</p>
                    </div>
                    <div className={style.right}>
                        <Image src={"/image/young_boy.png"} alt={"hero"} width={500} height={500}></Image>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;