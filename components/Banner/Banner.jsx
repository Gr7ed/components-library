import classnames from "classnames"
import { Children, cloneElement } from "react"
import {
    BsCheckCircleFill,
    BsExclamationTriangleFill,
    BsInfoCircleFill,
    BsXCircleFill,
} from "react-icons/bs"
import BannerText from "./BannerText"

const bannerIcons = {
    success: BsCheckCircleFill,
    warning: BsExclamationTriangleFill,
    neutral: BsInfoCircleFill,
    danger: BsXCircleFill,
}

export default function Banner({ children, className, variant = "neutral", ...rest }) {
    const bannerClass = classnames("banner", `banner-${variant}`, className)
    const iconClass = classnames("banner-icon", `banner-icon-${variant}`)
    const Icon = bannerIcons[variant] || bannerIcons.neutral
    const content = Children.map(children, (child) => {
        if (child?.type === BannerText) {
            return cloneElement(child, { variant })
        }

        return child
    })

    return (
        <div className={bannerClass} {...rest}>
            <Icon className={iconClass} aria-hidden="true" />
            <div className="banner-content">
                {content}
            </div>
        </div>
    )
}