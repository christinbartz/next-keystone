import ArticleItem from "./ArticleItem";

import articleStyles from "../styles/Article.module.css";

const ArticleList = ({ articles }) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map(article => {
        return <ArticleItem key={article.title} article={article} />;
      })}
    </div>
  );
};

export default ArticleList;
