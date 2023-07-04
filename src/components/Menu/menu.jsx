import React, { useState, useEffect, useCallback, useContext } from "react";

import { NavLink } from 'react-router-dom';



import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { BackgroundContext } from "../../Pages/BackgroundContext"



import listaMenu from "./listaMenu";
import './style.scss'
import '../../estilosperosnalizados/rootstyles.scss'
import listIcon from "./listIcons";
import ToggleButton from "../ToggleButton/togglebutton";






const Menu = () => {

    const [handleMenu, setHandleMenu] = useState(false)
    const [isOpen, setIsOpen] = useState(true)

    const [resize, setResize] = useState(false)
    const [tamanho, setTamanho] = useState({ windowWidth: window.innerWidth })

    const handleResize = (e) => {
        setTamanho({ windowWidth: window.innerWidth })
    }

    useEffect(() => {


        window.addEventListener('resize', handleResize)

    }, [])


    useEffect(() => {
        if (tamanho.windowWidth >= 768 && handleMenu === true) {

            setHandleMenu(false)

        }


    }, [tamanho])


    function openMenu() {

        setHandleMenu(!handleMenu)
        setIsOpen(!isOpen)


    }




    const { backgroundFundo, changeBackground } = useContext(BackgroundContext)






    return (
        <>


            <nav className={`menu
             ${backgroundFundo ? 'dark-theme-background-fundo'
                    : 'light-theme-background-fundo'}`}>



                <div className='container'>
                    <div className="wrapper-menu">

                        <div className="icons">
                           {listIcon.map((item,index)=>{

                          


                                return (
                                    <>

                                        <div
                                            className={`icons-menu 
                                            ${backgroundFundo ? 'dark-theme'
                                                    : 'light-theme'}`}
                                            key={index}>
                                                {item.icon}
                                            
                                        </div>
                                    </>
                                )
                            })}
                        </div>


                        <div className='links '>
                            {listaMenu.map((item, index) => {

                                return (
                                    <>

                                        <div >
                                            <NavLink
                                                key={index}
                                                className={`links ${backgroundFundo ? 'dark-theme hover-dark-theme' 
                                                : 'light-theme hover-ligth-theme'} `}
                                                to={item.href}
                                                target={item.blank}
                                                activeClassName='active' >
                                                {item.nome}
                                            </NavLink>

                                        </div>

                                    </>
                                )
                            })}

                        </div>



                        <div className={`menu-mobile
                         ${backgroundFundo ?
                                'dark-theme' :
                                'light-theme'}`}>


                            {handleMenu ?
                                <AiOutlineCloseCircle className='icon-close' size={40}
                                    onClick={openMenu} />
                                : <GiHamburgerMenu className='icon-menu-navegacao' size={40}
                                    onClick={openMenu} />}


                        </div>

                        <ToggleButton />


                    </div>
                    {/* <div className="border-bottom"></div> */}
                </div>

            </nav>
            <div className={`container-menu-mobile 
            ${backgroundFundo? 'dark-theme-background-fundo'
            :'light-theme-background-fundo'}`}>


                {handleMenu && (
                    <>
                        <div className='wrapper-menu-mobile '>
                            {listaMenu.map((item, index) => {
                                return (
                                    <>

                                        <div className='links-mobile'>
                                            <NavLink key={index} 
                                            className={`links-mobile 
                                            ${backgroundFundo ? 
                                                'texto-dark': 
                                                'texto-light'}`} 
                                            to={item.href} target={item.blank} 
                                            activeClassName="active">
                                                {item.nome}
                                                </NavLink>

                                        </div>

                                    </>
                                )
                            })}



                        </div>
                    </>
                )}



            </div>

        </>
    )
}

export default Menu
