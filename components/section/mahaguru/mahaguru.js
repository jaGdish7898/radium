import sectionStyle from './mahaguru.module.css'
import Scroller from '../../molecules/scroller/scroller'
import { GuruCard } from '../../atoms/atom-exports'



export default function MahaGuru (){

    return(
        <section className={`sectionPadding ${sectionStyle.wrapper}`}>
            <Scroller 
                areNavArrowsVisible = {true}
            >
            {[1,1,1,1,1,1,1].map((ele,index)=><GuruCard key={index}/>)}
            </Scroller>
            
        </section>
        
    )
}