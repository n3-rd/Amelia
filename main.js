import './style.css'
import fontFaceObserver from 'fontfaceobserver'
import Rellax from 'rellax';
import Lenis from '@studio-freight/lenis'

const parralax = ()=>{
    const rellax = new Rellax('.rellax');
}
const smoothScroll = ()=>{

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // https://easings.net
      direction: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
    }



document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app')
const satoshiLight = new fontFaceObserver('Satoshi-Light');
const satoshiRegular = new fontFaceObserver('Satoshi-Regular');
const satoshiBold = new fontFaceObserver('Satoshi-Bold');
const satoshiBlack = new fontFaceObserver('Satoshi-Black');

Promise.all([
    satoshiLight.load(),
    satoshiRegular.load(),
    satoshiBold.load(),
    satoshiBlack.load()
]).then(() => {
app.classList.remove('hidden');
parralax();
smoothScroll();
});
})