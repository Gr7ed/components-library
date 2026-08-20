import classnames from "classnames"

export default function TestimonialAuthor({ author, className, ...rest }) {
    const classNames = classnames("testimonial-author", className)
    return (
        <div className={classNames} {...rest}>
            <h3 className="testimonial-author-name">{author.name}</h3>
            <p className="testimonial-author-title">{author.title}</p>
        </div>
    )
}
