import ButtonRipple from './components/ButtonRipple/ButtonRipple'
import TextBlockyReveal from './components/TextBlockyReveal/TextBlockyReveal'
import TextGradient from './components/TextGradient/TextGradient'
import TextHover from './components/TextHover/TextHover'
import TextMenuSlidingUnderline from './components/TextMenuSlidingUnderline/TextMenuSlidingUnderline'

function App() {
  return (
    <>
      <TextGradient />
      <div className='container'>
        <ButtonRipple />
        <TextBlockyReveal />
        <TextHover />
        <TextMenuSlidingUnderline />
      </div>
    </>
  )
}

export default App
