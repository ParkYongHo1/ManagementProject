import axios from 'axios';
import React, { useState,useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBell} from "@fortawesome/free-regular-svg-icons";
import {faPowerOff} from "@fortawesome/free-solid-svg-icons";
function Header(props) {
    const [profileModal, setProfileModal] = useState(false);
    const [alarmModal, setAlarmModal] =useState(false);
    const modalRef = useRef(null);
  
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (profileModal && !modalRef.current.contains(event.target)) {
                setProfileModal(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [profileModal]);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (alarmModal && !modalRef.current.contains(event.target)) {
                setAlarmModal(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [alarmModal]);


    return (    
        <>
        {/* 헤더 시작 */}
        <MainHeaderContainer>
            <MainHeaderDiv>
                <div>
                    <MainHeaderImg src={process.env.PUBLIC_URL + '/mainlogo.png'} alt="mainLogo" width={118} height={44}/>
                </div>
                <MainHeaderSideDiv>
                    <MainHeaderUserDiv onClick={()=>setProfileModal(prev=>!prev)}>
                        <MainHeaderUserP>CA</MainHeaderUserP>
                        <p style={{color:"white", fontWeight:'700'}}>박용호</p>
                        {
                            profileModal && (
                                <MainHeaderProfileDiv ref={modalRef}>
                                    <MainHeaderProfileP>프로필보기</MainHeaderProfileP>
                                    <MainHeaderProfileP>로그아웃</MainHeaderProfileP>
                                </MainHeaderProfileDiv>
                            )
                        }
                    </MainHeaderUserDiv>
                    <div style={{position: 'relative'}} onClick={()=>setAlarmModal(prev => !prev)}>
                        <FontAwesomeIcon icon={faBell} size='lg' style={{color:"white",cursor:'pointer'}} />
                        <NotificationDot>.</NotificationDot>
                        {
                            alarmModal && (
                                <MainHeaderAlarmDiv ref={modalRef}>
                                    <MainHeaderProfileP>24년 6월 1주 매출</MainHeaderProfileP>
                                    <MainHeaderProfileP>박용호님 근태수정 요청</MainHeaderProfileP>
                                </MainHeaderAlarmDiv>
                            )
                        }
                    </div>
                    <div>
                    <FontAwesomeIcon icon={faPowerOff} size='lg' style={{color: "#ffffff",cursor:'pointer'}} />
                    </div>
                </MainHeaderSideDiv>
            </MainHeaderDiv>
        </MainHeaderContainer>
        {/* 메인 시작 */}
        <div>
            fsdfsd
        </div>
        </>
    );
}
const MainHeaderContainer = styled.div`
    background-color : #651D16;
    height:10vh;
    width:100%;
`
const MainHeaderDiv = styled.div`
    width: 1200px;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin:0 auto;
   
`
const MainHeaderImg = styled.img`
    
`

const MainHeaderUserP = styled.p`
    border-radius:50%;
    border: 1px solid black;
    margin-right:10px;
    width:32px;
    line-height: 32px;
    color : #651D16;
    background-color: white;
    font-weight:700;
`
const MainHeaderUserDiv = styled.div`
    display:flex;
    width:200px;
    align-items:center;
    justify-content: end ;
    cursor:pointer;
    position:relative;
`
const MainHeaderSideDiv = styled.div`
    display:flex;
    width:300px;
    align-items:center;
    justify-content:space-between;
`
const NotificationDot = styled.p`
    position: absolute;
    top: -50px;
    right: -8px;
    font-size: 50px;
    margin: 0;
    color: red;
    cursor:pointer;
`;
const MainHeaderProfileDiv = styled.div`
    position: absolute;
    padding: 10px 36px;
    background: rgba(0, 0, 0, 0.6);    
    top:70px;
    left: 50%;
    transform: translate(-0%, -1%);
`
const MainHeaderProfileP = styled.p`
    font-weight:700;
    color: #fffefe;
    font-size: 14px;
    white-space: nowrap;
    padding:10px 0px;
`
const MainHeaderAlarmDiv = styled.div`
    position: absolute;
    padding: 10px 36px;
    background: rgba(0, 0, 0, 0.6);    
    top:70px;
    left: 50%;
    transform: translate(-50%, -17%);
`

export default Header;
