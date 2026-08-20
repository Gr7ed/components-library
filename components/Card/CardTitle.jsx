import classnames from "classnames"

export default function CardTitle({ children, className, ...rest }) {
    return (
        <div className={classnames("card-title", className)} {...rest}>
            {children}
        </div>
    )
}
