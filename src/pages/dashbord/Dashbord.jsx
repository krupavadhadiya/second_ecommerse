import React, { useEffect } from 'react'
import { categoryList } from '../../api/auth_servise'

const Dashbord = () => {

  useEffect(() => {
    categoryData();  


  }, [])


  const categoryData =async()=>{

      try{
        const response = await categoryList();
          console.log(response,'categorylist');

      }catch(e){

        console.error('Error');
      }

  }
  return (
    <div className='main-dashbord'>

    <div className='main-category'>
      category
    </div>
      
    </div>
  )
}

export default Dashbord
