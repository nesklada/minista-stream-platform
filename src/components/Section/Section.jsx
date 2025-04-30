import classNames from "classnames";
import "./Section.scss";

export default function Section({ className, children }) {
    return (
        <section className={classNames("section", className)}>
            {children}
        </section>
    );
}

export function SectionHeader({ className, children, isGrid }) {
    const Wrapper = isGrid ? "div" : <></>;

    return (
        <div
            className={classNames(className, "section-header", {
                "section-header-grid": isGrid,
            })}
        >
            {children}
        </div>
    );
}

export function SectionTitle({ children, tag, className }) {
    const Tag = tag || "h2";

    return (
        <Tag className={classNames(className, "section-title")}>{children}</Tag>
    );
}
