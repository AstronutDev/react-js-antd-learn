import React from 'react'
import { Carousel, Button, Image  } from 'antd';
import cat from '../../imgs/cat.png'
import man from '../../imgs/man.png'
import sand from '../../imgs/sand.jpg'
import applejuice from '../../imgs/applejuice.jpg'
import pies from '../../imgs/pies.jpg'
import cotta from '../../imgs/cotta.jpg'

const contentStyle = {
    height: '1000px',
    color: '#fff',
    lineHeight: '100px',
    textAlign: 'center',
    backgroundImage: `url(/img/bg.jpg)`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};

const imageStyle = {
    width: '100%',
    height: 500,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
}

const items = [
    {
        key:'1',
        title:"Australian Beef Pies ",
        content:"พายเนื้อ Australiaชั้นดี กรอบนอกนุ่มในด้วยเนื้อแบบจุกๆเน้นๆ ผัดเข้ากับเห็ดแชมปิยอง คลุกเคล้ากันด้วยซุปเนื้อ และไวน์แดง ",
        img: applejuice
    },
    {
        key:'2',
        title:"Apple Mojito Soda ",
        content:"ที่หอมหวานจากแอปเปิ้ลผสานโมฮิโต้มิ้นท์เย็นๆสดชื่น  เติมความเปรี้ยวหอมจากน้ำเลมอนสด เติมความสดชื่นให้ร่างกายในวันที่เหนื่อยล้า",
        img: pies
    },
    {
        key:'3',
        title:"Panna Cotta ",
        content:"พันนาคอตต้าสูตรของทางร้าน มีเสริฟแบบ Take away แล้ว โดยเราปรับสูตรให้เสริฟถึงบ้านแบบเนื้อหนึบหนับละมุนเหมือนเดิมแน่นอน มีเสริฟทั้งแบบ",
        img: cotta
    },
    
]
  

function AppHero() {
    return (
        <div className="heroblock">
            <Carousel>
                {items.map(i => {
                    return (
                        <div className="container-fluid" > 
                            <div className="content" style={contentStyle}>
                                <h2 style={{color: '#fff'}}>{i.title}</h2>
                                <Image src={i.img} style={imageStyle}/>
                                <p>{i.content}</p>
                                <div className="btnHolder">
                                    <Button type="primary" size="large">Learn more</Button>
                                    <Button size="large" style={{margin: 10}}>Watch demo</Button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Carousel>,
        </div>
    )
}

export default AppHero