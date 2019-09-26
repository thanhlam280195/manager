import React, { Fragment , useContext} from 'react';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import UserTable from './components/UserTbale';
import {observer} from 'mobx-react-lite';
import UserStore from './store/UserStore'
import { Row, Col } from 'antd';
const App = observer(() => {
	const store = useContext(UserStore)
	// const usersData = [
	// 	{ id: 1, name: 'Lam', username: 'lam1' },
	// 	{ id: 2, name: 'An', username: 'an1' },
	// 	{ id: 3, name: 'Tot', username: 'tot1' },
	// ]

	// const initialFormState = { id: null, name: '', username: '' }


	// const [ users, setUsers ] = useState(usersData)
	// const [ currentUser, setCurrentUser ] = useState(initialFormState)
	// const [ edit, setEdit ] = useState(false)


	// const addUser = user => {
	// 	user.id = users.length + 1
	// 	setUsers([ ...users, user ])
	// }

	// const deleteUser = id => {
	// 	setEdit(false)

	// 	setUsers(users.filter(user => user.id !== id))
	// }

	// const updateUser = (id, updatedUser) => {
	// 	setEdit(false)

	// 	setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	// }

	// const editUser = user => {
	// 	setEdit(true)

	// 	setCurrentUser({ id: user.id, name: user.name, username: user.username })
	// }
	const {setStatusEdit, updateUser, addUser,  editUser, deleteUser} = store;
	const style= {
		padding : "100px 0px 100px 0px"
	}
	return (

		<div style={style}>
			<Row gutter={16}>
				<Col md={{span:10, offset:4}} sx={{span: 20 , offset:2}}>
					{store.editStatus ? (<Fragment>
                        <h2>Edit user</h2>
                        <EditUser 	setEdit={setStatusEdit}
                                    currentUser={store.currentUser}
                                    updateUser={updateUser}
                         />
                      </Fragment> ) : 
                    (
                        <Fragment>
                          <h2>Add user</h2>
                          <AddUser addUser={addUser} />
                        </Fragment>
					)}
				</Col>
				<Col md={{span:6}} sx={{span:20}} >
					<h2>View users</h2>
					<UserTable users={store.dataTable} editUser={editUser} deleteUser={deleteUser} />
				</Col>
			</Row>
		</div>
	)
})

export default App