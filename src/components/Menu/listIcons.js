import { AiFillLinkedin, AiFillGithub, AiOutlineWhatsApp } from 'react-icons/ai'

const handleWhats = () => {

    const message = 'Olá! Tudo bem? vim do seu portifolio e gostaria de falar com você! '
    const phoneNumber = '5581997647606'
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, '_blank');

}

const handleIcons = (url) => {
   
        window.open(url, '_blank');
}

const listIcon = [
    {
        icon: <AiFillLinkedin onClick={() => handleIcons('https://www.linkedin.com/in/wictor-hugo-39a55218b/')} />,
       
    },
    {
        icon: <AiFillGithub onClick={() => handleIcons('https://github.com/Wictor-Hugo-S?tab=repositories')} />,
       

    }, {
        icon: <AiOutlineWhatsApp onClick={handleWhats} />,



    }




]

export default listIcon