import { useRef } from 'react'
import { DynamicDiv } from '../../dist/esm/index'
import './App.css'

function App() {
  const dragRef = useRef(null)

  return (
    <div>
      <DynamicDiv scalable shadow top={20} left={50} draggableRef={dragRef}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '15em',
            padding: '1em',
            borderRadius: '10px',
            boxShadow: '0px 5px 20px -5px rgba(0, 0, 0, 0.25)',
          }}
        >
          <h3 ref={dragRef}>drag this !!!</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla accusantium aliquam recusandae alias nihil
            eius est quis quas at, vitae, odit dolor deleniti quaerat. Laboriosam ut repellendus expedita eaque aliquid.
          </p>
        </div>
      </DynamicDiv>
    </div>
  )
}

export default App
