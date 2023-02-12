import { useState, useEffect } from 'react';
import icon from '../assets/comx-icon.png';
import blackIcon from '../assets/comx-icon-black.png';

export default function Nav() {

const [scroll, setScroll] = useState(false);
useEffect(() => {
window.addEventListener("scroll", () => {
    setScroll(window.scrollY);
});
}, []);
return (
<nav className={ scroll ? "sticky transition" : "transition"}>
    <ul>
        <li> Students </li>
        <li> Teams </li>
        <li> Awards </li>
        <img src={ scroll ? blackIcon : icon } className='transition' />
        <li> COMX Live </li>
        <li> Gallery </li>
        <li> Login </li>
    </ul>
</nav>
    )
}