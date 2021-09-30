// styles
import "./styles.scss"

function PrimaryButton({ className, onClick, disabled, type, btnIcon, svgIcon }) {
  return (
    <>
      <button
        className={`btn-style ${className}`}
        onClick={onClick}
        disabled={disabled}
        type={type}
      >
        {btnIcon &&
          <img className="btnIcon" src={btnIcon} alt="icon" width="20" height="20" />
        }
        {svgIcon && svgIcon}
      </button>
    </>
  )
}
export default PrimaryButton