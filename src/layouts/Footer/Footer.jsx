import Button from "../../components/Button/Button";
import Icon from "../../components/Icon/Icon";
import "./Footer.scss";

export default function Footer() {
    const cols = [
        {
            title: "Home",
            links: [
                {
                    label: "Categories",
                    href: "#",
                },
                {
                    label: "Devices",
                    href: "#",
                },
                {
                    label: "Pricing",
                    href: "#",
                },
                {
                    label: "FAQ",
                    href: "#",
                },
            ],
        },
        {
            title: "Movies",
            links: [
                {
                    label: "Gernes",
                    href: "#",
                },
                {
                    label: "Trending",
                    href: "#",
                },
                {
                    label: "New Release",
                    href: "#",
                },
                {
                    label: "Popular",
                    href: "#",
                },
            ],
        },
        {
            title: "Shows",
            links: [
                {
                    label: "Gernes",
                    href: "#",
                },
                {
                    label: "Trending",
                    href: "#",
                },
                {
                    label: "New Release",
                    href: "#",
                },
                {
                    label: "Popular",
                    href: "#",
                },
            ],
        },
        {
            title: "Support",
            links: [
                {
                    label: "Contact Us",
                    href: "#",
                },
            ],
        },
        {
            title: "Subscription",
            links: [
                {
                    label: "Plans",
                    href: "#",
                },
                {
                    label: "Features",
                    href: "#",
                },
            ],
        },
    ];

    const socials = [
        {
            icon_name: "fb",
            href: "#",
        },
        {
            icon_name: "twitter",
            href: "#",
        },
        {
            icon_name: "linkedin",
            href: "#",
        },
    ];

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-navs">
                    {cols.map((col, index) => {
                        return (
                            <div className="footer-navs-col" key={index}>
                                <h5 className="footer-navs-title">
                                    {col.title}
                                </h5>
                                {col.links.map((link, index) => {
                                    return (
                                        <a
                                            className="footer-navs-link"
                                            href={link.href}
                                            key={index}
                                        >
                                            {link.label}
                                        </a>
                                    );
                                })}
                            </div>
                        );
                    })}

                    <div className="footer-navs-col">
                        <h5 className="footer-navs-title">Connect With Us</h5>

                        <div className="footer-socials">
                            {socials.map((social, index) => {
                                return (
                                    <Button
                                        className={"footer-socials-toggler"}
                                        isIcon
                                        href={social.href}
                                        key={index}
                                    >
                                        <Icon
                                            name={social.icon_name}
                                            hasFill
                                        ></Icon>
                                    </Button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="footer-divider"></div>
            </div>
        </footer>
    );
}
