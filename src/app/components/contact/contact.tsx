import style from "./contact.module.css";
import Image from "next/image";
import SocialMedia from "../socialMedia/socialMedia";

const Contact = () =>{
    return(
        <>
            <div className={style.footer}>
                <div className={style.contact}>
                    <div className={style.left}>
                        <div className={style.title}>
                            <h1>CONTACT ME</h1>
                        </div>
                        <div className={style.info}>
                            <div className={style.item}>
                                <Image src={"/image/logo/email.png"} alt={"miklenomeny gmail"} width={35} height={35}/>
                                <p>miklenomeny@gmail.com</p>
                            </div>
                            <div className={style.item}>
                                <Image src={"/image/logo/gps.png"} alt={"Itaosy Ambohijafy"} width={35} height={35}/>
                                <p> LOT IPF 95 A Ambohijafy Itaosy</p>
                            </div>
                            <div className={style.item}>
                                <Image src={"/image/logo/phone.png"} alt={"Itaosy Ambohijafy"} width={35} height={35}/>
                                <p> +261 38 59 449 03 </p>
                            </div>
                        </div>
                    </div>
                    <div className={style.right}>
                        <div className={style.form}>
                            <form action="#" method="post">
                                <div className={style.inptMail}>
                                    <input type="text" name="mail" id="mail" placeholder="enter your email adress"/>
                                </div>
                                <div className={style.inptMessage}>
                                    <textarea name="message" id="message" placeholder="enter your message"></textarea>
                                </div>
                                <div className={style.btnSubmit}>
                                    <input type="submit" value="SEND MESSAGE" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className={style.socialMedia}>
                    <SocialMedia/>
                    <p>@copyright</p>
                </div>
            </div>
        </>
    )
}

export default Contact;