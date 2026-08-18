import classnames from "classnames"

export default function BannerText({ children, className, ...rest }) {
    return (
        <div className={classnames("banner-text", className)} {...rest}>
            {children}
        </div>
    )
}
