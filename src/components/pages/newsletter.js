import { useNavigate } from "react-router-dom";

export default function NewsLetter() {

    let navigate = useNavigate()

    const sendToAbout = () => navigate('/about')

    // function sendToAbout(){
    //     navigate('/about')
    // }

    return (
        <section><h3>Sign Up For Our Newsletter</h3>
            <button onClick={sendToAbout}>Sign me up for hourly updates!</button>
        </section>

    );
  };