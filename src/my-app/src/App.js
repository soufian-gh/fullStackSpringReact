import { getAllStudents } from './client';
import { useState, useEffect } from "react";
//import type { SizeType } from 'antd/es/config-provider/SizeContext';
import './App.css';
import {
    PlusSquareOutlined,
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
    LoadingOutlined, DownloadOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, Table, Spin, Empty, Button } from 'antd';


const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const columns = [
    {   title: 'Id',
        dataIndex: 'id',
        key: 'id',}, {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',}, {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',}, {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender',},];

const items = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
];

//spin loader
const antIcon = (
    <LoadingOutlined
        style={{
            fontSize: 24,
        }}
        spin
    />
);

function App() {
    //students
    const [students, setStudents] = useState([]);
    //collapsed
    const [collapsed, setCollapsed] = useState(false);
    //for loading spin
    const [fetching, setFetching] = useState(true);
    //fetch students
    const fetchStudents = () =>
        getAllStudents()
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setStudents(data);
                setFetching(false);
    })

    useEffect(() => {
        fetchStudents();

    },[]);

    const renderStudents = () => {
        if(fetching){
            return <Spin indicator={antIcon} />;
        }
        if (students.length <= 0){
            return <Empty>no data</Empty>
        }
        return <Table
            dataSource={students}
            columns={columns}
            bordered
            title={() => <Button type="primary" shape="round" icon={<PlusSquareOutlined />} size="small" >Add Student</Button>}

            rowKey={(student) => student.id}
        />;

    }

    return <Layout style={{minHeight: '100vh',}}>
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
        <Layout className="site-layout">
            <Header
                className="site-layout-background"
                style={{
                    padding: 0,
                }}
            />
            <Content
                style={{
                    margin: '0 16px',
                }}
            >
                <Breadcrumb
                    style={{
                        margin: '16px 0',
                    }}
                >
                    <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>Bill</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-background" style={{padding: 24, minHeight: 360,}}>{renderStudents()}</div>
            </Content>
            <Footer style={{textAlign: 'center',}}>By soufiane</Footer>
        </Layout>
    </Layout>

    /////////////
}

export default App;
