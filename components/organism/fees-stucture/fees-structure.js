import style from './fees-structure.module.css'
import Image from 'next/image'
import zero from '../../../public/svgs/zero.svg'


export default function FeesStructure () {

    return(
        <div  className={`sectionPadding ${style.wrapper}`}>
            <div className={style.leftSec}>
                <p className={style.feesInfo}>
                    सभी को  को यह समझना चाहिए कि आपको इसके लिए भुगतान नहीं करना है।
                    जो कुछ मैं तुमसे कहती हूं, या मेरे व्याख्यान के लिए, या कुछ भी, या तुम्हारी प्राप्ति के लिए आपको भुगतान नहीं करना है, बिल्कुल नहीं ।
                    आप इसके लिए भुगतान नहीं कर सकते। यह इतना अमूल्य है। ... यह पूरी तरह से भरा हुआ है। 
                    यह बिल्कुल स्वतंत्र रूप से आपके पास आ रहा है। इसलिए आप अपने आत्म-साक्षात्कार के लिए भुगतान नहीं कर सकते। यह प्यार और प्यार है, आप खरीद नहीं सकते। 
                </p>
                <b className={style.Spesker}>- परम पूज्य श्री माताजी निर्मला देवी, लंदन, 1982</b>

            </div>
            <div className= {style.rightSec}>
                <Image src={zero} layout='fill' alt = 'zero' objectFit='fill'/>
            </div>
        </div>
    )
}