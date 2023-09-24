import Link from "next/link";

const Products = () => {
  return (
    <div className="container">
      <h1>Products</h1>
      <Link
        className="bg-teal-600 py-3 px-6 inline-block text-[#fff] mt-8"
        href="/products/list"
      >
        See Projects
      </Link>
    </div>
  );
};

export default Products;
