import Button from "../../components/Button/Button";
import "./Cta.scss";

export default function Cta({
    title = "Start your free trial today!",
    description = "This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.",
    href = "#",
} = {}) {
    return (
        <div className="container cta-outer">
            <div className="cta">
                <div className="cta-content">
                    <h2 className="cta-title">{title}</h2>
                    <p>{description}</p>
                </div>

                <Button href={href} isNowrap>
                    Start a Free Trail
                </Button>
            </div>
        </div>
    );
}
