// Supports weights 200-800
import '@fontsource-variable/manrope';

function App() {

  return (
    <main className="h-screen bg-darkBlue flex justify-center items-center">
      <article className='w-[343px] h-[315px] bg-darkGrayishBlue flex flex-col justify-center items-center rounded-lg p-6 relative'>
        <h1 className='uppercase text-neonGreen'>advice #117</h1>
        <span>" It is easy to sit up and take notice, what's difficult is getting up and taking action "</span>
        <img className='w-full' src="src/assets/pattern-divider-mobile.svg" srcSet="src/assets/pattern-divider-desktop.svg" />
        <button className='bg-neonGreen w-16 h-16 flex justify-center items-center rounded-full absolute -bottom-8'>
          <img src="src/assets/icon-dice.svg" alt="dice icon" />
        </button>
      </article>
    </main>
  )
}

export default App
