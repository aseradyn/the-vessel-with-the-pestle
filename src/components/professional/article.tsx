import { Breadcrumbs } from "../layout/breadcrumbs";
import { PageContent } from "../layout/pageContent";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import article from './sampleArticle';
import Article from '../legos/article';


const MarkdownArticle = () => {
    
    const articleTitle = "Article Title";

    return (
        <PageContent>
            <Breadcrumbs currentPageName={articleTitle} />
            <Article>
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>{article}</ReactMarkdown>
            </Article>
        </PageContent>
    )
}

export default MarkdownArticle;