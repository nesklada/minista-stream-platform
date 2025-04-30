import Button from "../../components/Button/Button";
import Section, {
    SectionHeader,
    SectionTitle,
} from "../../components/Section/Section";

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
        </Section>
    );
}
