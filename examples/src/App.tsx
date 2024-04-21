import { useRef } from 'react'
import { DynamicDiv } from '../../dist/esm/index'
import './App.css'

function App() {
  const dragRef = useRef(null)

  return (
    <div>
      <DynamicDiv scalable shadow top={20} left={50} draggableRef={dragRef}>
        <div className='test'>
          <span ref={dragRef}>testing</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla accusantium aliquam recusandae alias nihil eius est quis quas at, vitae, odit dolor deleniti quaerat. Laboriosam ut repellendus expedita eaque aliquid.</p>

        </div>
      </DynamicDiv>
    </div>
  )
}

export default App
