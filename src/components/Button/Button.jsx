import classNames from "classnames";
import "./Button.scss";

export default function Button({ children, className, ...props }) {
    const Tag = props.href ? "a" : "button";

    const buttonAttr = {
        type: props.type || "button",
    };

    const linkAttr = {
        target: props.target || "_self",
        rel: props.target === "_blank" ? "noopener noreferrer" : undefined,
        href: props.href || "#",
    };

    const specificAttr = props.href ? linkAttr : buttonAttr;

    return (
        <Tag
            className={classNames(className, "btn", {
                "is-reset": props.isReset,
                "is-icon": props.isIcon,
                "is-nowrap": props.isNowrap,

                "is-default": props.theme === "default",
                "is-danger": !props.theme,
            })}
            {...specificAttr}
            aria-label={props["aria-label"] || props.title}
        >
            {children}
        </Tag>
    );
}
