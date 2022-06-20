import { useState } from "react"

function App() {
  const [count,setCount] = useState(0)

  return (
    <div className="App">
      <h1>layout</h1>
      <div>内容区</div>
    </div>
  )
}

export default App
