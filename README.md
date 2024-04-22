Wrap any react component & make it movable

[Live Demo](https://codesandbox.io/p/devbox/dynamic-div-demo-425rqn?embed=1&file=%2Fsrc%2FApp.jsx&layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clv9p9pzs00063u6h9kow521w%2522%252C%2522sizes%2522%253A%255B100%252C0%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clv9p9pzs00023u6h5jeguwfe%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clv9p9pzs00043u6hr1y2lfqs%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clv9p9pzs00053u6h76ox7uxz%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clv9p9pzs00023u6h5jeguwfe%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clv9p9pzs00013u6hphuufif1%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fpackage.json%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%252C%257B%2522id%2522%253A%2522clv9q1t7k00023u6hz3g2wkft%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522initialSelections%2522%253A%255B%257B%2522startLineNumber%2522%253A1%252C%2522startColumn%2522%253A1%252C%2522endLineNumber%2522%253A83%252C%2522endColumn%2522%253A1%257D%255D%252C%2522filepath%2522%253A%2522%252Fsrc%252FApp.jsx%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%252C%2522id%2522%253A%2522clv9p9pzs00023u6h5jeguwfe%2522%252C%2522activeTabId%2522%253A%2522clv9q1t7k00023u6hz3g2wkft%2522%257D%252C%2522clv9p9pzs00053u6h76ox7uxz%2522%253A%257B%2522id%2522%253A%2522clv9p9pzs00053u6h76ox7uxz%2522%252C%2522activeTabId%2522%253A%2522clv9pa37y006m3u6h73yuitt4%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522TASK_PORT%2522%252C%2522taskId%2522%253A%2522Development%2522%252C%2522port%2522%253A5173%252C%2522id%2522%253A%2522clv9pa37y006m3u6h73yuitt4%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522path%2522%253A%2522%252F%2522%257D%255D%257D%252C%2522clv9p9pzs00043u6hr1y2lfqs%2522%253A%257B%2522id%2522%253A%2522clv9p9pzs00043u6hr1y2lfqs%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clv9p9pzs00033u6htoz29vci%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TERMINAL%2522%252C%2522shellId%2522%253A%2522clv9p9r7j000dd9f8budlgwzj%2522%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522Development%2522%252C%2522id%2522%253A%2522clv9pc59a00eh3u6hzhe6vsna%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%252C%2522activeTabId%2522%253A%2522clv9pc59a00eh3u6hzhe6vsna%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Afalse%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D)


### Installation

`npm install dynamic-div`


### Imports

`import { DynamicDiv } from 'dynamic-div'`


### Usage

Wrap your component with the DynamicDiv component, and configure options.

```javascript
function DraggableDiv() {
  return (
    <div>
      <DynamicDiv scalable top={20} left={50}>
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
          <h3>testing</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla accusantium aliquam recusandae alias nihil
            eius est quis quas at, vitae, odit dolor deleniti quaerat. Laboriosam ut repellendus expedita eaque aliquid.
          </p>
        </div>
      </DynamicDiv>
    </div>
  )
}
```

### Configuration options

| Property     | Description                                                              | Type                             |
| ------------ | ------------------------------------------------------------------------ | -------------------------------- |
| shadow       | specifies whether to add shadow or not                                   | boolean                          |
| scalable     | specifies whether component will scale when<br />drag target is hovered | boolean                          |
| perspective  | adds perspective to the component, when drag<br />target is hovered     | boolean                          |
| top          | specifies initial top position                                           | number                           |
| left         | specifies initial left position                                          | number                           |
| draggableRef | react ref object                                                         | React.MutableRefObject `<any>` |

### Specifying a custom DOM Target

```javascript
function CustomDomTarget() {
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
```
