import { useContext } from 'react';
import { BackgroundContext } from '../../Pages/BackgroundContext';

import { AiFillGithub, AiOutlineLink } from 'react-icons/ai'

import imobiliaria from '../../images/imobiliaria.png'

import './projetos.scss'
import listaProjetos from './listaProjetos';




export default function Projetos() {
    const { backgroundFundo, changeBackground } = useContext(BackgroundContext);


    return (

        <>
            <main className="projetos">
                <div className="container-projetos">
                    <div 
                    className={`title-projetos 
                    ${backgroundFundo?'dark-theme'
                    :'light-theme'}`}>
                       
                        <h1>Projetos</h1>
                        <span>Meus projetos mais recentes</span>
                    </div>

                    <div className='boxes-inicio'>
                    {listaProjetos.map((item, index) => {
                        return (
                            <>

                                <div key={item.id} 
                                className={`boxes-projetos
                                 ${backgroundFundo?'dark-theme-boxes'
                                 :'light-theme-boxes'}`}>
                                    

                                    <div className='wrapper-projetos'>
                                        <div className='imagem-projetos'>
                                            <img src={item.imagem}></img>
                                        </div>
                                        <div className='itens-projetos'>
                                            <div className='itens-title-projetos'>

                                                <h1>{item.texto}</h1>
                                            </div>
                                            <div className='descricao-projetos'>
                                                <span>{item.descricao}</span>
                                            </div>
                                            <div className='habildades-projetos'>
                                                <p>{item.habilidades}</p>
                                            </div>
                                        </div>
                                        <div className='buttons-projetos'>
                                            <div className='ver-site'
                                            >

                                                <a href={item.versite} target='blank'> <AiOutlineLink size={20}  />Ver site</a>
                                            </div>
                                            <div className='repositorio'
                                            >
                                             
                                                <a href={item.repositorio} target='blank'>    <AiFillGithub  size={20} />Repositório</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </>
                        )
                    })}
                    </div>

                </div>

            </main>


        </>
    )
}