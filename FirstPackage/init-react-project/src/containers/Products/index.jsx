import { useSelector } from "react-redux";
import CustomCard from "../../components/CustomCard";
import styles from "./index.module.css";

const Products = () => {
  const products = useSelector((store) => store.productState.products);
  return (
    <section className={styles.section}>
      {products.map((item) => (
        <CustomCard
          // topTitle={item.topTitle}
          // title={item.title}
          // imgUrl={item.imgUrl}
          // price={item.price}
          // description={item.description}
          {...item}
        />
      ))}
    </section>
  );
};

export default Products;
