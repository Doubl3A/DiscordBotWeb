import textContent from "@/values/text-content";
import ErrorBanner from "@/components/organisms/ErrorBanner";

export default function NotFound() {
    const content = textContent.errorPage;

    return (
        <>
            <ErrorBanner {...content.banner}/>
        </>
    );
}