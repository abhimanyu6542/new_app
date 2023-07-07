import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProductHome from '../../shared/components/ProductHome/Home';
import { PRODUCT_NAMES } from '../constants/products.constants';
import { PRODUCT_PAGE_DATA } from '../constants/product-page-data.constants';
import Loader from '../../shared/components/Loader';

function ProductHomePage() {
  const [homeData, setHomeData] = useState(null);
  const navigate = useNavigate();
  const { productName } = useParams();
  useEffect(()=>{
    if(!PRODUCT_NAMES[productName] || !PRODUCT_PAGE_DATA[productName] ){
      navigate('/404')
      return
    }else{
      setHomeData(PRODUCT_PAGE_DATA[productName])
    }}, [productName])
  return homeData ? <ProductHome data={homeData} /> : <Loader />; 
}
export default ProductHomePage;

