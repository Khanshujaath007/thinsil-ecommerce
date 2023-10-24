import styled from "styled-components";
import Product from "./Product";
import { products } from "../data";

/*
Renders a list of products 
can be fetch from API or products dummy array can be used
*/

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

function Products({ category, filters, sort }) {
  return (
    <Container>
      {products.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
}

export default Products;
