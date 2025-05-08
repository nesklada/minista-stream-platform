import Accordion from "../../components/Accordion/Accordion";
import Button from "../../components/Button/Button";
import Section, {
    SectionHeader,
    SectionTitle,
} from "../../components/Section/Section";
import "./Faq.scss";

const data = [
    {
        question: "What is StreamVibe?",
        answer: "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
    },
    {
        question: "How much does StreamVibe cost?",
        answer: "StreamVibe offers several subscription plans starting at $9.99 per month, depending on the features and content access you choose.",
    },
    {
        question: "What content is available on StreamVibe?",
        answer: "StreamVibe provides a wide variety of content including the latest movies, popular TV series, documentaries, and exclusive originals.",
    },
    {
        question: "How can I watch StreamVibe?",
        answer: "You can watch StreamVibe on a variety of devices including smartphones, tablets, smart TVs, game consoles, and through web browsers.",
    },
    {
        question: "How do I sign up for StreamVibe?",
        answer: "To sign up, visit the StreamVibe website or download the app, then follow the registration process by providing your email and payment details.",
    },
    {
        question: "What is the StreamVibe free trial?",
        answer: "StreamVibe offers a 7-day free trial for new users, allowing access to all features and content before committing to a subscription.",
    },
    {
        question: "How do I contact StreamVibe customer support?",
        answer: "You can reach StreamVibe support via live chat on the website, email at support@streamvibe.com, or through the help section in the app.",
    },
    {
        question: "What are the StreamVibe payment methods?",
        answer: "StreamVibe accepts major credit and debit cards, PayPal, and some digital wallets depending on your location.",
    },
];

export default function () {
    return (
        <Section className={"container"}>
            <SectionHeader isGrid>
                <div>
                    <SectionTitle className="h3">
                        Frequently Asked Questions
                    </SectionTitle>

                    <p>
                        Got questions? We've got answers! Check out our FAQ
                        section to find answers to the most common questions
                        about StreamVibe.
                    </p>
                </div>

                <div>
                    <Button href="#" isNowrap>
                        Ask a Question
                    </Button>
                </div>
            </SectionHeader>

            <div className="faq-body">
                {data.map(({ question, answer }, index) => (
                    <Accordion
                        key={index}
                        question={question}
                        answer={answer}
                    />
                ))}
            </div>
        </Section>
    );
}
