// styles
import "./styles.scss"

function PrimaryInput({ className, type, placeholder, name, value, onChange }) {
  return (
    <>
      <input
        className={`primary-input ${className}`}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </>
  )
}
export default PrimaryInput;