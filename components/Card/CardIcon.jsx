import classnames from "classnames"

export default function CardIcon({ children, className, ...rest }) {
    return (
        <div className={classnames("card-icon", className)} {...rest}>
            {children}
        </div>
    )
}
