import React, { useEffect, useState } from 'react';
import Pricing from '../../shared/components/pricing/pricing';
import { useNavigate, useParams } from 'react-router-dom';
import { PRICING_DATA } from '../constants/pricing-page-data.constants';
import { PRODUCT_NAMES } from '../constants/products.constants';
import Loader from '../../shared/components/Loader';

function ProductPricingPage() {
  const [priceData, setPriceData] = useState(null);
  const navigate = useNavigate();
  const { productName } = useParams();
  useEffect(()=>{
    if(!PRODUCT_NAMES[productName] || !PRICING_DATA[productName] ){
      navigate('/404')
      return
    }else{
      setPriceData(PRICING_DATA[productName])
    }
  },[productName])
  return <div>{priceData ? <Pricing priceData={priceData} /> : <Loader/> }</div>;
}

export default ProductPricingPage;
