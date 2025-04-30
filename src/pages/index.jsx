import Entry from "@/sections/Entry/Entry";
import Cta from "@/sections/Cta/Cta";
import Platforms from "@/sections/Platforms/Platforms";
import Faq from "@/sections/Faq/Faq";

export const metadata = {
    title: "Index page",
    description: "Description of Index page",
};

export default function () {
    return (
        <>
            <Entry />
            <Platforms />
            <Faq />
            <Cta />
        </>
    );
}
