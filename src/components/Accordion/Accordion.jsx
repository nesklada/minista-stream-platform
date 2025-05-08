import "./Accordion.scss";

export default function ({ question, answer }) {
    return (
        <div className="accordion-holder">
            <div className="accordion" data-accordion>
                <div className="accordion-header" data-accordion-toggler>
                    <div className="accordion-counter"></div>
                    <h5 className="accordion-question">{question}</h5>
                    <i className="accordion-icon"></i>
                </div>
                <div className="accordion-body" data-accordion-toggle>
                    <div className="accordion-answer">{answer}</div>
                </div>
            </div>
        </div>
    );
}
