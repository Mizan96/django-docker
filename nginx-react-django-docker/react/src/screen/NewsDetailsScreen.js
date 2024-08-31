import TopBar from '../components/TopBar'
import Bottom from '../components/Bottom'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import getArtticleDetailFromServer from '../store/article-detail-action';
import {
  MDBContainer,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';


function NewsDetailsScreen() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.articleDetail.data);
  const author = useSelector((state) => state.articleDetail.author);
  const category = useSelector((state) => state.articleDetail.category);
  const { id } = useParams();


  

  useEffect(() => {
    dispatch(getArtticleDetailFromServer(id));
  }, [dispatch, id]);

  return (
    <>
      <TopBar />
      <MDBContainer>
        <MDBRow>
          {data && 
          <MDBCol className='col-xl-9 col-lg-9 col-md-12 col-sm-12' >
            {category && <p className='text-danger py-2'>{category}</p>}
            <h1 className='display-6'>{data.title}</h1>
            {author &&<p className='py-2'>লেখকঃ <strong>{author}</strong></p>}
            {data.timesince && <p className='py-2'>পোস্ট করা হয়েছেঃ <strong>{data.timesince}</strong></p>}
            <div className='border'></div>
            <img className='rounded my-2 mx-auto d-block' src={data.image} alt='..'/>
            <p>{data.description}</p>
            <div className='border'></div>
            <p className='py-2 text-justify'>{data.article}</p>
          </MDBCol>
          }
        </MDBRow>
      </MDBContainer>


      <Bottom />
    </>
  )
}

export default NewsDetailsScreen