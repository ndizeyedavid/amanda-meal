import { useEffect } from "react";
import pb from "../utils/pocketbase";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"

function Start() {
    const navigate = useNavigate();

    useEffect(() => {
        const loggedin = pb.authStore.isValid;
        if (loggedin) {
            navigate("/");
        }
    }, []);

    return (
        <>
            <section className="flex items-end w-full h-screen" style={{ background: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url('/assets/images/hero.jpg')", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                <div className="text-white flex flex-col items-center justify-center w-full text-center mb-[60px] gap-[25px]">
                    <h3 className="text-[50px] leading-[45px] font-semibold">You want delicacy?<br />Here you go!</h3>
                    <p className="text-[20px]">Find all of it here, order it now!</p>
                    <Link to="/login" className="w-[87%] flex items-center justify-center rounded-lg text-[20px] font-semibold mx-auto h-[50px] bg-[#f73658] transition-all hover:bg-[#f73658]/80">Get Started</Link>
                </div>
            </section>
        </>
    )
}

export default Start
