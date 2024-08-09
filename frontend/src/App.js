import React from 'react';
import { Layout, Typography } from 'antd';
import 'antd/dist/antd.css';

const { Header, Content } = Layout;
const { Title } = Typography;

function App() {
  return (
    <Layout>
      <Header>
        <Title level={3} style={{ color: 'white' }}>WhatsApp Clone</Title>
      </Header>
      <Content style={{ padding: '50px' }}>
        <Title level={2}>Welcome to WhatsApp Clone</Title>
      </Content>
    </Layout>
  );
}

export default App;