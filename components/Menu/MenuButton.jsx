import Button from "../Button/Button"
import Toggle from "../Toggle/index"

export default function MenuButton({ children, ...rest }) {
    
    return (
        <Toggle.Button>
            <Button
                className="menu-button"
                aria-haspopup="menu"
                {...rest}
            >
                {children}
            </Button>
        </Toggle.Button>
    )
}