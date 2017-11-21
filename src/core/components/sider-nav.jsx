import React from "react"
import PropTypes from "prop-types"
import { Layout, Menu, Breadcrumb, Icon, Button, Input, AutoComplete } from 'antd'
const { Header, Content, Footer, Sider } = Layout
const SubMenu = Menu.SubMenu
const Option = AutoComplete.Option

function onSelect(value) {
  console.log('onSelect', value)
}
export default class SiderNav extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
      dataSource: []
    }
  }
  handleSearch = (value) => {
    this.setState({
      dataSource: !value ? [] : [
        value,
        value + value,
        value + value + value,
      ],
    })
  }
  onCollapse = (collapsed) => {
    console.log(collapsed)
    this.setState({ collapsed })
  }
  render() {
    const { dataSource } = this.state
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />


          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <div className="global-search-wrapper">
              <AutoComplete
                dataSource={dataSource}
                style={{ width: 200 }}
                onSelect={onSelect}
                onSearch={this.handleSearch}
                placeholder="项目名称"
              />
            </div>
            <Menu.Item key="1" className="firstMenu">
              <Icon type="user" />
              <span>项目介绍</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="cloud" />
              <span>文档中心</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="file" />
              <span>测试用例</span>
            </Menu.Item>
          </Menu>
        </Sider>
        {/* <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2016 Created by Ant UED
          </Footer>
        </Layout> */}
      </Layout>
    )
  }
}