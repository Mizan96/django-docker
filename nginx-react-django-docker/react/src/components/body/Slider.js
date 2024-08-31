import React from "react";
import Carousel from "react-bootstrap/Carousel";
import s1 from "../../images/prothomalo-bangla_2024-07-31_7ycrw77i_2.webp";
import s2 from "../../images/prothomalo-bangla_2024-07-31_nxnlam74_1.webp";
import s3 from "../../images/prothomalo-bangla_2024-07-31_y7fz89wh_6.webp";
import s4 from '../../images/prothomalo-bangla_2024-07-31_qmsjec8q_3.webp';
import s5 from '../../images/prothomalo-bangla_2024-07-31_y0rzkagj_4.webp';

import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';


function Slider() {
    return (
      <>
        {/* // <Carousel id="slider" data-bs-theme="dark">
        //   <Carousel.Item>
        //     <img className="d-block w-100 filter" src={s1} alt="First slide" />
        //     <Carousel.Caption>
        //       <p>
        //         চলছে আমন ধান রোপণের মৌসুম। ধানের চারা রোপণে ব্যস্ত সময় পার করছেন
        //         কৃষকেরা। খেত প্রস্তুত শেষে ধানের চারা রোপণ করছেন তিন কৃষক। আলালপুর,
        //         কৈজুরী, সদর উপজেলা, ফরিদপুর।ছবি: আলীমুজ্জামান
        //       </p>
        //     </Carousel.Caption>
        //   </Carousel.Item>
        //   <Carousel.Item>
        //     <img className="d-block w-100" src={s2} alt="Second slide" />
        //     <Carousel.Caption>
        //       <p>
        //         পাট জাগ দিচ্ছেন এক কৃষক। তেবাড়িয়া, পবা উপজেলা, রাজশাহী। ছবি: শহীদুল
        //         ইসলাম
        //       </p>
        //     </Carousel.Caption>
        //   </Carousel.Item>
        //   <Carousel.Item>
        //     <img className="d-block w-100" src={s3} alt="Third slide" />
        //     <Carousel.Caption>
        //       <p>
        //         জলাশয়ে ফুটে থাকা লাল শাপলা তুলছে এই কিশোর। কুকরুল এলাকা, রংপুর। ছবি:
        //         মঈনুল ইসলাম
        //       </p>
        //     </Carousel.Caption>
        //   </Carousel.Item>
        //   <Carousel.Item>
        //     <img className="d-block w-100" src={s4} alt="First slide" />
        //     <Carousel.Caption>
        //       <p>
        //         বিলের পানিতে মাছ শিকারে নেমেছে পানকৌড়ি। পানিতে ডুব দিয়ে ছোট মাছ শিকার করে এরা। শ্রীপুর, গাজীপুর। ছবি: সাদিক মৃধা
        //       </p>
        //     </Carousel.Caption>
        //   </Carousel.Item>
        //   <Carousel.Item>
        //     <img className="d-block w-100" src={s5} alt="First slide" />
        //     <Carousel.Caption>
        //       <p>
        //         কৃষকদের কাছ থেকে গাব কিনে ছোট-বড় বাছাই করে বিক্রির জন্য নিয়ে যাচ্ছেন এক ব্যক্তি। গজারিয়ার দিঘী এলাকা, সীতাকুণ্ড, চট্টগ্রাম। ছবি: কৃষ্ণ চন্দ্র দাস
        //       </p>
        //     </Carousel.Caption>
        //   </Carousel.Item>
        // </Carousel> */}



<MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem itemId={1}>
        <img src={s4} className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          {/* <h5>First slide label</h5> */}
          <p>বিলের পানিতে মাছ শিকারে নেমেছে পানকৌড়ি। পানিতে ডুব দিয়ে ছোট মাছ শিকার করে এরা। শ্রীপুর, গাজীপুর। ছবি: সাদিক মৃধা</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2}>
        <img src={s2} className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          {/* <h5>Second slide label</h5> */}
          <p>পাট জাগ দিচ্ছেন এক কৃষক। তেবাড়িয়া, পবা উপজেলা, রাজশাহী। ছবি: শহীদুল
                  ইসলাম</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={3}>
        <img src={s3} className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          {/* <h5>Third slide label</h5> */}
          <p>জলাশয়ে ফুটে থাকা লাল শাপলা তুলছে এই কিশোর। কুকরুল এলাকা, রংপুর। ছবি:
                  মঈনুল ইসলাম</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>
      {/* <MDBCarouselItem itemId={4}>
        <img src={s4} className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          <h5>Third slide label</h5>
          <p>জলাশয়ে ফুটে থাকা লাল শাপলা তুলছে এই কিশোর। কুকরুল এলাকা, রংপুর। ছবি:
                  মঈনুল ইসলাম</p>
        </MDBCarouselCaption>
      </MDBCarouselItem> */}
    </MDBCarousel>
      </>
    );
  }

export default Slider;
