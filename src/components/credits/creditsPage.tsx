import { Breadcrumbs } from "../layout/breadcrumbs"
import { PageContent } from "../layout/pageContent"

export const Credits = () => {
    return (
        <PageContent>
            <Breadcrumbs currentPageName="Credits" />
            <h1>Credit where credit is due</h1>
            <h2>Inter Font</h2>
            <p>Big thanks to everyone who worked on the Inter font. I find this font easy to read and packed with useful features. I'm a fan!</p>
            <p><a href="https://rsms.me/inter/">Inter home page</a></p>

            <h2>Steelworks Vintage font</h2>
            <p>This looks like it was an experiment by its creator, but I absolutely love it! I used it for my site title. This page also links to other fonts this person made - definitely worth a look if you like fonts!</p>
            <p><a href="https://www.fontspace.com/steelworks-vintage-font-f24016">The Steelworks Vintage download page</a></p>
        </PageContent>
    )
}