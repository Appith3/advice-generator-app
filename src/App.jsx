// Supports weights 200-800
import '@fontsource-variable/manrope';
import { useState, useEffect } from 'react';

function App() {

  const [advice, setAdvice] = useState({
    'adviceID': null,
    'advice': null
  });

  const getAdvice = async () => {
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => {
      let { id, advice } = data.slip;
      setAdvice({
        adviceID: id,
        advice: advice
      });
    })
  }

  useEffect(() => {
    getAdvice()
  }, []);

  return (
    <main className="h-screen bg-darkBlue flex justify-center items-center">
      <article className='w-[343px] desktop:w-[540px] h-[315px] desktop:h-[332px] bg-darkGrayishBlue flex flex-col justify-center items-center rounded-lg p-6 desktop:p-12 relative gap-6'>
        <h1 className='uppercase text-neonGreen font-extrabold tracking-[.24em] desktop:tracking-[.32em] text-xs desktop:text-[13px]'>advice #{advice.adviceID}</h1>
        <span className='text-lightCyan font-extrabold leading-8 desktop:leading-10 text-[24px] desktop:text-[27px] text-center'>“{advice.advice}”</span>
        <img className='w-full' src="src/assets/pattern-divider-mobile.svg" srcSet="src/assets/pattern-divider-desktop.svg" />
        <button className='bg-neonGreen w-16 h-16 flex justify-center items-center rounded-full absolute -bottom-8 hover:drop-shadow-[0_0_32px_#52FFA8]' onClick={getAdvice}>
          <img src="src/assets/icon-dice.svg" alt="dice icon" />
        </button>
      </article>
    </main>
  )
}

export default App