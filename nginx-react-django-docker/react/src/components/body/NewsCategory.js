import { useDispatch, useSelector } from "react-redux";
import Bottom from "../Bottom";
import TopBar from "../TopBar";
import { Row, Col, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import getCategoryFromServer from "../../store/category-list-action";
import NewsList from "./NewsList";

function NewsCategory() {
  const {category} = useParams();
  console.log('Category: ', category);
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.category.data );
  useEffect(() => {
    dispatch(getCategoryFromServer(category));
  }, [dispatch,category]);

  return (
    <>
      <TopBar />
      <Container>

     
      <Row className="border-bottom p-2">
          <p className="display-6 text-danger py-2">{category}</p>
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
        </Container>
      <Bottom />
    </>
  );
}

export default NewsCategory;
