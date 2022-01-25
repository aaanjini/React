import React, { useState } from "react";
import styled from "styled-components";
import {useNavigate, useParams} from 'react-router-dom';
const Review = (props) => {
    const navigate = useNavigate();
    const [grade,setGrade] = React.useState(0);
    const params = useParams();



    return(        
        <Container>
            <h3><DayTag>{params.week}요일</DayTag>은 어땠나여</h3>
            <Wrap>            
                {Array.from({length: 5}, (item,index) => {
                    return (
                        <Circle
                            key={index}
                            onClick={() => {setGrade(index + 1);}}
                            style={{
                                backgroundColor: grade < index+1 ? "#ddd" : "pink"
                            }}
                        ></Circle>
                    );                            
                })}
                
            </Wrap>
            <Back onClick={()=>{
                navigate(-1);
            }}>평점남기기</Back>
        </Container>

    );
}

const Container = styled.div`
    max-width: 350px;
    width: 80vw;
    height: 90vh;
    margin: 5vh auto;
    padding: 5vh 20px;
    border: 5px solid #ddd;
    box-sizing: border-box;
    border-radius: 5px;
`;

const Wrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0px;
    width: 100%;
`;

const DayTag = styled.span`
    background-color: #000;
    padding: 5px;
    color: white;
    font-weight: bold;
    font-size: 20px;
    border-radius: 5px;
`;


const Circle =  styled.div`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    margin: 5px;
    cursor: pointer;
`;

const Back = styled.button`
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 5px;
    background-color: pink;
    cursor: pointer;
`;


export default Review;