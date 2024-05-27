import styled from '@emotion/styled';

const ForgetPasswordModal = ({ closeModal }) => {
    return (
        <Body>
            <LoginContainer>
                <LeftContainer>
                    <Title>
                        <p>Find ID !</p>
                    </Title>
                    
                    <form>
                        <div>
                            <P>사원명</P>
                            <Input type="text" name='userId' />
                            
                            <P>생년월일</P>
                            <Input type="password" name="userBirth" />
                            <NotFind>생년월일 8자리 입력해주세요</NotFind>
                            <P>이메일</P>
                            <Input type="email" name="userEmail" />
                            
                        </div>
                        <p>
                            <NotFind>해당하는 아이디가 없습니다.</NotFind>
                        </p>
                        <SignInButtonDiv>
                            <SignInButton>아이디찾기</SignInButton>                        
                        </SignInButtonDiv>
                    </form>
                </LeftContainer>
                <RightContainer>
                    <Title>
                        <p>Find Password !</p>
                        <Xbtn onClick={closeModal}>X</Xbtn>    
                    </Title>
                    <form>
                        <div>
                            <P>아이디</P>
                            <Input type="text" name='userId' />
                            
                            <P>생년월일</P>
                            <Input type="password" name="userBirth" />
                            <NotFind>생년월일 8자리 입력해주세요</NotFind>
                            <P>이메일</P>
                            <Input type="email" name="userEmail" />
                        </div>
                        <p>
                            <NotFind>임시 비밀번호는 &alv3;입니다.</NotFind>
                        </p>
                        <SignInButtonDiv>
                            <SignInButton>비밀번호 찾기</SignInButton>                        
                        </SignInButtonDiv>
                    </form>
                </RightContainer>
            </LoginContainer>
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
const Xbtn = styled.p`
    font-size: 20px;
    color:#c6cdd2;
    cursor:pointer;
    &:hover{
        color:black;
    }
`
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
    padding:10px 50px;
    text-align:start;
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
    display:flex;
    justify-content: space-between;
    align-items:center;
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
    margin: 5px 0px;
    color: red;
    font-size: 12px;
    font-weight: 700;
`;

export default ForgetPasswordModal