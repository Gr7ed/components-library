import { useContext } from "react"
import { ToggleContext } from "./Toggle"

export default function ToggleButton({ children, ...rest }) {
    const { on, toggle } = useContext(ToggleContext)

    return (
        <div
            aria-pressed={on}
            onClick={toggle}
            {...rest}
        >
            {children}
        </div>
    )
}