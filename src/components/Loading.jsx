import React, { useEffect } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';
import { Html, useProgress } from '@react-three/drei'

import '../styles/loading.scss'

const Loading = () => {
const nav = useNavigate()
  useEffect(() => {
    const timer = setTimeout(() => console.log('Initial timeout!'), 3000);
    return () => {
      
      clearTimeout(timer)
    };
  
  }, []);

    const { progress } = useProgress()
    return (

            <div className='loading'>
              <div className='loadingContent'>
                    <CircularProgress className='progress'/>
                    <h3 className='text'>Taking you to the Solar System...</h3>
                 
              </div>
            </div>

    )
}

export default Loading