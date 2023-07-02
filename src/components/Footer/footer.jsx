import { useContext } from 'react'
import { BackgroundContext } from "../../Pages/BackgroundContext"
import './footer.scss'


import '../../estilosperosnalizados/lightheme.scss'
import '../../estilosperosnalizados/darktheme.scss'

import { AiFillLinkedin, AiFillGithub, AiOutlineWhatsApp } from 'react-icons/ai'
import listIcon from '../Menu/listIcons'

export default function Footer() {

    const { backgroundFundo, changeBackground } = useContext(BackgroundContext)



    return (
        <>
            <main className={`footer
             ${backgroundFundo ? 'dark-theme-background-fundo'
                    : 'light-theme-background-fundo'}`}>

                <div className='container-footer'>
                    <div
                        className='wrapper-footer'>
                        <div className={`icons-footer 
                        ${backgroundFundo ? 'dark-theme'
                                : 'light-theme'}`}>
                            {listIcon.map((item, index) => {

                                return (
                                    <>

                                        <div
                                            className={`icons-itens-footer 
                                            ${backgroundFundo ? 'dark-theme'
                                                : 'light-theme'}`}
                                            key={index}>{item.icon}
                                        </div>



                                    </>
                                )
                            })}
                        </div>

                        <div className='email'>

                            <a
                                className={`${backgroundFundo ? 'dark-theme'
                                    : 'light-theme'}`}
                                href="mailto:wictorhugobarbosa2011@hotmail.com"
                                target='blank'>

                                wictorhugobarbosa2011@hotmail.com</a>
                        </div>

                        <div
                            className={`desenvolvido 
                        ${backgroundFundo ? 'dark-theme'
                                    : 'light-theme'} `}>

                            <span>Desenvolvido por :  </span>
                            <p> Wictor Hugo</p>


                        </div>

                    </div>
                </div>
            </main>

        </>
    )
}