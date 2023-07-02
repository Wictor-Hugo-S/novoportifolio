
import { useContext, useState } from 'react';
import Menu from '../../components/Menu/menu'
import './habilidades.scss'
import { BackgroundContext } from '../BackgroundContext';
import HardSkills from '../../components/HardSkills/hardskills';
import Footer from '../../components/Footer/footer'

import { GiSatelliteCommunication } from 'react-icons/gi'
import listaFluxoTrabalho from './listaFluxoTrabalho';
import listaSoftSkills from './listaSoftSkills';


import { motion, AnimatePresence } from "framer-motion";
export default function Habilidades() {

    const { backgroundFundo, changeBackground } = useContext(BackgroundContext);

    const listaFluxo1 = listaFluxoTrabalho[0]
    const listaFluxo2 = listaFluxoTrabalho[1]
    const listaFluxo3 = listaFluxoTrabalho[2]



    const [isFlipped, setIsFlipped] = useState([]);
   
 

  const handleCard = (id) => {
    if (isFlipped.includes(id)) {
        setIsFlipped(isFlipped.filter((cardId) => cardId !== id));
    } else {
        setIsFlipped([...isFlipped, id]);
    }
  };
    return (
        <>

            <main className={`container' 
                ${backgroundFundo ? 'backgroundFundoPage-theme-dark'
                    : 'backgroundFundoPage-theme-light'}`}>
                <Menu />
                <div className='container-margin'>
                    <HardSkills />
                </div>
                <section>
                    <div className='wrapper-fluxo-trabalho'>
                        <div className={`title-fluxo-trabalho 
                        ${backgroundFundo ? 'dark-theme'
                                : 'light-theme'} `}>
                            <h1>Fluxo de Trabalho</h1>
                        </div>



                        <div className='lista-fluxo-trabalho'>
                            <ul>
                                {listaFluxo1.map((item) => {


                                    return (

                                        <li className={`${backgroundFundo ? 'texto-dark'
                                            : 'texto-light'}`}
                                            key={item.id}>
                                            {item.icon}{item.nome}
                                        </li>

                                    )

                                })}
                            </ul>

                            <ul>

                                {listaFluxo2.map((item) => {
                                    return (

                                        <li className={`${backgroundFundo ? 'texto-dark'
                                            : 'texto-light'}`}
                                            key={item.id}>
                                            {item.icon}{item.nome}
                                        </li>

                                    )
                                })}
                            </ul>

                            <ul>
                                {listaFluxo3.map((item) => {
                                    return (

                                        <li className={`${backgroundFundo ? 'texto-dark'
                                            : 'texto-light'}`}
                                            key={item.id}>
                                            {item.icon}{item.nome}

                                        </li>

                                    )
                                })}
                            </ul>

                        </div>

                    </div>
                </section>

                <section className='soft-skills'>
                    <div className='wrapper-soft-skills'>
                        <div className={`title-soft-skills

                        ${backgroundFundo ? 'dark-theme'
                                : 'light-theme'} `}>
                            <h1>Minhas Habilidades Pessoais</h1>
                        </div>

                        <div className='container-soft-skills'>
                            <AnimatePresence>



                                {listaSoftSkills.map((item) => {
                                    return (
                                        <>


                                            <div className={`boxes-soft-skills 
                                                  ${backgroundFundo ? 'dark-theme-boxes'
                                                    : 'light-theme-boxes'} `} onClick={() => handleCard(item.id)}
                                                key={item.id}>
                                             

                                                    <div className='itens-soft-skills'>
                                                        <div className='title-itens-soft-skills'>
                                                            <span>{item.nome}</span>
                                                        </div>
                                                        <div className='icons-itens-soft-skills'>
                                                        {isFlipped.includes(item.id) ? <i>{item.describe}</i> : <span>{item.icon}</span>}
                                                        </div>
                                                    </div>

                                                
                                            </div>








                                        </>
                                    )
                                })}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* <AnimatePresence>
                        {isFlipped ? (
                            <motion.div
                                key="back"
                                className="card card-back"
                                initial={{ rotateY: 180 }}
                                animate={{ rotateY: 0 }}
                                exit={{ rotateY: 180 }}
                            >
                                <div className="card-content">
                                    <h2>Back Side</h2>
                                    <p>This is the back side of the card.</p>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="front"
                                className="card card-front"
                                initial={{ rotateY: 0 }}
                                animate={{ rotateY: 180 }}
                                exit={{ rotateY: 0 }}
                            >
                                <div className="card-content">
                                    <h2>Front Side</h2>
                                    <p>This is the front side of the card.</p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence> */}

                    {/* <div className='container-soft-skills'>
                            {listaSoftSkills.map((item) => {
                                return (
                                    <>


                                        <div className={`boxes-soft-skills 
                                        ${backgroundFundo ? 'dark-theme-boxes'
                                                : 'light-theme-boxes'} `} onClick={handleCard}>
                                            <div key={item.id} className='itens-soft-skills'>
                                                <div className='title-itens-soft-skills'>
                                                    <span>{item.nome}</span>
                                                </div>
                                                <div className='icons-itens-soft-skills'>
                                                    {item.icon}
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}
                            

                        </div> */}




                </section>

                <footer>
                    <Footer />
                </footer>
            </main>
        </>
    )
}