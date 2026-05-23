import Link from "next/link";

export default function ProductCard({ image, name, price }) {
  return (
    <div className="product-card">

      <div className="img-wrap">
        <img src={image} alt={name} />
      </div>

      <div className="prod-name">
        {name}
      </div>

      <div className="prod-desc">
        The goods of our stores are very reliable and we care about the customer
      </div>

      <div className="prod-price">
        {price}
      </div>

      <Link href="/cart" className="add-to-cart-btn">
        🛒 ADD TO CART
      </Link>

      <div className="prod-links">
        <a href="#">ADD TO WISH LIST</a>

        <Link href="/product">
          MORE DETAILS
        </Link>
      </div>

    </div>
  );
}