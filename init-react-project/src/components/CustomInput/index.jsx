import style from "./style.module.css";

const CustomInput = ({
  isTextArea,
  id,
  type,
  placeholder,
  required,
  onChange,
  ...rest
}) => {
  return (
    <div className={style.inputHolder}>
      {!isTextArea ? (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          required={required}
          onChange={onChange}
          {...rest} 
        />
      ) : (
        <textarea
          id={id}
          type={type}
          placeholder={placeholder}
          required={required}
          onChange={onChange}
          {...rest}
        />
      )}
    </div>
  );
};

CustomInput.defaultProps = {
  type: "text",
  placeholder: "text",
  isTextArea: false,
  required: true,
};

export default CustomInput;
