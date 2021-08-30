import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import people from './data';

const Review = () => {
    const [index, setIndex] = useState(0)
    const {name,job,image,text}= people[index]


const checkNumber=(number)=>{
    if(number > people.length-1){
        return 0;
    }
    if(number <0){
        return people.length -1;
    }
    return number
}
// nextPerson onClink handling 
const nextPerson=()=>{

    setIndex((index)=>{
        let newIndex= index+1;
        return  checkNumber(newIndex);

    })
}

const randomPerson=()=>{
    let randomNumber = Math.random() * people.length;
    randomNumber = Math.floor(randomNumber)

    if (randomNumber===index){
        randomNumber = index - 1;
    }

    setIndex(checkNumber(randomNumber))
}
// prevPerson onClink handling 

const prevPerson=()=>{
    setIndex((index)=>{
        let newIndex= index-1;
        return checkNumber(newIndex);
    })
}




  return <article className="review">
      <div className="img-container">
          <img src={image} alt={name} className="person-img" />
         <span className="quite-icon">
             <FaQuoteRight/>
         </span>
      </div>
          <h4 className="author">{name}</h4>
          <p className="job">{job}</p>
          <p className="info">{text}</p>

          <div className="button-container">
              <button className="prev-btn" onClick={prevPerson}>
              <FaChevronLeft/>
              </button>
              <button className="next-btn" onClick={nextPerson}>
              <FaChevronRight/>
              </button>
             
          </div>
          <button className="random-btn" onClick={randomPerson}>
             Surprise me
        </button>
          
  </article>
};

export default Review;