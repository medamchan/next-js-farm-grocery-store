import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <h1>Farmer Grocery Store</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}
