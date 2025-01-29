export default interface PropsButton {

    texto: string;
    type?: "submit" | "reset" | "button" | undefined;
    onClick?: () => void;
}