import classnames from "classnames"

export default function TestimonialText({ children, className, ...rest }) {
    return (
        <div className={classnames("testimonial-text", className)} {...rest}>
            {children}
        </div>
    )
}
