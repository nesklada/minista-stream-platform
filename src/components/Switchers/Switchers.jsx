import classNames from "classnames";
import "./Switchers.scss";

export default function Swithchers({ items = [] }) {
    return (
        <div className="switchers">
            {items.map(({ label, isActive }) => (
                <button
                    className={classNames("switchers-control", {
                        "is-active": isActive,
                    })}
                >
                    {label}
                </button>
            ))}
        </div>
    );
}
