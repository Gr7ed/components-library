import classnames from "classnames"
import {
    BsCheckCircle,
    BsExclamationTriangle,
    BsInfoCircle,
    BsXCircle,
} from "react-icons/bs"

const bannerIcons = {
    success: BsCheckCircle,
    warning: BsExclamationTriangle,
    neutral: BsInfoCircle,
    danger: BsXCircle,
}

export default function Banner({ children, className, type = "neutral", ...rest }) {
    const bannerClass = classnames("banner", `banner-${type}`, className)
    const Icon = bannerIcons[type] || bannerIcons.neutral

    return (
        <div className={bannerClass} {...rest}>
            <Icon className="banner-icon" aria-hidden="true" />
            <div className="banner-content">
                {children}
            </div>
        </div>
    )
}