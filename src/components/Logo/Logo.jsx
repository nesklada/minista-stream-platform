import classNames from "classnames";
import "./Logo.scss";

export default function Logo({ className, isLink = true } = {}) {
  const Tag = isLink ? "a" : "div";

  return (
    <Tag
      className={classNames(className, "logo")}
      {...(isLink ? { href: "/" } : {})}
    >
      <img src="/img/logo.svg" alt="StreamVibe" />
    </Tag>
  );
}
