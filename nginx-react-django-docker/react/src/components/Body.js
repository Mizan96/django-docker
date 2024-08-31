import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "./body/Slider";
import NewsList from "./body/NewsList";
import Videos from "./Videos";
import { useSelector, useDispatch } from "react-redux";
import getNewsFromServer from "../store/article-actions";
import getVideosFromServer from "../store/videos-action";

function Body() {
  const articles = useSelector((state) => state.news.data);
  const videos = useSelector((state) => state.videos.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewsFromServer());
    dispatch(getVideosFromServer());
  }, [dispatch]);

  console.log(articles);

  return (
    <div id="body">
      <Container>
        <Row className="border-bottom py-2 border-2">
            <Slider />
        </Row>

        <Row className="border-bottom p-2">
          <p className="display-6 text-danger py-2">সাম্প্রতিক সংবাদ</p>
          {articles.length > 0 &&
            articles.slice(0).reverse().map((article) => {
              return (
                <Col lg={3} className="my-2">
                  <NewsList
                    key={article.id}
                    id={article.id}
                    image={article.image}
                    title={article.title}
                    article={article.article}
                  />
                </Col>
              );
            })}
        </Row>

        <Row>
          <Container>
            <p className="display-6 text-danger py-2">ভিডিও</p>
            {videos.slice(0).reverse().map((video) => (
              <Videos videoSource={video.youtubr_link} />
            ))}
          </Container>
        </Row>
      </Container>
    </div>
  );
}

export default Body;
