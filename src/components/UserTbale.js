import React from 'react'
import { Button, Table, Divider } from 'antd';
const { Column } = Table;
const UserTable = props => (
  
  <Table dataSource={props.users}>
    <Column title="Name" dataIndex="name" key="name"/>
    <Column title="User Name"  dataIndex="username" key="username"/>
    <Column title="Action" key="action" render={(text, record)=>(
      <span>
        <Button type="primary"
                onClick={() => {
                  props.editUser(record)
                }}
                className="button muted-button"
              >
                Edit
              </Button>
              <Divider type="vertical" />
              <Button type="primary"
                onClick={() => props.deleteUser(record.key)}
                className="button muted-button"
              >
                Delete
              </Button>
      </span>
    )}/>
  </Table>
)

export default UserTable