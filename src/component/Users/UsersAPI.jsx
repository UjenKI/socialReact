import React, { Component } from 'react';

// import * as axios from 'axios'
import User from './User';
import { getUsers } from '../../redux/usersReducer';
// import { usersAPI } from '../../api/api';


class UsersAPI extends Component {
    componentDidMount(){
        // this.props.setToggleFetching(true)
        // usersAPI.getUsers(this.props.usersPage.currentPage, this.props.usersPage.pageSize).then((data) => {
        //         this.props.setUsers(data.items);
        //         this.props.setTotalCount(data.totalCount);
        //         this.props.setToggleFetching(false);
        //     });
        this.props.getUsers(this.props.usersPage.currentPage, this.props.usersPage.pageSize)
    }

    pageChanged = (num) => {
        this.props.getUsers(num, this.props.usersPage.pageSize)
        // this.props.setCurrentPage(num)
        // this.props.setToggleFetching(true)
        // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${num}&count=${this.props.usersPage.pageSize}`, {withCredentials: true})
        //     .then((res) => {
        //         this.props.setUsers(res.data.items)
        //         this.props.setToggleFetching(false)
        //     })
    }

    render(){
        return (
            <User {...this.props} changePage={this.pageChanged}/>
        )
    }
}

export default UsersAPI;