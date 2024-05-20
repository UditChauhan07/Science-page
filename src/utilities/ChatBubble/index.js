import React from 'react'
import Script from 'next/script'
import styles from './styles.module.css'

const ChatBubble = () =>{

return(
  <div className={styles.Chatbubble} id='pooi'><Script id="hs-script-loader"
  src="//js-eu1.hs-scripts.com/19647191.js"
  strategy={'lazyOnload'}/></div>
)

}
export default ChatBubble
