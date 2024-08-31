import React from 'react'
import { Container } from 'react-bootstrap'

// This function is used for converting Bangla Date from English Date
const banglaDigit = [{'english':'0','bangla':'০'}, 
                     {'english':'1','bangla': '১'},
                     {'english':'2','bangla':'২'},
                     {'english':'3','bangla':'৩'},
                     {'english':'4','bangla':'৪'}, 
                     {'english':'5','bangla':'৫'}, 
                     {'english':'6','bangla':'৬'}, 
                     {'english':'7','bangla':'৭'},
                     {'english':'8','bangla':'৮'}, 
                     {'english':'9','bangla':'৯'}] 

const englishToBanglaDateConverter = (toBeConverted) => {
  const beConverted = toBeConverted.toString();
  
  // this is single bangla digit converter function
  const getSingleBanglaDigit = (englishDigit) => {
    let banglaItem = null;
    for(let item in banglaDigit){
      if(banglaDigit[item].english=== englishDigit)
      {
        banglaItem = banglaDigit[item].bangla;
        break;
      }
    }
    return banglaItem;
  }
  const banglaDate = [];
  for (let digit in beConverted){
    banglaDate.push(getSingleBanglaDigit(beConverted[digit]));
  }
  return banglaDate.join('');
}

const daysName = ["শনিবার", "রবিবার", "সোমবার", "মঙ্গলবার", "বুধবার", "বৃহস্পতিবার", "শুক্রবার"]
const monthsName = ["জানুযারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"]

function AboveTop() {
  let currentTime = new Date();;
  return (
    <>
    <div className='border-bottom py-3 px-5  bg-eeeded '>
        <Container>
         <span className='text-danger fw-bold display-6'>দৈনিক বার্তা</span>
        <p>{daysName[currentTime.getDay()+1]} | {englishToBanglaDateConverter(currentTime.getDate())}{' '}
           {monthsName[currentTime.getMonth()]} , {englishToBanglaDateConverter(currentTime.getFullYear())} </p>
        </Container>
    </div>
    </>
  )
}

export default AboveTop