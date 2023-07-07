import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import FeatureHeroSection from '../../shared/components/feature/components/FeatureHeroSection';
import { FEATURE_PAGE_DATA } from '../constants/feature-page-data.constant';
import Loader from '../../shared/components/Loader';
import { PRODUCT_NAMES } from '../constants/products.constants';

function ProductFeaturePage() {
  const [featureData, setFeatureData] = useState(null);
  const navigate = useNavigate();
  const { productName } = useParams();

  useEffect(() => {
    if (!PRODUCT_NAMES[productName] || !FEATURE_PAGE_DATA[productName]) {
      navigate('/404');
      return;
    } else {
      setFeatureData(FEATURE_PAGE_DATA[productName]);
    }
  }, [productName]);
  return <>{featureData ? <FeatureHeroSection data={featureData} /> : <Loader />}</>;
}

export default ProductFeaturePage;
