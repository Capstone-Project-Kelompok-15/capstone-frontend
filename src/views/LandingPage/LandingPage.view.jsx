import React from "react"
import { Link } from "react-router-dom"
import { ButtonMasuk, Logo } from "../../components/atoms"
import { Footer, Hero } from "../../components/molecules"

function LandingPageView() {
    return (
        <div id="landingPageView">
            <div className="bg-[url('../src/assets/hero.jpg')] bg-cover bg-center min-h-screen ">
                <div className="flex py-[17px] px-[80px] justify-between items-center">
                    <Logo />
                    <Link to="/login">
                        <ButtonMasuk type="button" />
                    </Link>
                </div>
                <Hero />
                <Footer />
            </div>
        </div>
    )
}

export default LandingPageView
