import React from 'react'
import {Menu } from 'antd'

function AppHeader() {
    return(
        <div className="container-fluid"> 
            <div className="header">
                <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    {new Array(5).fill(null).map((_, index) => {
                        const key = index + 1;
                        return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
                    })}
                    </Menu>
            </div> 
        </div>
    )
}

export default AppHeader