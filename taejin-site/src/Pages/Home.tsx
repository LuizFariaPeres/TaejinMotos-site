import Header from "../Components/Header";
import Carrousel from "../Components/Carrousel";

//css e imagens
import t25 from '../assets/Image/t-250_img.png'
import '../assets/Css/Home.css';

export default function Home(){

    
    return(
        <div className="Home">
            <Header/>
            <div className="Section">
                {/*<Carrousel/>*/}
                <div className="ImgBlock">
                    <button className="btn_ImgBlock">Saiba Mais</button>
                    <img src="https://placehold.co/500" alt="moto" />
                </div>
                <div>
                    <h1>T-250</h1>
                    <img className="img_t25" src={t25}/>
                </div>
            </div>
           
        </div>
    )
}