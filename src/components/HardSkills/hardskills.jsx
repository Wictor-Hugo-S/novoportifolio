
import './hardskills.scss'
import { useContext } from 'react';
import { BackgroundContext } from '../../Pages/BackgroundContext';
import listaSkill from './listaSkills';
export default function HardSkills (){

    const { backgroundFundo, changeBackground } = useContext(BackgroundContext);
  

    return(
        <>
        <main className='hard-skills'>

            <div className="container-hard-skills">
                <div className={`title-hard-skills 
                ${backgroundFundo? 'dark-theme'
                :'light-theme'}`}>
               
                  
                  <h1>Minhas Habilidades Tech</h1>
                  <span>Tecnologias que eu venho trabalhando...</span>

                </div>

                <div className="icons-hard-skills">
                    {listaSkill.map((item,index)=>{
                        return(
                            <>
                                <div className='wrapper-icons' key={index}>{item}</div>
                            </>
                        )
                    })}

                </div>
            </div>
        </main>

        </>
    )
}