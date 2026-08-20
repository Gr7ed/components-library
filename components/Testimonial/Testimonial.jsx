import { Children } from "react"
import classnames from "classnames"
import TestimonialImage from "./TestimonialImage"

export default function Testimonial({ children, className, ...rest }) {
    const items = Children.toArray(children)
    const image = items.find((child) => child?.type === TestimonialImage)
    const content = items.filter((child) => child?.type !== TestimonialImage)
    const testimonialClass = classnames("testimonial", className, image ? null : "testimonial-without-image")
    return (
        <div className="testimonial-container">
            <div
                className={testimonialClass}
                {...rest}
            >
                {image}
                <div className="testimonial-content">
                    {content}
                </div>
            </div>
        </div>
    )
}
