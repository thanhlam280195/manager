import React, { useState, useEffect } from 'react'
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from 'antd';
const EditUser = props => {
  const [ user, setUser ] = useState(props.currentUser)

  useEffect( () => {
      setUser(props.currentUser)
    },[ props ])

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <Form onSubmit={event => {  
                                event.preventDefault()
                                props.updateUser(user.key, user)
                            }}
    >
      <Form.Item>
        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
				placeholder="name"type="text" name="name" value={user.name} onChange={handleInputChange} />
      </Form.Item>
      <Form.Item>
        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username" type="text" name="username" value={user.username} onChange={handleInputChange} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Update user</Button>
        &nbsp;
        <Button  type="primary" onClick={() => props.setEdit(false)} className="button muted-button">
          Cancel
        </Button>
      </Form.Item>
      
    </Form>
  )
}

export default EditUser