import styled from '@emotion/styled';
import Body from '../atoms/elements/Body';
import LoginContainer from '../atoms/container/LoginContainer';
import RightContainer from '../atoms/container/RightContainer';
import P from '../atoms/elements/P';
import SignInButtonDiv from '../atoms/elements/SignInButtonDiv';
const SignUp = ({ closeSignUpModal }) => {
    return (
        <form>
            <Body>
                <LoginContainer>
                    <LeftContainer>
                        <Title>
                            <p>회원가입</p>
                        </Title>
                            <div>
                                <P>매장코드</P>
                                <Input type="text" name='userId' />
                                <NotFind>아직 근무 매장 인증이 완료되지 않았습니다.</NotFind>                              
                                <P>매장명</P>
                                <Input type="text" name='userId' placeholder='매장 인증시 자동으로 입력됩니다.' readOnly/>
                                <SignInButtonDiv>
                                    <SignInButton>매장 인증하기</SignInButton>                        
                                </SignInButtonDiv>
                            </div>
                    </LeftContainer>
                    <RightContainer>
                        <Title>
                            <Xbtn onClick={closeSignUpModal}>X</Xbtn>    
                        </Title>

                                <P>아이디</P>
                                <Input type="text" name='userId' />
                                <NotFind>중복된 아이디 입니다.</NotFind>
                                <SignInButtonDiv>
                                    <SignInButton>중복확인</SignInButton>                        
                                </SignInButtonDiv>
                                <P>비밀번호</P>
                                <Input type="text" name='userId' />
                                <NotFind>비밀번호는 최소 8자 이상 입력해주세요.</NotFind>
                                <P>비밀번호 확인</P>
                                <Input type="text" name='userId' />
                                <NotFind>비밀번호가 일치하지 않습니다.</NotFind>
                                <SignInButtonDiv>
                                    <SignInButton>가입하기</SignInButton>                        
                                </SignInButtonDiv>                          
                    </RightContainer>         
                </LoginContainer>
            </Body>
        </form>
    );
};

const Xbtn = styled.p`
    font-size: 20px;
    color:#c6cdd2;
    cursor:pointer;
    margin:0 0 0 auto;
    &:hover{
        color:black;
    }
`
const LeftContainer = styled.div`
    width: 100%;
    max-width: 500px;
    padding:10px 50px;
    text-align:start;
`;

const Title = styled.div`
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 30px;
    display:flex;
    justify-content: space-between;
    align-items:center;
`;

const Input = styled.input`
    margin-bottom: 10px;
    width: 100%;
    padding: 15px 0px 10px 0px;
    border: none;
    border-bottom: 1px solid #ececec;
    color: black;
    &:focus {
        outline: none;
    }
`;

const SignInButton = styled.button`
    height: 36px;
    width: 150px;
    border-radius: 26px;
    margin: 20px 0px;
    color: white;
    background-color: black;
    border: none;
    font-weight: 700;
    cursor: pointer;
    margin-left:5px;
    &:hover {
        cursor: pointer;
        box-shadow: 0 1px 1px rgb(0 0 0 / 10%);
        background-color: #f8f9fa;
        font-weight: 700;
        color: #000000;
    }
`;



const NotFind = styled.p`
    margin: 0px 0px 10px 0px;
    color: red;
    font-size: 12px;
    font-weight: 700;
`;

export default SignUp