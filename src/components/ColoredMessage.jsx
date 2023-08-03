export const ColoredMessage = ({ color, children }) => {
    const contentStyle = {
        color,
        fontSize: "20px",
        padding: "0.5rem",
    };

    return <p style={contentStyle}>{children}</p>;
};
