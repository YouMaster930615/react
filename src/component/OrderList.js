import React from 'react';
import '../style/orderList.css';
import {
  Table,
  Button
} from 'antd';
import {
  EditOutlined,
  DeleteOutlined
} from '@ant-design/icons';
// hooks
import useOrderHooks from '../hooks/orderHooks'

import {connect} from 'react-redux';



const OrderList = () => {
  const {
    list,
    loading,
    getOrder
  } = useOrderHooks();
  const orderColums = [
    {
      title: '姓名',
      dataIndex: 'userName',
      key: 'userName'
    },
    {
      title: '武器',
      dataIndex: 'arms',
      key: 'arms'
    },
    {
      title: '位置',
      dataIndex: 'userArea',
      key: 'userArea'
    },
    {
      title: '座右铭',
      dataIndex: 'sentences',
      key: 'sentences'
    },
    {
      title: '操作',
      key: 'operate',
      render: () => (
        <>
          <EditOutlined style={{cursor: "pointer"}}/>
          <DeleteOutlined style={{cursor: "pointer", margin: "0 14px"}}/>
        </>
      )
    },
  ]

  return (
    <React.Fragment>
      <Button type="primary" onClick={getOrder}>
        获取数据
      </Button>
      <Table
        columns={orderColums}
        dataSource={list}
        loading={loading}
        size="middle" 
      />
    </React.Fragment>
  )
}


export default connect()(OrderList);