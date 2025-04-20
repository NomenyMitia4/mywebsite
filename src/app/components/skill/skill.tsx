import style from "./skill.module.css";
import Image from "next/image";

const Skill = () =>{
    return(
        <>
            <div className={style.skill}>
                <h2>Skills</h2>
                <div className={style.listSkill}>
                    <div className={style.item}>
                        <Image className={style.iconSkill} src={"/image/logo/js.png"} alt={"javascript"} width={65} height={65}></Image>
                    </div>
                    <div className={style.item}>
                        <Image className={style.iconSkill} src={"/image/logo/python.png"} alt={"python"} width={65} height={65}></Image>
                    </div>
                    <div className={style.item}>
                        <Image className={style.iconSkill} src={"/image/logo/agile.png"} alt={"méthode agile"} width={65} height={65}></Image>
                    </div>
                    <div className={style.item}>
                        <Image className={style.iconSkill} src={"/image/logo/html.png"} alt={"html"} width={65} height={65}></Image>
                    </div>
                    <div className={style.item}>
                        <Image className={style.iconSkill} src={"/image/logo/css.png"} alt={"css"} width={65} height={65}></Image>
                    </div>
                    <div className={style.item}>
                        <Image className={style.iconSkill} src={"/image/logo/next.png"} alt={"nextjs"} width={65} height={65}></Image>
                    </div>
                    <div className={style.item}>
                        <Image className={style.iconSkill} src={"/image/logo/django.png"} alt={"django"} width={65} height={65}></Image>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skill;