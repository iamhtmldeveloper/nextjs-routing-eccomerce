import Link from "next/link";

const ProductsDetails = ({ params }) => {
  return (
    <div className="container">
      <h1>Products {params.name}</h1>
      <Link className="btn" href="/products/list">
        Back
      </Link>
    </div>
  );
};

export default ProductsDetails;
