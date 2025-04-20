import style from "./project.module.css";
import Image from "next/image";
const Project = () =>{
    return(
        <>
            <div className={style.project}>
                <h2>Completed Project</h2>
                <div className={style.listProject}>
                    <div className={style.projectItem}>
                        <div className={style.img}>
                            <Image className={style.image} src={"/image/projects/pj1.png"} alt={"project_1"} width={350} height={200}></Image>
                        </div>
                        <div className={style.description}>
                            <p className={style.title}>Flight Management System</p>
                            <p>A modern flight management solution built using a RESTful API architecture with Flask backend and a Next.js web interface. The system integrates Gemini AI for enhanced functionality and intelligent features.</p>
                        </div>
                    </div>
                    <div className={style.projectItem}>
                        <div className={style.img}>
                            <Image className={style.image} src={"/image/projects/pj2.png"} alt={"project_2"} width={350} height={200}></Image>
                        </div>
                        <div className={style.description}>
                            <p className={style.title}>Web Scraping</p>
                            <p>This web application, built with Django, extracts and displays geographical data such as latitude, longitude, and other location-based information for countries worldwide. It automates the process of collecting and organizing geospatial data, providing users with an efficient way to access and visualize country-specific coordinates and related details.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project;