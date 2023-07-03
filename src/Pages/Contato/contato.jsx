import { useContext, useState } from "react"

import Menu from '../../components/Menu/menu'
import './contato.scss'
import { BackgroundContext } from "../BackgroundContext";

import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdMarkEmailRead } from 'react-icons/md'

import Footer from '../../components/Footer/footer'
export default function Contato() {


    const { backgroundFundo, changeBackground } = useContext(BackgroundContext);

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [sobreNome, setSobreNome] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        window.location.href = `mailto:${email}`;

        // Limpar os campos após o envio
        setNome('');
        setEmail('');
        setMensagem('');
        setSobreNome('');
    };

    return (

        <>

            <main

                className={`container' 
                ${backgroundFundo ? 'backgroundFundoPage-theme-dark'
                        : 'backgroundFundoPage-theme-light'}`}>
                <Menu />

                <section className="contato">
                    <div className="wrapper-contato">
                        <div className={`title-contato container-margin 
                        ${backgroundFundo ? 'dark-theme'
                                : 'light-theme'}`}>
                            <h1>Contato</h1>


                        </div>




                        <form onSubmit={handleSubmit}>
                            <label className={`${backgroundFundo ? 'texto-dark' : 'texto-light'}`}
                                htmlFor="nome"
                            >
                                Nome:</label>
                            <input
                                required
                                type="text"

                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                placeholder="Nome"

                            />
                            <label className={`${backgroundFundo ? 'texto-dark' : 'texto-light'}`}
                                htmlFor="sobrenome">
                                Sobrenome:
                            </label>
                            <input
                                required
                                type="text"

                                value={sobreNome}
                                onChange={(e) => setSobreNome(e.target.value)}
                                placeholder="Sobrenome"

                            />

                            <label className={`${backgroundFundo ? 'texto-dark' : 'texto-light'}`}
                                htmlFor="email">
                                Email:
                            </label>
                            <input
                                type="email"

                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                                required
                            />

                            <label className={`${backgroundFundo ? 'texto-dark' : 'texto-light'}`}
                                htmlFor="mensagem">Mensagem:
                            </label>
                            <textarea

                                value={mensagem}
                                onChange={(e) => setMensagem(e.target.value)}
                                placeholder="Digite o Assunto"
                                required
                            >

                            </textarea>

                            <button className={` 
                        ${backgroundFundo ? 'dark-theme-boxes'
                                    : 'light-theme-boxes'}`}
                                type="submit">
                                Enviar
                            </button>
                        </form>

                        <div className="icons-contato">


                            <BsFillTelephoneFill fill="orange"  /> <span>55+ (81) 99764-7606</span>
                           
                        </div>
                    </div>

                </section>
                <footer>
                    <Footer />
                </footer>
            </main>

        </>
    )
}