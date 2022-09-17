import sectionStyle from './mataji-section.module.css'
import { NavBar } from '../../atoms'
import { Login } from '../../molecules/molecule-export'
import { SideBar } from '../../organism/organism-export'
import { useState } from 'react'
import mataji from '../../../public/mataji-images/mataji.png'
import Image from 'next/image'
import shinchan from '../../../public/mataji-images/shinchan.png'
import Player from '../../molecules/react-player/react-player'



export default function MatajiSection () {

    const [isDrawerOpen , setIsDrawerOpen] = useState(false)
    const [isShowingLoginCard , setIsShowingLoginCard] = useState(false)


    const handleOpenDrawer = ( )=>{
        setIsDrawerOpen(!isDrawerOpen)
    }
    const handleOpenLoginCard = ()=>{
        setIsShowingLoginCard(!isShowingLoginCard)
    }


    return(
        <section className={`sectionPadding ${sectionStyle.wrapper}`}>
            <div className={sectionStyle.container}>
                <div className={sectionStyle.imgWrapper}>
                    <Image src={mataji} alt="mataji" layout='fill' objectFit='fill'/>
                </div>
                <div className={sectionStyle.infoWrapper}>
                सहज योग का अर्थ है सह आपके साथ और ज जन्मा हुआ योग से तात्पर्य मिलन या जुड़ना अत: वह तरीका जिससे मनुष्य का सम्बन्ध (योग) परमात्मा से हो सकता है !
                {/* Nisi minim aliquip elit cillum irure. Laboris laborum pariatur consectetur et sit minim officia anim minim nisi nisi reprehenderit tempor voluptate. Laboris aliqua excepteur excepteur in. Deserunt consectetur dolore deserunt minim qui nisi voluptate dolor incididunt aute dolor officia. Labore cillum aute ex dolore sint laborum est laborum proident eu irure veniam sit. Enim dolore sunt incididunt ad. Deserunt sunt ipsum ullamco est cupidatat officia consectetur consequat enim quis occaecat. */}
                                
                </div>
                
            </div>
            <NavBar 
                handleOpenDrawer = {handleOpenDrawer}
                handleOpenLoginCard = {handleOpenLoginCard}
            />
            <SideBar 
                isDrawerOpen = {isDrawerOpen}
                handleOpenDrawer = {handleOpenDrawer}
            />
            <Login 
                handleOpenLoginCard = {handleOpenLoginCard}
                isShowingLoginCard = {isShowingLoginCard}
            />
            {/* <Player videoUrl='https://youtu.be/g8psACkbIFI'/> */}

            
        </section>
        
    )
}