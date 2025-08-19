import { useNavigate } from "react-router-dom";
import "./home.css";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="container">
            <div className="page">
                <section className="content content-home">
                    <div className="text-container">
                        <h2 className="heading">Welcome to PopX</h2>
                        <p className="description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                    <div className="button-container">
                        <button onClick={() => navigate("/SignUp")}>
                            Create Account
                        </button>
                        <button onClick={() => navigate("/login")}>
                            Already Registered? Login
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;
