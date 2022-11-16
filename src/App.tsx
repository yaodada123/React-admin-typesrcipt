import { useEffect, useState } from 'react'
import { Button, message } from 'antd';
import { StepBackwardOutlined, StarFilled, StarTwoTone } from '@ant-design/icons';
import { useRoutes, Link, useNavigate, useLocation } from 'react-router-dom';
import routes from './router';


const Page: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    message.warning("你已登录");
    navigate("/home");
  });

  return <></>;
};

const Login: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    message.warning("请先登录再访问");
    navigate("/login");
  });

  return <></>;
};

// 前置路由守卫
const BeforeRouterEnter: React.FC = () => {
  const outlet = useRoutes(routes);
  const location = useLocation();
  const token = localStorage.getItem("token");
  if (location.pathname === "/login" && token) {
    return <Page />;
  }
  if (location.pathname !== "/login" && !token) {
    return <Login />;
  }
  return <>{outlet}</>;
};



function App() {
  const [count, setCount] = useState(0);
  const outlet = useRoutes(routes);
  return (
    <div className="App">
      <BeforeRouterEnter />
    </div>
  )
}

export default App
