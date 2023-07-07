import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AVAILABLE_USE_CASES } from '../constants/products.constants';
import Use_case from '../../shared/components/Use_case/Use_case';
import { USE_CASE_PAGE_DATA } from '../constants/use-case-page-data.constants';
import Loader from '../../shared/components/Loader';

function ProductUseCasePage() {
  const { name, productName } = useParams();
  const navigate = useNavigate();
  const [use_case_content, set_use_case_content ] = useState(undefined)
  useEffect(() => {
    if (!AVAILABLE_USE_CASES[productName] || !AVAILABLE_USE_CASES[productName][name] || !USE_CASE_PAGE_DATA[productName][name]) {
      navigate('/404');
      return;
    }
    setContent(productName, name);
  }, [productName]);
  const setContent = (productName, useCaseName) =>{
    set_use_case_content(USE_CASE_PAGE_DATA[productName][useCaseName])
  }
  return use_case_content ? <Use_case content={use_case_content} /> : <Loader />;
}

export default ProductUseCasePage;
