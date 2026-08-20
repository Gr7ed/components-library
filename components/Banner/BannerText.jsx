import classnames from "classnames"

export default function BannerText({ children, className, variant = "neutral", ...rest }) {
    const bannerTextClass = classnames("banner-text", `banner-text-${variant}`, className)

    return (
        <div className={bannerTextClass} {...rest}>
            {children}
        </div>
    )
}
