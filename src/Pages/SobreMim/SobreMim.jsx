import { useState, useContext } from 'react';
import Menu from '../../components/Menu/menu'


import { BackgroundContext } from '../BackgroundContext'
import Footer from '../../components/Footer/footer';

import './sobremim.scss'
import listaExperiencia from './listaExperiencia';
import listaCurso from './listaCurso';
import listaFormacao from './listaFormacao';


export default function SobreMim() {

    const { backgroundFundo, changeBackground } = useContext(BackgroundContext);


    return (

        <>
            <main className={`container 
             ${backgroundFundo ? 'backgroundFundoPage-theme-dark' :
                    'backgroundFundoPage-theme-light'}`}>

                <Menu />

                <div className='wrapper-sobre '>
                    <div className={`title-sobre container-margin  ${backgroundFundo ? 'dark-theme' : 'light-theme'}`}>
                        <h1>Sobre Mim</h1>
                    </div>
                    <div className={`descricao-sobre ${backgroundFundo ? 'texto-dark' : 'texto-light'}`}>
                        <span>
                           Olá, sou Wictor Hugo, moro na cidade de Olinda-PE. Aqui está uma breve descrição sobre mim.
                            <br></br>
                            <br></br>
                            Já criei alguns sites para provedores de internet e alguns sites fictícios onde simulava alguma situação. Atualmente estou desenvolvendo em React e possuo capacidade rápida de aprendizado.
                            <br></br>
                            <br></br>
                            Sempre gostei de criar e inovar coisas e ajuda a impactar a vida das pessoas. A tecnologia ela está muito presente no nosso cotidiano e através dela podemos transformar vida e fazer do mundo um lugar um pouco melhor.
                            <br></br>
                            <br></br>
                            O que me faz amar tanto a tecnologia é o desafio de encontrar soluções eficientes e inovadoras para problemas complexos que pode ser extremamente importante para muitas pessoas..
                            <br></br>
                            <br></br>
                          
                            Estou em busca de uma oportunidade de estágio/júnior na área de desenvolvimento de software.
                        </span>
                        
                    </div>
                    <div className={`border-bottom ${backgroundFundo ? 'dark-theme' : 'light-theme'}`}></div>

                    <div className='experiencia-sobre'>
                        <div className={`title-sobre 
                        ${backgroundFundo ? 'dark-theme' :
                                'light-theme'}`}>
                            <h1>Experiência</h1>
                        </div>

                        {listaExperiencia.map((item) => {
                            return (
                                <>

                                    <div key={item.id} 
                                    className={`descricao-sobre 
                                    ${backgroundFundo ? 'texto-dark' : 'texto-light'}`}>
                                        <div className='title-descricao'>
                                            <h1>{item.title}</h1>
                                        </div>


                                        <div className='funco-descricao'>
                                            <span>{item.descricao}</span>
                                        </div>
                                        <div className='ano-trabalho'>
                                            <span>{item.ano}</span>
                                        </div>
                                        <div className={`border-bottom ${backgroundFundo ? 'dark-theme' : 'light-theme'}`}></div>
                                    </div>

                                </>
                            )
                        })}


                    </div>

                    <div className='formacao-academica'>
                        <div className='wrapper-formacao-academica'>
                            <div className={`title-sobre 
                        ${backgroundFundo ? 'dark-theme' :
                                    'light-theme'}`}>
                                <h1>Formação Academica</h1>
                            </div>

                            {listaFormacao.map((item,index)=>{
                                return(
                                    <>
                                      <div className={`info-formacao-academica
                                    ${backgroundFundo ? 'texto-dark' 
                                    : 'texto-light'}`}>
                                <div className='instituicao'>
                                    <span>Faculdade : {item.instituicao}</span>
                                </div>
                                <div className='curso'>
                                    <span>Curso : {item.curso}</span>
                                </div>
                                <div className='descricao-formacao-academica'>
                                    <span> Semestre : {item.descricao}  </span>
                                </div>
                                <div className='modalidade-formacao-academica'>
                                    <span> Modalidade : {item.modalidade}  </span>
                                </div>
                                <div className='situacao-formacao-academica'>
                                    <span> Situação : {item.situacao}  </span>
                                </div>
                                <div className='ano-formacao-academica'>
                                    <span>Previsão de conclusão : {item.ano}</span>
                                </div>

                            </div>
                            <div className={`border-bottom 
                    ${backgroundFundo ? 'dark-theme' 
                    : 'light-theme'}`}></div>
                                    </>
                                )
                            })}

                          

                        </div>

                    </div>
                   

                    <div className='extra-curricular'>

                        <div className={`title-sobre 
                        ${backgroundFundo ? 'dark-theme' :
                                'light-theme'}`}>
                            <h1>Extra Curricular</h1>
                        </div>
                        <div className='container-box-curso'>
                            {listaCurso.map((item, index) => {
                                return (
                                    <>

                                        <div 
                                        key={item.id} 
                                        className={`box-cursos 
                                        ${backgroundFundo?'dark-theme-boxes'
                                        :'light-theme-boxes'}`}>
                                            <div className='title-curso'>
                                                <div className='nome-curso'>
                                                    <h1>{item.titleCurso}</h1>
                                                </div>
                                                <div className='plataforma-curso'>
                                                    <h1>{item.plataforma}</h1>
                                                </div>
                                            </div>
                                            <div className='descricao-curso'>
                                                <span>{item.descricao}</span>
                                            </div>

                                            <div className='certificado-curso'>
                                                <a href={item.verCertificado} target='blank'>Ver Certificado</a>
                                            </div>

                                            <div className='quantidade-curso'>
                                                <div className='data-curso'>
                                                    <span>{item.data}</span>
                                                </div>

                                                <div className='horas-curso'>
                                                    <span>{item.horas}</span>

                                                </div>
                                            </div>

                                        </div>
                                

                                </>
                        )
                        })}
                            </div >

                    </div>
                </div>

                <footer>
                    <Footer />
                </footer>
            </main>


        </>
    )
}