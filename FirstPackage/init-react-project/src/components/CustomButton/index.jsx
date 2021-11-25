const index = ({ type, className, onClick, children }) => (
  <button type={type} className={className} onClick={onClick}>
    {children}
  </button>
);

index.defaultProps = {
  type: "submit",
};
export default index;
