
import React,{createContext,useState} from "react";

const BackgroundContext= createContext()

 function BackgroundProvider({children}){

    const [backgroundFundo, setBackgroundFundo]=useState(false)
    


   const changeBackground=()=>{
    setBackgroundFundo(!backgroundFundo)
   }
    

    return(

        

        <>
        <BackgroundContext.Provider value={{backgroundFundo, changeBackground }}>

            {children}
        </BackgroundContext.Provider>
        </>

        
    )



}

export {BackgroundContext,BackgroundProvider}