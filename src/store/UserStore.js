import {createContext} from 'react';
import {decorate,observable,computed} from 'mobx';
export class UserStore  {
    usersData = [
        { id: 1, name: 'Lam', username: 'lam1' },
        { id: 2, name: 'An', username: 'an1' },
        { id: 3, name: 'Tot', username: 'tot1' },
    ]
    currentUser = {
        id: null, 
        name: '', 
        username: ''
    }
    editStatus = false
    initialFormState = { id: null, name: '', username: '' }

    get dataTable() {
        return this.usersData
    }
    addUser = user => {
		user.id = this.usersData.length + 1
        this.usersData = [...this.usersData,user]
	}

	 deleteUser = id => {
        this.usersData = this.usersData.filter(user => user.id !== id)
	}

	 updateUser = (id, updatedUser) => {
        this.editStatus = false;
		this.usersData = this.usersData.map(user => (user.id === id ? updatedUser : user))
	}

	editUser = user => {
		this.editStatus = true;

		this.currentUser = { 
            id: user.id, 
            name: user.name, 
            username: user.username 
        }
    }
    setStatusEdit = value =>{
        this.editStatus = value;
    }
    
}
decorate(UserStore, {
    usersData: observable,
    currentUser:observable,
    editStatus:observable,
    initialFormState:observable,
    dataTable: computed
})

export default createContext(new UserStore())