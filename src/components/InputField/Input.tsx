import './Input.css';

interface Props {
    type: string;
    className?: string;
    id: string;
    placeholderText?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown: (event: React.KeyboardEvent) => void;
    value: string;

}

const Input = ({type, id, className, placeholderText, onChange, onKeyDown, value}: Props) => {
    return (
        <input
            type={type}
            id={id}
            className={className}
            placeholder={placeholderText}
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={value}
        />
    );
};

export default Input;