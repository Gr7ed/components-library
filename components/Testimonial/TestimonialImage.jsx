import classnames from "classnames"

export default function TestimonialImage({ src, alt, className, ...rest }) {
    return (
        <div className={classnames("testimonial-image", className)} {...rest}>
            <img src={src} alt={alt} />
        </div>
    )
}
