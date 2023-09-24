import Link from "next/link";
const ProductList = () => {
  return (
    <div className="container">
      <h1> Product List</h1>
      <ul className="lists">
        <li>
          <Link className="btn" href="/products/product-1">
            Product 1
          </Link>
        </li>
        <li>
          <Link className="btn" href="/products/product-2">
            Product 2
          </Link>
        </li>
        <li>
          <Link className="btn" href="/products/product-3">
            Product 3
          </Link>
        </li>
        <li>
          <Link className="btn" href="/products/product-4">
            Product 4
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ProductList;
