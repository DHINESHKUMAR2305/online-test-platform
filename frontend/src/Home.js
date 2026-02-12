
import { Link } from "react-router-dom"
import "./Home.css"

const Home = ()=>
{
    return(
        <div className="mainbox">
            <div className="mainbox2" >
                <h1 className="title">Online Test Platform</h1>
                <p className="subtitle">📝 Practice • 📊 Improve • 🥇 Succeed</p>

                <p className="desc" data-aos="fade-right">Welcome to our Online Test Platform!
                    Here you can practice a wide range of subjects designed to improve your knowledge and problem-solving skills.
                    Our platform provides simple, beginner-friendly questions as well as advanced practice sets for everyone.
                </p>

                <div className="ulli">
                    <h5 data-aos="fade-right">Coding Challenges</h5>
                    <p data-aos="fade-left">• Improve your programming logic with beginner to advanced coding problems.</p>

                    <h5 data-aos="fade-right">Aptitude Questions</h5>
                    <p data-aos="fade-left">• Strengthen your quantitative, logical reasoning, and problem-solving skills.</p>

                    <h5 data-aos="fade-right">English Tests</h5>
                    <p data-aos="fade-left">• Enhance your grammar, vocabulary, comprehension, and communication ability.</p>

                    <h5 data-aos="fade-right">Kids Learning Section</h5>
                    <p data-aos="fade-left">• Fun learning materials and simple quizzes for kids.</p>

                    <h5 data-aos="fade-right">General Knowledge</h5>
                    <p data-aos="fade-left">• Stay updated with basic GK questions across multiple topics.</p>
                </div>

                <Link to={"/test"}><button  className="starttest">Choose Test</button></Link>
            </div>
        </div>
    )
}

export default Home