

import imobiliaria from '../../images/imobiliaria.png'
import img1 from '../../images/img1.png'
import img2 from '../../images/img2.png'
import img3 from '../../images/img3.png'
import img4 from '../../images/img4.jpg'
import img5 from '../../images/img5.png'
import img6 from '../../images/img6.png'
import testeImg from '../../images/testeImg.jpg'

const image=[imobiliaria,img1,img2,img3,img4,img5,img6,testeImg]

const listaProjetos = [

    {
        id: 0,
        imagem: image[7],
        linkImage:'',
        texto: 'Provedor De Internet',
        descricao: 'Website feito para um provedor de internet, no qual o site possui os valores dos planos e todo suporte que ele presta para o cliente.',
        habilidades: 'React, Javascript, HTML, CSS',
        versite: 'https://sistectelecom.com.br/',
        repositorio: 'https://github.com/Wictor-Hugo-S/novoportifolio'
    },
    {
        id: 1,
        imagem: image[4],
        linkImage:'',
        texto: 'Dentista Autônomo',
        descricao: 'Website fictício que mostra todo trabalho de um dentista e formas como ele trabalha, que facilita as pessoas a acha-ló.',
        habilidades: ' Javascript, HTML, CSS',
        versite: 'https://github.com/Wictor-Hugo-S/SiteDentista',
        repositorio: 'https://github.com/Wictor-Hugo-S/SiteDentista'
    },
    {
        id: 2,
        imagem: image[3],
        linkImage:'',
        texto: 'Previsão do Tempo',
        descricao: 'Website Fictício onde fazer o consumo de uma api e ao digitar sua cidade ele mostra a previsão do tempo atual e de até 3 dias.',
        habilidades: 'React, Javascript, HTML, SASS',
        versite: 'https://previsao-do-tempo-ebon.vercel.app/',
        repositorio: 'https://github.com/Wictor-Hugo-S/Projeto-PrevisaoDoTempo'
      
    },
    {
      

        id: 3,
        imagem: image[6],
        linkImage:'',
        texto: 'Dashbord',
        descricao: 'Website fictício que o usuário pode fazer um login e cadastro e ao logar vai poder alterar sua foto, seu cadastro.',
        habilidades: 'React, Javascript, HTML, CSS, Firebase',
        versite: 'https://dashbord-usuario.vercel.app/',
        repositorio: 'https://github.com/Wictor-Hugo-S/Projeto-Dashboard'
    },
    {
        id: 4,
        imagem: image[2],
        texto: 'Page Front-End',
        descricao: ' Website no qual recebi para fazer igual a um própotipo de um teste que a empresa pediu para replicar  ',
        habilidades: 'React, Javascript, HTML, SASS',
        versite: 'https://front-pag.vercel.app/',
        repositorio: 'https://github.com/Wictor-Hugo-S/front-pag'
    },
    {
        id: 5,
        imagem: image[5],
        texto: 'Clone Netflix',
        descricao: 'Website fictício de um clone da página da netflix, que tinha o objetivo de testar as habilidades em Css, e Html.',
        habilidades: ' Jquery, HTML, CSS',
        versite: 'https://github.com/Wictor-Hugo-S/ProjetoNetflix-DIO',
        repositorio: 'https://github.com/Wictor-Hugo-S/ProjetoNetflix-DIO'
    }
]

export default listaProjetos