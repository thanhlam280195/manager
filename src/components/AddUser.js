import React, { useState } from 'react'
import { Form, Icon, Input, Button } from 'antd';
const AddUser = props => {
	const initialFormState = { id: null, name: '', username: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<Form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.username) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<Form.Item >
				<Input 
				prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
				placeholder="name" type="text" name="name" value={user.name} onChange={handleInputChange} />
			</Form.Item>
			<Form.Item>
				<Input  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username" type="text" name="username" value={user.username} onChange={handleInputChange} />
			</Form.Item>
			<Form.Item>
				<Button type="primary" htmlType="submit">Add new user</Button>
			</Form.Item>
		</Form>
	)
}

export default AddUser