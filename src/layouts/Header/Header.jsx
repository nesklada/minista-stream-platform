import classNames from "classnames";

import Logo from "../../components/Logo/Logo";
import Icon from "../../components/Icon/Icon";
import Button from "../../components/Button/Button";

import "./Header.scss";

export default function Header({ url }) {
    const navs = [
        {
            label: "Home",
            href: "/",
        },
        {
            label: "Movies & Shows",
            href: "/movies",
        },
        {
            label: "Supports",
            href: "/supports",
        },
        {
            label: "Subscriptions",
            href: "/subscriptions",
        },
    ];

    return (
        <header className="header">
            <div className="container header-inner">
                <Logo />

                <nav className="header-menu">
                    {navs.map(({ href, label }, index) => (
                        <a
                            key={index}
                            className={classNames("header-link", {
                                "is-active": url === href,
                            })}
                            href={href}
                        >
                            {label}
                        </a>
                    ))}

                    <Button
                        className={
                            "header-menu-close hidden-tablet js_header-menu"
                        }
                        isIcon
                    >
                        <Icon name="close" hasFill></Icon>
                    </Button>
                </nav>

                <div className="header-actions">
                    <Button isIcon>
                        <Icon name="search" />
                    </Button>

                    <Button isIcon>
                        <Icon name="bell" />
                    </Button>

                    <Button
                        className={
                            "header-menu-toggler hidden-tablet js_header-menu"
                        }
                        isIcon
                    >
                        <Icon name="menu" hasFill />
                    </Button>
                </div>
            </div>
        </header>
    );
}
