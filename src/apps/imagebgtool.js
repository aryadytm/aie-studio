import IframeResizer from "iframe-resizer-react"

export default function ImageBGTool() {
  return (
    <>
      <IframeResizer
        log
        inPageLinks
        src='https://hf.space/streamlitiframe/aryadytm/ibgr/+'
        heightCalculationMethod="lowestElement"
        scrolling="no"
        style={{width: '1px', minWidth: '100%', minHeight: '100vh', flexGrow: 1, overflow: "hidden"}}
      />
    </>
  )
}