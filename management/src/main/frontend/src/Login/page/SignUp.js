import styled from "@emotion/styled";
import Body from "../components/Body";
import LoginContainer from "../components/LoginContainer";
import RightContainer from "../components/RightContainer";
import P from "../components/P";
import SignInButtonDiv from "../components/SignInButtonDiv";
import SignUpNotFind from "../components/SignUpNotFind";
import SignupInput from "../components/SignupInput";
import SignUpButton from "../components/SignUpButton";
import LeftContainer from "../components/LeftContainer";
import Title from "../components/Title";
import Xbtn from "../components/Xbtn";
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
              <SignupInput type="text" name="userId" />
              <SignUpNotFind>
                아직 근무 매장 인증이 완료되지 않았습니다.
              </SignUpNotFind>
              <P>매장명</P>
              <SignupInput
                type="text"
                name="userId"
                placeholder="매장 인증시 자동으로 입력됩니다."
                readOnly
              />
              <SignInButtonDiv>
                <SignUpButton>매장 인증하기</SignUpButton>
              </SignInButtonDiv>
            </div>
          </LeftContainer>
          <RightContainer>
            <Title>
              <Xbtn onClick={closeSignUpModal}>X</Xbtn>
            </Title>

            <P>아이디</P>
            <SignupInput type="text" name="userId" />
            <SignUpNotFind>중복된 아이디 입니다.</SignUpNotFind>
            <SignInButtonDiv>
              <SignUpButton>중복확인</SignUpButton>
            </SignInButtonDiv>
            <P>비밀번호</P>
            <SignupInput type="text" name="userId" />
            <SignUpNotFind>
              비밀번호는 최소 8자 이상 입력해주세요.
            </SignUpNotFind>
            <P>비밀번호 확인</P>
            <SignupInput type="text" name="userId" />
            <SignUpNotFind>비밀번호가 일치하지 않습니다.</SignUpNotFind>
            <SignInButtonDiv>
              <SignUpButton>가입하기</SignUpButton>
            </SignInButtonDiv>
          </RightContainer>
        </LoginContainer>
      </Body>
    </form>
  );
};

export default SignUp;
