import Entry from "@/sections/Entry/Entry";
import Cta from "@/sections/Cta/Cta";
import Platforms from "@/sections/Platforms/Platforms";

export const metadata = {
    title: "Index page",
    description: "Description of Index page",
};

export default function () {
    return (
        <>
            <Entry />
            <Platforms />
            <Cta />
        </>
    );
}
