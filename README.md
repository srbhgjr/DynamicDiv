Wrap any react component & make it movable

[Live Demo](https://codesandbox.io/p/sandbox/quizzical-aryabhata-ktjl9n?file=%2Fsrc%2Findex.js%3A9%2C1&layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clv9ktnvj00063d5v6lpqjyvu%2522%252C%2522sizes%2522%253A%255B100%252C0%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clv9ktnvi00023d5vk1navjx4%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clv9ktnvi00033d5v0mc2ueqf%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clv9ktnvi00053d5v8m7i5em5%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clv9ktnvi00023d5vk1navjx4%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clv9ktnvh00013d5vbtekipja%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fsrc%252Findex.js%2522%252C%2522state%2522%253A%2522IDLE%2522%252C%2522initialSelections%2522%253A%255B%257B%2522startLineNumber%2522%253A9%252C%2522startColumn%2522%253A1%252C%2522endLineNumber%2522%253A9%252C%2522endColumn%2522%253A1%257D%255D%257D%255D%252C%2522id%2522%253A%2522clv9ktnvi00023d5vk1navjx4%2522%252C%2522activeTabId%2522%253A%2522clv9ktnvh00013d5vbtekipja%2522%257D%252C%2522clv9ktnvi00053d5v8m7i5em5%2522%253A%257B%2522id%2522%253A%2522clv9ktnvi00053d5v8m7i5em5%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clv9ktnvi00043d5vww81es6m%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A0%252C%2522path%2522%253A%2522%252F%2522%257D%255D%252C%2522activeTabId%2522%253A%2522clv9ktnvi00043d5vww81es6m%2522%257D%252C%2522clv9ktnvi00033d5v0mc2ueqf%2522%253A%257B%2522tabs%2522%253A%255B%255D%252C%2522id%2522%253A%2522clv9ktnvi00033d5v0mc2ueqf%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Afalse%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D)

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
