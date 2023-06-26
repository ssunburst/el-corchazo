import Link from 'next/link';
import getColor from '@/utils/color';
import TopicTag from './TopicTag';
import Teaser from './Teaser';

const MainArticle = ({article}) => {

    let bgColor = getColor(article.topic.id);

    return ((
            <div className="bg-gray-50 hover:bg-gray-100 flex flex-col justify-start p-4 py-14 hover:shadow-lg space-y-2 mx-2 lg:mx-0">
                <div className="text-xl">
                    <TopicTag topic={article.topic}/>
                </div>
                <div className="text-2xl lg:text-3xl">
                    <Teaser teaser={article.teaser}/>
                </div>
                <div className="text-4xl sm:text-5xl flex-wrap lg:text-7xl">
                    <Link href={`/articulos/${article.id}`}><h2 className="break-words">{article.title}</h2></Link>
                </div>
            </div>
        )
    );
}

export default MainArticle