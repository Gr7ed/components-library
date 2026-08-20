import classnames from "classnames"

export default function CardText({ children, className, ...rest }) {
    return (
        <div className={classnames("card-text", className)} {...rest}>
            {children}
        </div>
    )
}
