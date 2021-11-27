const CustomButton = ({ type, className, onClick, children }) => (
  <button type={type} className={className} onClick={onClick}>
    {children}
  </button>
);

CustomButton.defaultProps = {
  type: "submit",
};
export default CustomButton ;
