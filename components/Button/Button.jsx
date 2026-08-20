import classnames from "classnames"

export default function Button({ children, className, size, variant, type = "button", ...rest }) {
    const sizeClass = size && `button-${size}`
    const variantClass = variant && `button-${variant}`
    const allClasses = classnames("button", sizeClass, variantClass, className)

    return (
        <button type={type} className={allClasses} {...rest}>
            {children}
        </button>
    )
}