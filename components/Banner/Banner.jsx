import classnames from "classnames"
import {
    BsCheckCircleFill,
    BsExclamationTriangleFill,
    BsInfoCircleFill,
    BsXCircleFill,
} from "react-icons/bs"

const bannerIcons = {
    success: BsCheckCircleFill,
    warning: BsExclamationTriangleFill,
    neutral: BsInfoCircleFill,
    danger: BsXCircleFill,
}

export default function Banner({ children, className, variant = "neutral", ...rest }) {
    const bannerClass = classnames("banner", `banner-${variant}`, className)
    const iconClass = classnames("banner-icon", `banner-icon-${variant}`, className)
    const Icon = bannerIcons[variant] || bannerIcons.neutral

    return (
        <div className={bannerClass} {...rest}>
            <Icon className={iconClass} aria-hidden="true" />
            <div className="banner-content">
                {children}
            </div>
        </div>
    )
}