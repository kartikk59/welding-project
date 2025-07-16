'use client';
import React from 'react';
import styled from 'styled-components';

export default function Reliability(){
  return (
    <StyledWrapper>
        <div className='flex w-full bg-gradient-to-r from-purple-100 to-pink-100 pt-10 pb-10 justify-center items-center3'>
         
      <div className="card">
      
        <h2>Trusted by 4000+ Happy Customers!</h2>
         
      </div>
      <div className="card">
        <h2>Delivered 6000+ Projects with Excellence</h2>
      </div>
      </div>
    </StyledWrapper>
  );
}


const StyledWrapper = styled.div`
  .card {
    width: 190px;
    height: 200px;
    background: black;
    position: relative;
    display: flex;
    place-content: center;
    place-items: center;
    overflow: hidden;
    border-radius: 20px;
    margin: 10px;
    text-align: center;
  }

  .card h2 {
    z-index: 1;
    color: white;
    font-size: 25px;
    padding: 8px
  }

  .card::before {
    content: '';
    position: absolute;
    width: 100px;
    background-image: linear-gradient(180deg, rgb(0, 183, 255), rgb(255, 48, 255));
    height: 130%;
    animation: rotBGimg 3s linear infinite;
    transition: all 0.2s linear;
  }

  @keyframes rotBGimg {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  .card::after {
    content: '';
    position: absolute;
    background: #07182E;
    ;
    inset: 5px;
    border-radius: 15px;
  }  
  /* .card:hover:before {
    background-image: linear-gradient(180deg, rgb(81, 255, 0), purple);
    animation: rotBGimg 3.5s linear infinite;
  } */`;