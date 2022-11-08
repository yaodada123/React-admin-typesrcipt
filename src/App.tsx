import { useState } from 'react'
import { Button } from 'antd';
import { StepBackwardOutlined, StarFilled, StarTwoTone } from '@ant-design/icons';
import { useRoutes, Link } from 'react-router-dom';
import routes from './router';



function App() {
  const [count, setCount] = useState(0)
  const outlet = useRoutes(routes)
  return (
    <div className="App">
      <Link to="/home" >home</Link>
      <br />
      <Link to="/about" >about</Link>
      {outlet}
    </div>
  )
}

export default App
