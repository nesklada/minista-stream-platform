import Section, {
    SectionHeader,
    SectionTitle,
} from "@/components/Section/Section";
import Swithchers from "@/components/Switchers/Switchers";
import Button from "../../components/Button/Button";
import "./Plan.scss";

const switchers = [{ label: "Monthly", isActive: true }, { label: "Yearly" }];
const plans = [
    {
        title: "Basic Plan",
        text: "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
        price: "$9.99",
    },
    {
        title: "Standard Plan",
        text: "Access to a wider selection of movies and shows, including most new releases and exclusive content.",
        price: "$12.99",
    },
    {
        title: "Premium Plan",
        text: "Access to a widest selection of movies and shows, including all new releases and Offline Viewing.",
        price: "$14.99",
    },
];

export default function () {
    return (
        <Section className={"container"}>
            <SectionHeader>
                <SectionTitle>
                    Choose the plan that's right for you
                </SectionTitle>

                <div className="d-flex align-items-start justify-content-between">
                    <div style={{ maxWidth: "1010px" }}>
                        <p>
                            Join StreamVibe and select from our flexible
                            subscription options tailored to suit your viewing
                            preferences. Get ready for non-stop entertainment!
                        </p>
                    </div>

                    <Swithchers items={switchers} />
                </div>
            </SectionHeader>

            <div className="plans">
                {plans.map((plan) => {
                    return (
                        <div className="plancard">
                            <div className="plancard-header">
                                <h4 className="plancard-title">{plan.title}</h4>
                                <p>{plan.text}</p>
                            </div>

                            <div
                                className="text-nowrap"
                                style={{ marginTop: "auto" }}
                            >
                                <span className="plancard-price">
                                    {plan.price}
                                </span>
                                <span>&nbsp;/month</span>
                            </div>

                            <div className="plancard-controls">
                                <Button theme="default">
                                    Start Free Trial
                                </Button>
                                <Button>Choose Plan</Button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Section>
    );
}
