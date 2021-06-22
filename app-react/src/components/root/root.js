import React, {
    useState,
    useEffect
} from 'react';
import styled from "styled-components";
import Login from './account/login/login.component';
import {
    gql
} from '@apollo/client';
import graphqlClient from '../../api/graphqlClient';
import {
    useDispatch
} from 'react-redux';
import {
    setSession
} from '../../store/duck/session';
import Account from './account/index.component';
import NewsComponent from './news/new.component';
const Container = styled.div `
display: flex;
flex-flow: row nowrap;
margin: 0 auto;
width: 80rem;
`;

const SideBar = styled.div `
flex: 0 auto;
float:left;
padding:10px;
 width: 15rem;
 background-color:pink;
 `;

const Content = styled.div `
 flex: 1;
 margin-right:0.5rem;
 color:blue;
 background-color:red
 `;
const Wrapper = styled.div `
box-sizing: border-box;
height: 100%;
padding: 5rem;
width: 100%;
`

const query = gql `{
    userSession(me:true) {
        uuid,
        user{
            email,
            _id
        }
    }
}`;

const Root = () => {
        const dispatch = useDispatch();
        const [intialized, setInitialised] = useState(false);
        useEffect(() => {
            console.log(query);
            graphqlClient.query({
                query
            }).then(({
                data
            }) => {
                if (data.userSession) {
                    dispatch(setSession(data.userSession));
                }
                setInitialised(true);
            }).catch(error => console.log(error));
        }, []);
        if (!intialized) return "Loading....."

        return ( <Wrapper >
            <Container >
            <NewsComponent/>
            <SideBar > < Account / > </SideBar> </Container > </Wrapper>);
        }

        export default Root;