import styles from "./index.module.css";
import CustomButton from "../CustomButton";
import { defaultProps } from "./constants";
import PropTypes from 'prop-types';

const index = ({ topTitle, title, imgUrl, description, price }) => {
  return (
    <div className={styles.main}>
      <h3 className={styles.h3}>{topTitle}</h3>
      <img className={styles.img} src={imgUrl} alt="flower red" />
      <h4> {title}</h4>
      <p className={styles.p}>{description}</p>
      <p>A Partir</p>
      <h3> {price}</h3>

      <CustomButton />
    </div>
  );
};

index.defaultProps = {
  ...defaultProps,
};

index.propTypes = {
  title: PropTypes.string.isRequired
};
export default index;
