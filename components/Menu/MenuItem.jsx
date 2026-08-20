export default function MenuItem({ children, className, ...rest }) {
    return (
        <div className={className ? `menu-item ${className}` : "menu-item"} role="menuitem" {...rest}>
            {children}
        </div>
    )
}