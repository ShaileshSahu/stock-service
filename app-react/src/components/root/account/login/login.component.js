import React from 'react';
import {
    useForm
} from 'react-hook-form';
import styled from 'styled-components';
import TextInput from '../../shared/textinput';
import {
    gql,
    useMutation
} from '@apollo/client'
import {
    useDispatch
} from 'react-redux';
import {
    setSession
} from '../../../../store/duck/session';
const Label = styled.div `
display: block;
font-size:.50rem;
:not(:first_child){
    margin-top: .75rem;
}
`;

const LabelText = styled.strong `
display:block;
font-size: .9rem;
margin-botton:.25rem;
`;

const LoginButton = styled.button `
display: inline-block;
margin-top: .5rem;
`

const OrSignup = styled.span `
font-size:.9rem;
`
const mutation = gql `
mutation($email: String!, $password: String! ) {
    createUserSession(email: $email, password: $password) {
        uuid,
        user{
            email
        }
    }   
}
`
const Login = ({
        onChangeToSignup: pushChangeToSignup
    }) => {
        const [createUserSession] = useMutation(mutation);
        const dispatch = useDispatch();
        const {
            formState: {
                isSubmitting
            },
            handleSubmit,
            register
        } = useForm();
        const onSubmit = handleSubmit(async ({
            email,
            password
        }) => {
            const result = await createUserSession({
                variables: {
                    email,
                    password
                }
            });
            dispatch(setSession(result));
        })
        return ( <
            form onSubmit = {
                onSubmit
            } >
            <
            Label >
            <
            LabelText > Email < /LabelText> <
            TextInput type = "email"
            name = "email"
            disabled = {
                isSubmitting
            } {
                ...register("email")
            }
            />     <
            /Label> <
            Label >
            <
            LabelText > Password < /LabelText> <
            TextInput type = "password"
            name = "password"
            disabled = {
                isSubmitting
            } {
                ...register("password")
            }
            />     <
            /Label> <
            LoginButton type = "submit"
            disabled = {
                isSubmitting
            } > Login < /LoginButton> <
            br / >
            <
            OrSignup > Or < a onClick = {
                event => {
                    pushChangeToSignup()
                }
            } > Signup < /a></OrSignup >
            <
            /form>) 
        }

        export default Login;