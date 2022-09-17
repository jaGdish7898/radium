import cardStyle from './guru-card.module.css'
import Image from 'next/image'
import shinchan from '../../../public/mataji-images/shinchan.png'
export default function GuruCard () {

    return(
        <div className={cardStyle.cardWrapper}>
            <div className={cardStyle.imageWrapper}>
                <Image 
                    src={shinchan}
                    layout='fill'
                    objectFit='fill'
                    className={cardStyle.image}
                    alt = 'guru'
                />
                
            </div>
            <div className={cardStyle.infoContainer}>
                <h5 className={cardStyle.name}>Jagdish Shinde</h5>
                Id anim aliqua aliqua qui nisi incididunt aliquip laborum do est occaecat deserunt sint.
                Id anim aliqua aliqua qui nisi incididunt aliquip laborum do est occaecat deserunt sint.
                Id anim aliqua aliqua qui nisi incididunt aliquip laborum do est occaecat deserunt sint.
            </div>
            

        </div>
    )
}