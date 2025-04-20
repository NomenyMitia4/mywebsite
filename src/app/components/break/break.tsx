import style from "./break.module.css";
const Break = () =>{
    return(
        <>
        <div className={style.break}>
            <div className={style.pub}>
                <div className={style.title}>2</div>
                <div className={style.description}>Experiences</div>
            </div>
            <div className={style.pub}>
                <div className={style.title}>20 +</div>
                <div className={style.description}>Projects Done</div>
            </div>
            <div className={style.pub}>
                <div className={style.title}>3 +</div>
                <div className={style.description}>Stacks</div>
            </div>
        </div>
        </>
    )
}

export default Break;