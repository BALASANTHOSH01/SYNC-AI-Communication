"use client";

import React, { useState } from 'react';
import { useParallax, ParallaxProvider } from 'react-scroll-parallax';
import HelperCard from './HelperCard';
import { GeneralFAQ, WebsiteFAQ } from './QuestionsList';

const Questions: React.FC = () => {
  const [contentIs, setContentIs] = useState<string>('generalfaq');

  const handleContentChange = (data: string) => {
    setContentIs(data);
  };

  const renderFAQContent = (faqList: { question: string; answer: string }[]) => {
    return faqList.map((faq, index) => (
      <div className='flex flex-col gap-2 my-[2%]' key={index}>
        <p className='font-bold text-[24px]'>{faq.question}</p>
        <p className='text-[14px]'>{faq.answer}</p>
      </div>
    ));
  };

  const parallaxFAQHeader = useParallax<HTMLDivElement>({ speed: -5 });
  const parallaxFAQContent = useParallax<HTMLDivElement>({ speed: -2 });

  return (
    <ParallaxProvider>
      <div className='py-[4%] mb-[15%]'>
        <p ref={parallaxFAQHeader.ref} className='text-[40px] text-center'>Frequently Asked Questions</p>
        <div className='flex flex-row items-start justify-center gap-5 my-[5%]'>
          <HelperCard
            contentIs={contentIs}
            handleGeneralFAQ={handleContentChange}
            handleWebsiteFAQ={handleContentChange}
          />
          <div ref={parallaxFAQContent.ref} className='w-[60%] z-50 relative'>
            {contentIs === 'generalfaq' ? renderFAQContent(GeneralFAQ) : renderFAQContent(WebsiteFAQ)}
          </div>
        </div>
      </div>
    </ParallaxProvider>
  );
};

export default Questions;
