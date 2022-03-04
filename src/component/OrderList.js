import React from 'react';
import '../style/orderList.css';
import {
  Table,
} from 'antd';

import {
  EditOutlined,
  DeleteOutlined
} from '@ant-design/icons';

import {connect} from 'react-redux';


import orderHooks from '../hooks/orderHooks'

const OrderList = ({props}) => {
  const {
    orderList,
  } = orderHooks;
  console.log('???', props);
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
      <Table
        columns={orderColums}
        dataSource={orderList}
        size="middle" 
      />
    </React.Fragment>
  )
}
export default connect()(OrderList);