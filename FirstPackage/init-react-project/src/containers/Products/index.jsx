import CustomCard from "../../components/CustomCard";
import styles from "./index.module.css";
import { products } from "../../utils/constants";
const index = () => {
  return (
    <section className={styles.section}>
      {products.map((item) => (
        <CustomCard
          //   topTitle={item.topTitle}
          //   title={item.title}
          //   imgUrl={item.imgUrl}
          //   price={item.price}
          //   description={item.description}
        {...item}/>
         
      ))}
    </section>
  );
};

export default index;
