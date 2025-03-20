export default function TabButton({children, onSelect, isSelected, id}) {
    return (
        <li>
            <button id={id} className={isSelected ? 'active' : ''} onClick={onSelect}>
                {children}
            </button>
        </li>
    );
}
