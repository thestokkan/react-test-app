import "./Button.css";

interface Props {
    children?: React.ReactNode;
    image?: string;
    onClick: () => void;
    type?: "grid" | "image" | "icon" | "connect";
    className?: string;
}

const Button =({children, image, onClick, type, className}: Props) => {
    switch (type) {
        case "grid": return <button className="gridBtn" onClick={onClick}>{children}</button>;
        case "image":
            return <button className="imageBtn"><img  src={image} alt="my image" onClick={onClick}/></button>;
        case "icon": return <button className="iconBtn" onClick={onClick}>{children}</button>;
        case "connect": return <button className="connectBtn" onClick={onClick}>{children}</button>;
        default: return <button className="simpleBtn" onClick={onClick}>{children}</button>;
    }
}

export default Button;