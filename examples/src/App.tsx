import { DynamicDiv } from '../../dist/esm/index'
import './App.css'

function App() {

  return (
    <div>
      <DynamicDiv scalable top={window.innerHeight - 20} left={window.innerWidth - 50}>
        <div className='test'>
          <span>testing</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla accusantium aliquam recusandae alias nihil eius est quis quas at, vitae, odit dolor deleniti quaerat. Laboriosam ut repellendus expedita eaque aliquid.</p>

        </div>
      </DynamicDiv>
    </div>
  )
}

export default App
