import Icon from "@/components/Icon/Icon";
import Section, {
    SectionHeader,
    SectionTitle,
} from "@/components/Section/Section";
import "./Platforms.scss";

export default function () {
    const platforms = [
        {
            icon: "phone",
            title: "Smartphone",
            description:
                "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
        },
        {
            icon: "tablet",
            title: "Tablet",
            description:
                "StreamVibe is optimized for tablet devices, offering a responsive interface and immersive viewing experience on larger touchscreens.",
        },
        {
            icon: "smarttv",
            title: "Smart TV",
            description:
                "Enjoy your favorite content directly on your Smart TV. StreamVibe supports major TV platforms like Android TV, Samsung Tizen, and LG webOS.",
        },
        {
            icon: "laptop",
            title: "Laptop",
            description:
                "Access StreamVibe on any laptop through your preferred web browser. Whether it's Windows, macOS, or Linux — streaming is seamless and high-quality.",
        },
        {
            icon: "gaming-console",
            title: "Gaming Console",
            description:
                "StreamVibe is compatible with popular gaming consoles like PlayStation and Xbox. Switch from gaming to streaming with ease.",
        },
        {
            icon: "vr",
            title: "VR Headset",
            description:
                "Step into a new dimension of entertainment with StreamVibe VR. Watch shows and movies in a fully immersive virtual environment.",
        },
    ];

    return (
        <Section className="container platforms">
            <SectionHeader>
                <SectionTitle className="h3">
                    We Provide you streaming experience across various devices.
                </SectionTitle>

                <p>
                    With StreamVibe, you can enjoy your favorite movies and TV
                    shows anytime, anywhere.
                </p>
            </SectionHeader>

            <div className="platforms-cards">
                {platforms.map(({ icon, title, description }, index) => (
                    <PlatformCard
                        key={index}
                        icon={icon}
                        title={title}
                        description={description}
                    />
                ))}
            </div>
        </Section>
    );
}

function PlatformCard({ title, icon, description }) {
    return (
        <div className="platform-card">
            <div className="platform-card-header">
                <div className="platform-card-icon">
                    <Icon name={icon} hasFill />
                </div>
                <h4 className="platform-card-title">{title}</h4>
            </div>

            <p>{description}</p>
        </div>
    );
}
