import React, { useState } from 'react';
import './App.css';

const data = [
  {
    id: 1,
    question: "What is JavaScript?",
    answer: "JavaScript is a versatile programming language commonly used in web development to create interactive effects within web browsers."
  },
  {
    id: 2,
    question: "How do you declare a variable in JavaScript?",
    answer: "You can declare a variable using 'var', 'let', or 'const' keywords. For example: 'let x = 5;'."
  },
  {
    id: 3,
    question: "What is an array in JavaScript?",
    answer: "An array is a data structure that can hold multiple values under a single variable name, and the values can be of any type. For example: 'let fruits = ['apple', 'banana', 'cherry'];'."
  },
  {
    id: 4,
    question: "What is a function in JavaScript?",
    answer: "A function is a block of code designed to perform a particular task. It is executed when it is called or invoked. For example: 'function myFunction() { console.log('Hello World'); }'."
  },
  {
    id: 5,
    question: "What is the difference between '==' and '===' in JavaScript?",
    answer: "'==' checks for equality of value only, while '===' checks for both equality of value and type. For example, '5 == '5'' is true, but '5 === '5'' is false."
  }
];

const FaqItem = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <div className={`faq-item ${show ? 'active' : ''}`}>
      <div className="faq-item-header" onClick={toggleShow}>
        {question}
      </div>
      <div className="faq-item-body">
        {show && (
          <div className="faq-item-content">
            {answer}
          </div>
        )}
      </div>
    </div>
  );
};

const FaqAccordion = ({ data }) => {
  return (
    <div className="faq-accordion">
      <h2>FAQs</h2>
      {data.map((item) => (
        <FaqItem key={item.id} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

function App() {
  return (
    <div>
      <FaqAccordion data={data} />
    </div>
  );
}

export default App;
