import './index.css'

import BannerImg from "../../assets/banner.png"

function Banner() {
    return(
        <header className="banner">
        <img src={BannerImg} alt="O banner principal da página da livraria" />
        </header>
    )
}

export default Banner
