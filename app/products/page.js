import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';

export default function ProductsPage() {
  // Make sure this is inside the component function
  const products = [
    { name: 'Tomato', price: 2, image: '/images/tomato.jpg' },
    { name: 'Potato', price: 1, image: '/images/potato.jpg' },
    { name: 'Apple', price: 3, image: '/images/apple.jpg' },
  ];

  return (
    <>
      <Header />
      <div className="container">
        <h2>Products</h2>
        <div className="product-list">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </>
  );
}
