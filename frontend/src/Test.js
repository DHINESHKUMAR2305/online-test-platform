import syn from "./synann.jpg"
import ant from "./antonyms.webp"
import aptitude from "./Aptitute.webp"
import coding from "./coding.jpeg"
import games from "./game.jpg"
import gk from "./gk.png"
import historyandculture from "./historyandculture.jpg"



import "./Test.css"
import { Link } from "react-router-dom"

const Test =()=>
{

    const data = [

            {
                name: "Aptitude",
                para: "Aptitude improves logical thinking, problem-solving skills, and numerical ability for exams and interviews.",
                img: aptitude
            },
            {
                name: "Coding",
                para: "Coding develops your logical reasoning and technical skills by solving real-world problems efficiently.",
                img: coding
            },
            {
                name: "Games",
                para: "Games improve concentration, decision-making, and strategic thinking while providing entertainment.",
                img: games
            },
            {
                name: "Synonyms",
                para: "Synonyms are words with similar meanings that help improve vocabulary and make communication more effective.",
                img: syn
            },
            {
                name: "Antonyms",
                para: "Antonyms are words with opposite meanings that show contrast and help improve vocabulary effectively.",
                img: ant
            },
            {
                name: "History&Culture",
                para: "Explore the events, people, and traditions that shaped our world and civilizations throughout time.",
                img: historyandculture
            },
            {
                name: "GK",
                para: "General Knowledge improves your awareness about the world, current affairs, history, geography, and famous personalities.",
                img: gk
            }
        ]

    return(
        <div className="test">

            <h1 className="ourmenus">Our Sections</h1>
            <div className="testt">
                {data.map((xx)=>
                (
                    <div className="mapping" key={xx.name} data-aos="flip-left">
                        <img src={xx.img} alt="" />
                        <h1>{xx.name}</h1>
                        <p>{xx.para}</p>
                        <Link to={`/test/${xx.name}`}><button>Start Test <i className="fa-solid fa-angle-right"></i> </button></Link>
                    </div>  
                ))}
            </div>
        </div>
    )
}

export default Test