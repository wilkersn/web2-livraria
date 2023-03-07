import './index.css';

import iconFb from '../../assets/fb.png';
import iconTw from '../../assets/tw.png';
import iconIg from '../../assets/ig.png'

export function Footer() {
  return (
    <footer className="footer">
      <div className='icons'>
        <div><img src={iconFb} alt="icone Facebook" /></div>
        <div><img src={iconTw} alt="icone Twitter" /></div>
        <div><img src={iconIg} alt="icone Instagram" /></div>
      </div>
      <div className='autor'>
        <h4>Criado por Antonio Wilker</h4>
      </div>
    </footer>

  )
}
