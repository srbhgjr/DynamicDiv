import React, { useRef } from 'react'
import ReactDOM from 'react-dom/client'
import { DynamicDiv } from 'dynamic-div'
import { Radio } from "antd";

const options = [
  {
    label: "No target specified",
    value: "no-target",
  },
  {
    label: "Custom DOM target",
    value: "custom-target",
  },
];

const App = () => {
  const dragRef = useRef(null);
  const [selectedTarget, setSelectedTarget] = React.useState("no-target");

  const onChange = ({ target: { value } }: {target: any}) => {
    setSelectedTarget(value);
  };

  return (
    <div>
      <Radio.Group
        options={options}
        onChange={onChange}
        value={selectedTarget}
        optionType="button"
      />
      {selectedTarget === "no-target" && (
        <DynamicDiv scalable shadow top={100} left={50}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "15em",
              padding: "1em",
              borderRadius: "10px",
              boxShadow: "0px 5px 20px -5px rgba(0, 0, 0, 0.25)",
            }}
          >
            <h3>drag this !!!</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              accusantium aliquam recusandae alias nihil eius est quis quas at,
              vitae, odit dolor deleniti quaerat. Laboriosam ut repellendus
              expedita eaque aliquid.
            </p>
          </div>
        </DynamicDiv>
      )}
      {selectedTarget === "custom-target" && (
        <DynamicDiv scalable shadow top={100} left={50} draggableRef={dragRef}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "15em",
              padding: "1em",
              borderRadius: "10px",
              boxShadow: "0px 5px 20px -5px rgba(0, 0, 0, 0.25)",
            }}
          >
            <h3 ref={dragRef}>drag this !!!</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              accusantium aliquam recusandae alias nihil eius est quis quas at,
              vitae, odit dolor deleniti quaerat. Laboriosam ut repellendus
              expedita eaque aliquid.
            </p>
          </div>
        </DynamicDiv>
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
)
