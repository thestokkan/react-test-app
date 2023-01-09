import "./Button.css";

type ButtonTypes = "grid" | "image" | "icon" | "connect" | "danger" | "default" | "primary";

export type ButtonProps = {
    children?: React.ReactNode;
    image?: string;
    onClick: () => void;
    type: ButtonTypes;
}

const Button = ({children, image, onClick, type}: ButtonProps) => {
    switch (type) {
        case "image":
            return <button className="image"><img src={image} alt="my image" onClick={onClick}/></button>;
        default:
            return (
                <button className={`${type}`}
                        onClick={onClick}
                >{children}</button>
            );
    }
}

export default Button;