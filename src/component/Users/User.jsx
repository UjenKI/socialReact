import React from 'react';
import * as axios from 'axios';

import Loader from '../Loader';
import avaImg from '../../assets/img/Tony.png';
import style from './Users.module.css'
import { NavLink } from 'react-router-dom';
import { usersAPI } from '../../api/api';
import Paginator from '../Paginator/Paginator';

let User = (props) => {
    const state = props.usersPage;

    const list = state.users.map((user) => {
        return (
            <li key={user.id} className={style.userListItem}>
                <div className={style.userItem}>
                    <NavLink to={`/profile/${user.id}`}>
                        <div className={style.avatar}>
                            <img src={user.photos.small !== null ? user.photos.small : avaImg}/>
                        </div>
                    </NavLink>
                    <div className={style.userInfo}>
                        <div className={style.userDescription}>
                            <h4>{user.name}</h4>
                            <h3 >{user.status}</h3>
                            <p>{user.status !== null ? user.status : 'user'}</p>
                        </div>
                        { !user.followed ? <button disabled={state.inFollowingProgres.some(id => id === user.id)} onClick={() => {
                            // props.setFollowingProgress(true, user.id)
                            // console.log(1)
                            // usersAPI.follow(user.id)
                            // .then(res => {
                            //     if(res.data.resultCode === 0){
                            //         props.follow(user.id)
                            //     }
                            //     props.setFollowingProgress(false, user.id)
                            // })
                            props.follow(user.id)
                            }}>Follow</button> : <button disabled={state.inFollowingProgres.some(id => id == user.id)}   onClick={() => {
                                // props.setFollowingProgress(true, user.id)
                                // console.log(1)
                                // usersAPI.unfollow(user.id)
                                // .then(res => {
                                //     if(res.data.resultCode === 0){
                                //         props.unFollow(user.id)
                                //     }
                                //     props.setFollowingProgress(false, user.id)
                                // })
                                props.unFollow(user.id)
                                }}>Unfollow</button>}
                    </div>
                </div>
            </li>
        )
    })

    let pages = Math.ceil(state.totalCount / state.pageSize);
    pages = 10;

    let paginationPages = [];

    for ( let i = 1; i <= pages; i++ ){
        paginationPages.push(i)
    }

    const paginationElements = paginationPages.map((page) => {
        return (
            <li className={style.paginationItem}>
                <span onClick={() => props.changePage(page)} className={ page == state.currentPage ? style.activePage : '' }>{ page }</span>
            </li>
        )
    })

    return (
            <div className={style.usersWrapper}>
                { state.isFetching ? <Loader /> : null}
                <ul className={style.userList}>
                    { list }
                </ul>
                <ul className={style.pagination}>
                    {/* { paginationElements } */}
                    <Paginator totalItemsCount={state.totalCount} pageSize={state.pageSize} currentPage={state.currentPage} onPageChanged={props.changePage}/>
                </ul>
            </div>
    )
}

export default User;