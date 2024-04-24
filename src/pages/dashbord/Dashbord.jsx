import React, { useEffect } from "react";
import { allStoreData } from "../../store/allStoreData";
import { useCategoryQuery, useProductListQuery } from "../../queries/auntheticationquery";
import mobileacc from '../../assets/Images/22fddf3c7da4c4f4.webp'
import wc from '../../assets/Images/wc.jpg'
import carasoal from '../../assets/Images/caroasol1.webp'
import carasoal2 from '../../assets/Images/carasoal2.webp'
import { Carousel } from "antd";

const contentStyle = {
  height: '300px', // You can adjust the height as needed
  color: '#fff',
  textAlign: 'center',
  background: '#364d79', // You can set a background color
  display: 'flex', // Flexbox properties for centering
  justifyContent: 'center',
  alignItems: 'center',
};

const imageStyle = {

  width: '100%',
    maxwidth:'1600px', 
    height:'220px' 
  
};
const Dashbord = () => {
  const { setState, categoryListDatat} = allStoreData();

  // const { data } = useCategoryQuery();
  // const { data } = useProductListQuery();
  const { data: categoryData} = useCategoryQuery();
  const { data: productData} = useProductListQuery();


  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  useEffect(() => {
    if (categoryData) { 
      const categoryResData = categoryData.data?.data?.category || []; 
      setState({ categoryListDatat: categoryResData }); 
    }
  }, [categoryData, setState]);


  useEffect(() => {
  
  }, [])
  return (
    <div className="main-dashboard"> 
    <div className="main-category">
      {
        categoryListDatat.map((category, i) => (
          <div className="sub_category" key={i}> 
          <div className="category_port">
                <img src={mobileacc}/>
            <div>{category.name}</div>
          </div>
          </div>
        ))
     
      }
    </div>


    {/* <div className="main_carasoal">
    <Carousel autoplay> 
      <div>
        <img src={carasoal} alt="Slide 1" style={imageStyle} />
      </div>
      <div>
        <img src="https://placebear.com/800/300" alt="Slide 2" style={imageStyle} />
      </div>
      <div>
        <img src="https://placebeard.it/800x300" alt="Slide 3" style={imageStyle} />
      </div>
      <div>
        <img src={carasoal2} alt="Slide 4" style={imageStyle} />
      </div>
    </Carousel>
    </div> */}

    <div className="main_product">

      <div className="sub_product">

      </div>


        


    </div>








    
  </div>
  );
};

export default Dashbord;
