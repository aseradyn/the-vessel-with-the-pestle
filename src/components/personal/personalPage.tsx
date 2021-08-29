import { Breadcrumbs } from "../layout/breadcrumbs"
import { PageContent } from "../layout/pageContent"

export const Personal = () => {
    return (
        <PageContent>
            <Breadcrumbs currentPageName="Personal" />
            <p>Personal</p>
        </PageContent>
    )
}