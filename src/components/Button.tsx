interface ButtonProps {
    onPress: () => void;
    title: string;
}

export default function Button({ title, onPress}: ButtonProps) {
    <button onClick={onPress}>
        {title}
    </button>
}