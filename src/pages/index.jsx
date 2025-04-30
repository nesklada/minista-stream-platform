import Entry from "@/sections/Entry/Entry";
import Cta from "../sections/Cta/Cta";

export const metadata = {
    title: "Index page",
    description: "Description of Index page",
};

export default function () {
    return (
        <>
            <Entry />
            <Cta />
        </>
    );
}
