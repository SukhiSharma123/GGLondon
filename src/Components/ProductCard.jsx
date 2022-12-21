import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { PRODUCT_DATA } from "../Data/products";

function ProductCard() {
  return (
    <div className="container-flex" id="products">
      <h2 style={{ textAlign: "center", marginTop: "5px" }}>Our Products</h2>
      <div className="row">
        {PRODUCT_DATA.map((data) => {
          return (
            <div
              className="col-xl-3 col-lg-3 col-md-6"
              style={{ padding: "5px" }}
            >
              <Card style={{ width: "100%" }} key={data.id}>
                <Card.Img
                  variant="top"
                  src={data.image}
                  style={{ width: "100%", height: "250px" }}
                />
                <Card.Body>
                  <Card.Title>{data.name}</Card.Title>
                  <Card.Text></Card.Text>
                  <a href={data.link} target="_blank" rel="noreferrer">
                    <Button
                      variant="primary"
                      style={{ width: "100%", textAlign: "center" }}
                    >
                      Buy Now
                    </Button>
                  </a>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductCard;
