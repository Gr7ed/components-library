import Toggle from "../Toggle/index"

export default function MenuDropdown({ children }) {
    return (
        <Toggle.On>
            <div className="menu-dropdown" role="menu">
                {children}
            </div>
        </Toggle.On>
    )
}