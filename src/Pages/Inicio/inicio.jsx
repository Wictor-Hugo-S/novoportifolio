import { useState, useContext } from 'react';
import Menu from '../../components/Menu/menu'
import './style.scss'
import wct from '../../images/wct.jpg'

import { BackgroundContext } from '../BackgroundContext'
import HardSkills from '../../components/HardSkills/hardskills';
import Projetos from '../../components/Projetos/projetos';
import Footer from '../../components/Footer/footer';

import { FaHandPeace } from 'react-icons/fa'

export default function Inicio() {

    const { backgroundFundo, changeBackground } = useContext(BackgroundContext);


    return (

        <>
            <main
                
                className={`container' 
                ${backgroundFundo ? 'backgroundFundoPage-theme-dark'
                :'backgroundFundoPage-theme-light' }`}>
                <Menu />


                <section className='descricao-sobre'>
                    <div className='container-descricao-sobre'>
                        <div className='wrapper-descricao-sobre'>
                            <div 
                                className={`texto-descricao-sobre 
                                ${backgroundFundo?'dark-theme'
                                :'light-theme'}`}>
                                <div className='teste-texto'>
                                    <span>Oi,</span>
                                    <FaHandPeace size={35} />
                                </div>
                                <span>Eu sou o Wictor Hugo</span>
                                <span>Desenvolvedor Front-End</span>

                            </div>
                            <div className='image-descricao-sobre'>
                                <img src={wct}>

                                </img>
                            </div>

                        </div>
                    </div>
                </section>

                <section>
                    <HardSkills />
                </section>

                <section>
                    <Projetos />
                </section>

                <footer>
                    <Footer />
                </footer>
            </main>

        </>
    )
}