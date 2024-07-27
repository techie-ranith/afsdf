"use client"

import React, { useState } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Container from './Container';
import { motion } from 'framer-motion';

const questions = [
  "What is Recruitwise?",
  "How does Recruitwise leverage AI in the recruitment process?",
  "What are the benefits of using Recruitwise for employers?",
  "How can candidates benefit from using Recruitwise?",
  "Is there a video conferencing feature for interviews?",
  "How secure is my personal information on Recruitwise?",
  "How can I get support if I encounter issues?"
];

const answers = [
  "Recruitwise is an innovative talent acquisition platform designed to streamline the hiring process for both employees and employers. Our platform leverages advanced AI features to ensure the best cultural fit and growth potential for candidates, making the recruitment process more efficient and effective.",
  "Recruitwise uses advanced AI algorithms to match candidates with job opportunities based on their skills, experience, and cultural fit. This ensures that both employers and employees find the best matches for long-term success.",
  "Employers benefit from Recruitwise by getting access to a pool of highly qualified candidates who are a good fit for their company culture. The AI-driven matching process saves time and resources by quickly identifying the best candidates for each role.",
  "Candidates benefit from Recruitwise by being matched with job opportunities that align with their skills and career goals. The platform helps them find positions where they can thrive and grow within the company.",
  "Yes, Recruitwise has an inbuilt video conferencing feature that allows employers to conduct interviews directly through the platform. This makes the interview process more convenient and efficient.",
  "We take the security of your personal information very seriously. Recruitwise uses industry-standard security measures to protect your data and ensure your privacy.",
  "If you encounter any issues or need support, you can contact our customer service team via email at support@recruitwise.com or by calling (123) 456-7890."
];

const QandA = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Container>
      <div className='flex items-start justify-center gap-8'>
        <div className='flex flex-col gap-4 w-1/2 text-justify pr-16'>
          <motion.div
            className='text-primary-800 font-bold text-xl'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            support
          </motion.div>
          <motion.div
            className=''
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            FAQ
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi consequuntur omnis fugiat aliquid nobis? Amet laboriosam non fugit aliquid quidem. Perspiciatis, reiciendis neque nisi reprehenderit at maxime cum rerum quasi?
          </motion.div>
        </div>
        <div className='flex flex-col gap-4 w-1/2'>
          {questions.map((question, index) => (
            <motion.div
              key={index}
              className='flex items-center justify-center flex-col w-full'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className='flex items-center justify-between w-full'>
                <div>{question}</div>
                <div onClick={() => toggleExpand(index)} className='cursor-pointer'>
                  {expandedIndex === index ? <RemoveCircleOutlineIcon /> : <AddCircleOutlineIcon />}
                </div>
              </div>
              {expandedIndex === index && (
                <div className='mt-2'>
                  {answers[index]}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default QandA;
