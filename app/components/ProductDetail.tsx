// app/components/ProductDetail.tsx
import Image from "next/image";

interface ProductDetailProps {
  image: string;
  name: string;
  price: string;
}

const ProductDetail = ({ image, name, price }: ProductDetailProps) => {
  return (
    <div>
      {/* Add some error handling */}
      {image ? (
        <Image src={image} alt={name} />
      ) : (
        <p>Error: Image path is missing.</p>
      )}
      <h1>{name}</h1>
      <p>{price}</p>
    </div>
  );
};

export default ProductDetail;
