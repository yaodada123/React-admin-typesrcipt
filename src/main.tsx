import React from 'react'
import ReactDOM from 'react-dom/client'
// 初始化样式配置
import "reset-css"
// 全局样式配置
import "src/assets/styles/global.scss"
// 组件样式
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import App from './App'
import { BrowserRouter } from 'react-router-dom';



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
