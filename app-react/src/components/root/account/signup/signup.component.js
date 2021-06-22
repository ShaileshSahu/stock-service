
import React, {useEffect} from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import TextInput from '../../shared/textinput';
import {
    gql,useMutation
  } from '@apollo/client';
import {useDispatch} from 'react-redux';
import { setSession } from '../../../../store/duck/session';
const Label = styled.div`
display: block;
font-size:.50rem;
:not(:first_child){
    margin-top: .75rem;
}
`;
import * as yup from 'yup';

const LabelText = styled.strong`
display:block;
font-size: .9rem;
margin-botton:.25rem;
`;

const Signupbutton = styled.button`
display: inline-block;
margin-top: .5rem;
`

const OrLogin = styled.span`
font-size:.9rem;
`
const mutation  = gql`
mutation($email: String!, $password: String! , $userName:  String!) {
    createUser(email: $email, password: $password, userName: $userName) {
       email,
       _id
    }   
}
`;

const validationSchema = yup.object().shape({
    email: yup.string().required(),
    userName: yup.string().required(),
    passsword: yup.string().required().test("confirmPassword", "${path} is not the same as the confirmation password", function () { return this.parent.password === this.parent.confirmPassword })
})
const Signup = ({onChangeToLogin: pushChangeToLogin}) => {
    
    useEffect(()=> {

        got
    }, []);
    const [createUser] = useMutation(mutation);
    const dispatch = useDispatch();
    const { formState: { isSubmitting, isValid,reset }, handleSubmit, register } = useForm({mode:"onChange", validationSchema});
    const onSubmit = handleSubmit(async ({ email, password, userName }) => {
         await createUser({
            variables: {email, password, userName}
        });
        console.log('done the changes');
        reset();
        console.log('not running');
        pushChangeToLogin()
        // dispatch(setSession(result));
    });
    return  (
        <form onSubmit={onSubmit}>
            <Label>
                <LabelText>Email</LabelText>
                <TextInput type="email" name="email" disabled={isSubmitting}  {...register("email")} />    
            </Label>
            <Label>
                <LabelText>Username</LabelText>
                <TextInput type="text" name="userName" disabled={isSubmitting}  {...register("userName")} />    
            </Label>
            <Label>
                <LabelText>Password</LabelText>
                <TextInput type="password" name="password" disabled={isSubmitting}  {...register("password")} />    
            </Label>
            <Label>
                <LabelText>Password</LabelText>
                <TextInput type="password" name="confirmPassword" disabled={isSubmitting}  {...register("confirmPassword")} />    
            </Label>
            <Signupbutton type="submit" disabled={isSubmitting || !isValid }> Signup </Signupbutton>
            <br />
            <OrLogin> Or <a onClick={event => { pushChangeToLogin() }}>Login</a></OrLogin>
        </form>) 
}

export default Signup  ;