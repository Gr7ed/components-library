import classnames from "classnames"

export default function Badge({ children, className, shape, variant, ...rest }) {
    const shapeClass = shape ? `badge-${shape}` : "badge-square"
    const variantClass = variant ? `badge-${variant}` : "badge-gray"
    const allClasses = classnames("badge", shapeClass, variantClass, className)

    return (
        <div className={allClasses} {...rest}>
            {children}
        </div>
    )
}