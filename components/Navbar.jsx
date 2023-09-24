import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <nav>
        <p>Next.js</p>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/cart">Cart</Link>
          </li>
          <li>
            <Link href="/checkout">Checkout</Link>
          </li>
          <li>
            <Link href="/order">Order</Link>
          </li>
          <li>
            <Link href="/account">Account</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/register">Register</Link>
          </li>
          <li>
            <Link href="/search">Search</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
