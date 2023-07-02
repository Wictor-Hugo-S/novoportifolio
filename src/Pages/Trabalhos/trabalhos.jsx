import { useContext } from "react";
import Menu from "../../components/Menu/menu";
import Projetos from "../../components/Projetos/projetos";
import Footer from '../../components/Footer/footer'
import { BackgroundContext } from "../BackgroundContext";
import Carrosel from '../../components/Carrosel/carrosel'


export default function Trabalhos(){

    const { backgroundFundo, changeBackground } = useContext(BackgroundContext);

    return(
        <>

        <main  className={`container' 
                ${backgroundFundo ? 'backgroundFundoPage-theme-dark'
                :'backgroundFundoPage-theme-light' }`}>

            <Menu/>

            <section className="meus-projetos container-margin  ">
                <Projetos/>
            </section>

            <section className="carrosel-imagens">
                <Carrosel/>
                
            </section>

            <footer>
                <Footer/>
            </footer>

        </main>
        </>
    )
}