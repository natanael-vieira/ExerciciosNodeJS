const articles = [
    {
        id: 1,
        title: 'Healttech de "telemedicina aumentada" chega ao Brasil',
        description: 'Loren ipsum, loren ipsum, loren ipsum, loren ipsum, loren ipsum, loren ipsum, loren ipsum, loren ipsum, loren ipsum, loren ipsum, loren ipsum, loren ipsum, loren ipsum, loren ipsum, loren ipsum, loren ipsum, loren ipsum, loren ipsum, loren ipsum, loren ipsum, loren ipsum, loren ipsum, loren ipsum, loren ipsum, loren ipsum.'
    },
    {
        id: 2,
        title: 'Testa: entregas caem com lockdown na China',
        description: 'Loren ipsum, loren ipsum, loren ipsum, loren ipsum, loren ipsum, loren ipsum, loren ipsum, loren ipsum, loren ipsum, loren ipsum, loren ipsum, loren ipsum, loren ipsum, loren ipsum, loren ipsum, loren ipsum, loren ipsum, loren ipsum, loren ipsum, loren ipsum, loren ipsum, loren ipsum, loren ipsum, loren ipsum, loren ipsum.'
    }
];

function getArticle() {
    return articles;
}

function getArticleById(articleId) {
    return articles.find(article => {
        article.id === Number(articleId)
    });
}

export {getArticle, getArticleById};