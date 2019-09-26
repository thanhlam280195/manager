import {createContext} from 'react';
import {decorate,observable,computed} from 'mobx';
export class UserStore  {
    usersData = [
        { key: 1, name: 'Lam', username: 'lam1' },
        { key: 2, name: 'An', username: 'an1' },
        { key: 3, name: 'Tot', username: 'tot1' },
    ]
    currentUser = {
        key: null, 
        name: '', 
        username: ''
    }
    editStatus = false
    initialFormState = { key: null, name: '', username: '' }

    get dataTable() {
        return this.usersData
    }
    addUser = user => {
		user.key = this.usersData.length + 1
        this.usersData = [...this.usersData,user]
	}

	 deleteUser = key => {
        this.usersData = this.usersData.filter(user => user.key !== key)
	}

	 updateUser = (key, updatedUser) => {
        this.editStatus = false;
		this.usersData = this.usersData.map(user => (user.key === key ? updatedUser : user))
	}

	editUser = user => {
		this.editStatus = true;

		this.currentUser = { 
            key: user.key, 
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