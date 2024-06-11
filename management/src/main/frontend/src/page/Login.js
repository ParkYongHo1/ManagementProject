import React, { useState } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import ForgetPasswordModal from '../Components/ForgetPasswordModal';
import SignUp from '../Components/SignUp';
import LoginContainer from '../atoms/container/LoginContainer';
import LeftContainer from '../atoms/container/LeftContainer';
import RightContainer from '../atoms/container/RightContainer';
import Title from '../atoms/elements/Title';
import Input from '../atoms/elements/Input';
import Button from '../atoms/buttons/Button';
import Body from '../atoms/elements/Body';
import P from '../atoms/elements/P';
import NotFind from '../atoms/elements/NotFind';
import SignInButton from '../atoms/buttons/SignInButton';
import ForgotPasswordDiv from '../atoms/elements/ForgotPasswordDiv';
import SignInButtonDiv from '../atoms/elements/SignInButtonDiv';
import Span from '../atoms/elements/Span';
import SignUpDiv from '../atoms/elements/SignUpDiv';
const Login = () => {
    const [modal, setModal] = useState(false);
    const [signUpModal, setSignUpModal] = useState(false);
    const [userInfo, setUserInfo] = useState({
        userId: "",
        userPassword: ""
    });

    const openSignUpModal = () => {
        setSignUpModal(true);
    };

    const closeSignUpModal = () => {
        setSignUpModal(false);
    };

    const openModal = () => {
        setModal(true);
    };
    
    const closeModal = () => {
        setModal(false);
    };

    const changeInput = (e) => {
        const { name, value } = e.target;
        setUserInfo({ ...userInfo, [name]: value });
    };

    const onSubmitInput = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('api/login', userInfo);
            if (res.data === "Login successful!") {
                console.log("로그인 성공");
            }else{
                console.log("로그인 실패");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Body>
            {(!modal && !signUpModal) && (
                <LoginContainer>
                    <LeftContainer>
                        <img src={process.env.PUBLIC_URL + '/login.png'} alt="Login" />
                    </LeftContainer>
                    <RightContainer>
                        <Title>
                            <p>Welcome!</p>
                        </Title>
                        <form onSubmit={onSubmitInput}>
                            <div>
                                <P>ID</P>
                                <Input type="text" onChange={changeInput} name='userId' value={userInfo.userId} />
                                <NotFind>일치하는 아이디가 없습니다.</NotFind>
                                <P>Password</P>
                                <Input type="password" onChange={changeInput} name="userPassword" value={userInfo.userPassword} />
                                <NotFind>일치하는 비밀번호가 없습니다.</NotFind>
                            </div>
                            <ForgotPasswordDiv>
                                <Button onClick={openModal}>Forget ID/password?</Button>
                            </ForgotPasswordDiv>
                            <SignInButtonDiv>
                                <SignInButton type="submit">Sign In</SignInButton>
                            </SignInButtonDiv>
                        </form>
                        <SignUpDiv>
                            <Span>Don't have an account?</Span>
                            <Button onClick={openSignUpModal}>Sign Up</Button>
                        </SignUpDiv>
                    </RightContainer>
                </LoginContainer>
            )}
            {modal && <ForgetPasswordModal closeModal={closeModal} />}
            {signUpModal && <SignUp closeSignUpModal={closeSignUpModal} />}
        </Body>
    );
};
export default Login;
