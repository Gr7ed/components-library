import { Children } from "react"
import classnames from "classnames"
import CardIcon from "./CardIcon"

export default function Card({ children, className, ...rest }) {
    const items = Children.toArray(children)
    const icon = items.find((child) => child?.type === CardIcon)
    const content = items.filter((child) => child?.type !== CardIcon)

    return (
        <div className="card-container">
            <div className={classnames("card", className)} {...rest}>
                {icon}
                <div className="card-content">
                    {content}
                </div>
            </div>
        </div>
    )
}
