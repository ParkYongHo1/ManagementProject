import { useState } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import ForgetPasswordModal from './ForgetPasswordModal';
const Login = () => {
    const [modal, setModal] = useState(false);
    const [userInfo, setUserInfo] = useState({
        userId: "",
        userPassword: ""
    });

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
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <Body>
            {!modal && (
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
                                <SignInButton>Sign In</SignInButton>
                            </SignInButtonDiv>
                        </form>
                        <SignUpDiv>
                            <Span>Don't have an account?</Span>
                            <Button>Sign Up</Button>
                        </SignUpDiv>
                    </RightContainer>
                </LoginContainer>
            )}
            {modal && (
                <ForgetPasswordModal closeModal={closeModal} />
            )}
        </Body>
    );
    
};

const Body = styled.div`
    background-color: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width:100%;
    margin: 0;
`;

const LoginContainer = styled.div`
    display: flex;
    background-color: white;
    width: 1000px;
    height: auto;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
    max-width: 90%;
`;

const LeftContainer = styled.div`
    width: 100%;
    max-width: 500px;
    img {
        width: 100%;
        height: auto;
    }
`;

const RightContainer = styled.div`
    width: 100%;
    max-width: 500px;
    border-left: 1px solid #c6cdd2;
    padding: 20px 70px;
    box-sizing: border-box;
    text-align: start;
`;

const Title = styled.div`
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 30px;
`;

const P = styled.p`
    color: #c6cdd2;
    margin: 0;
`;

const Input = styled.input`
    margin-bottom: 10px;
    width: 100%;
    padding: 10px 0px;
    border: none;
    border-bottom: 1px solid #ececec;

    &:focus {
        outline: none;
    }
`;

const Button = styled.div`
    color: #c6cdd2;
    text-decoration: none;
    text-align: end;
    font-size: 12px;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

const SignInButtonDiv = styled.div`
    text-align: center;
`;

const SignInButton = styled.button`
    height: 36px;
    width: 100px;
    border-radius: 26px;
    margin: 30px 0px;
    color: white;
    background-color: black;
    border: none;
    font-weight: 700;
    cursor: pointer;

    &:hover {
        cursor: pointer;
        box-shadow: 0 1px 1px rgb(0 0 0 / 10%);
        background-color: #f8f9fa;
        font-weight: 700;
        color: #000000;
    }
`;

const Span = styled.span`
    font-weight: 700;
    font-size: 12px;
    margin-right: 5px;
`;

const ForgotPasswordDiv = styled.div`
    text-align: end;
    font-size: 12px;
`;

const SignUpDiv = styled.div`
    display: flex;
    align-items: center;
`;

const NotFind = styled.p`
    margin: 5px 0px;
    color: red;
    font-size: 12px;
    font-weight: 700;
`;


export default Login;
