import React, { useContext, useState } from 'react';
import { UsergroupAddOutlined, HomeOutlined, SettingOutlined, BookOutlined } from '@ant-design/icons';
import { Menu, Badge } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';

const Header = () => {
    const navigate = useNavigate();
    const { auth, setAuth } = useContext(AuthContext);
    const [current, setCurrent] = useState('home');
    
    // Giả sử bạn lưu số lượng bài học đã lưu
    const [savedLessonsCount, setSavedLessonsCount] = useState(3); // ví dụ 3 bài đã lưu

    const items = [
        {
            label: <Link to={"/"}>Home Page</Link>,
            key: 'home',
            icon: <HomeOutlined />,
        },
        ...(auth.isAuthenticated ? [{
            label: <Link to={"/user"}>Users</Link>,
            key: 'user',
            icon: <UsergroupAddOutlined />,
        }] : []),
        {
            label: (
                <Badge count={savedLessonsCount} overflowCount={99}>
                    <Link to="/saved-lessons" style={{ textDecoration: 'none', color: 'inherit' }}>
                        Bài học đã lưu
                    </Link>
                </Badge>
            ),
            key: 'saved',
            icon: <BookOutlined />,
            style: { marginLeft: 'auto' }, // đẩy sang phải
        },
        {
            label: `Welcome ${auth?.user?.email ?? ""}`,
            key: 'SubMenu',
            icon: <SettingOutlined />,
            children: auth.isAuthenticated
              ? [
                  {
                    label: <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>Hồ sơ</Link>,
                    key: 'profile',
                  },
                  {
                    label: <Link to="/orders" style={{ textDecoration: 'none', color: 'inherit' }}>Đơn hàng của tôi</Link>,
                    key: 'orders',
                  },
                  {
                    label: (
                      <span
                        onClick={() => {
                          localStorage.removeItem("access_token");
                          setCurrent("home");
                          setAuth({ isAuthenticated: false, user: { email: "", name: "" } });
                          navigate("/");
                        }}
                        style={{ cursor: 'pointer' }}
                      >
                        Đăng xuất
                      </span>
                    ),
                    key: 'logout',
                  },
                ]
              : [
                  { label: <Link to="/login">Đăng nhập</Link>, key: 'login' },
                ],
        },
    ];

    const onclick = (e) => setCurrent(e.key);

    return (
        <Menu 
            onClick={onclick} 
            selectedKeys={[current]} 
            mode="horizontal" 
            items={items} 
        />
    );
};

export default Header;
