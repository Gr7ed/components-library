import classnames from "classnames"

export default function BannerTitle({ children, className, ...rest }) {
    return (
        <div className={classnames("banner-title", className)} {...rest}>
            {children}
        </div>
    )
}
