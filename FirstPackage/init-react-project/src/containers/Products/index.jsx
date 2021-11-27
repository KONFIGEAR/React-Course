import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import CustomCard from "../../components/CustomCard";
import { deleteProduct } from "../Form/actions";
import styles from "./index.module.css";

const Products = () => {
  const products = useSelector((store) => store.productState.products);
const dispatch = useDispatch()
  const handleClick = (id) => {
    dispatch(deleteProduct(id))
  };
  return (
    <section className={styles.section}>
      {products.map((item) => (
        <CustomCard
          // topTitle={item.topTitle}
          // title={item.title}
          // imgUrl={item.imgUrl}
          // price={item.price}
          // description={item.description}
          onClick={(event)=>handleClick(item.id)}
          {...item}
        />
      ))}
    </section>
  );
};

export default Products;
