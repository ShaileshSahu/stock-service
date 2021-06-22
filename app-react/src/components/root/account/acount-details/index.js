import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {gql, useMutation} from '@apollo/client';
import styled from 'styled-components';
import {clearSession} from '../../../../store/duck/session';
 const Logout = styled.a`
 color: red;
 background-color: black;
 text-underline: none;
 padding: 5px;
 `
 const mutation = gql`
 mutation($sessionId:String) {
     deleteUserSession(sessionId: $sessionId) 
 }`;
const AccountDetail = () => {
    const dispatch = useDispatch();
    const session = useSelector(state => state.session);
    const [deleteUserSession] = useMutation(mutation);
    const submit = (e) => {
        deleteUserSession( {variables: {sessionId: session.uuid}});
        dispatch(clearSession());
    }
    console.log(session);
    return <h2>Loggger in {session.user.email}
    <br />  <Logout onClick={submit}>Logout </Logout></h2>
}

export default AccountDetail;