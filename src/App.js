
import 'antd/dist/antd.css'
import { Layout, Image} from 'antd';

import AppHeader from './components/common/header';
import AppHome from './components/views/home';

// import Background from '../public/sand.jpg'

const { Header, Content } = Layout;

function App() {
  return (
    <div>
    
      {/* <Image src={Background} /> */}
      <Layout className="mainLayout">
        <Header>
          <AppHeader/>
        </Header>
        <Content>
        <AppHome/>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
