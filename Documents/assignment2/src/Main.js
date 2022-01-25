import React from "react";
import {useNavigate} from 'react-router-dom';
import styled from "styled-components";
import img from "./chicken.png";


const Main = (props) => {
    const navigate = useNavigate();

    const days = {
        0:"월",
        1:"화",
        2:"수",
        3:"목",
        4:"금",
        5:"토",
        6:"일",
    }

    const week = Object.keys(days).map((day,index)=>{
        let today = new Date().getDay();
        let real_today = today + parseInt(day) > 7 ?  today + parseInt(day) - 8 : today + parseInt(day) - 1;
        return days[real_today];
    });

    

    const grade = week.map((d,i)=>{       
        return {
            day:d,
            grade : Math.floor(Math.random()*5)+1

        };
    });

    
    return (
        <Container>
            <h1>{props.name}의 일주일</h1>
            {grade.map((d,index)=>{               
                return (
                    <Wrap
                        key={index}
                    >
                        <b>{d.day}</b>
                        {Array.from({length: 5}, (item,index) => {
                            return (
                                <Circle
                                    key={index}
                                    className="circle"
                                    style={{
                                        backgroundColor: d.grade < index ? "#ddd" : "pink"
                                    }}
                                ></Circle>
                            );                            
                        })}
                        <Go onClick={()=>{
                            navigate(`/review/${d.day}`);
                        }}><img src={img}></img></Go>
                    </Wrap>
                );
                
            })}
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

const Circle =  styled.div`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    margin: 5px;
`;

const Go =  styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 5px;
    text-align: center;
    line-height: 38px;
    cursor: pointer;
    >img {
        width: 100%;
    }
    
`;

export default Main;