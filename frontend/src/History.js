import { useState } from "react"
import axios from "axios"


const History = ({ Culture }) => {


    const [historyanswer, sethistoryanswer] = useState({})

    const handlechange = (id, value) => {
        sethistoryanswer((prev) =>
        ({
            ...prev,
            [id]: value
        }))
    }

    const [open, setopen] = useState({})

    const answershow = (id) => {
        setopen((prev) =>
        ({
            ...prev,
            [id]: !prev[id]
        }))

    }

    const [scoreboard, setscoreboard] = useState(false)

    const [zeor, setzero] = useState(0)


    const checkscoreforsynanyms = async () => {
        const res = await axios.post("https://online-test-backend-ngjo.onrender.com/culture/ans", { answer: historyanswer })

        setzero(res.data.score)

        setscoreboard(true)
    }

    return (
        <div className="synanyms">

            <h1 className="title">History & Culture</h1>
            {Culture.map((xx, value) =>
            (
                <div className="synn" key={xx._id} >
                    <h2 data-aos="fade-up">{value + 1}. {xx.question}</h2>

                    <label>
                        <input
                            type="radio"
                            name={xx._id}
                            onChange={() => handlechange(xx._id, xx.option1)}
                            data-aos="fade-down"
                        />
                        {xx.option1}<br></br>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name={xx._id}
                            onChange={() => handlechange(xx._id, xx.option2)}
                            data-aos="fade-down"
                        />
                        {xx.option2} <br></br>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name={xx._id}
                            onChange={() => handlechange(xx._id, xx.option3)}
                            data-aos="fade-down"
                        />
                        {xx.option3}<br></br>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name={xx._id}
                            onChange={() => handlechange(xx._id, xx.option4)}
                            data-aos="fade-down"
                        />
                        {xx.option4}<br></br>
                    </label>


                    {open[xx._id] && <p>Answer : {xx.answer}</p>}

                    <button onClick={() => answershow(xx._id)}>answer</button>

                </div>
            ))}
            {scoreboard && <p>Total Score : {zeor} 🎉🥳🎉🥳</p>}

            <button className="answerbutton" onClick={() => checkscoreforsynanyms()} >Submit</button>
        </div>
    )
}

export default History