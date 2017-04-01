// TODO work in progress

const articles = {
    'id1': {
        id: 'id1', 
        text: 'news 1', 
        tags: ['tag1', 'tag2'],   
    },
    'id2': {
        id: 'id2', 
        text: 'text2', 
        tags: ['tag2'],
    }
};

const orderIndex = ['id1', 'id2'];

const tagsIndex = {
    'tag1': ['id1'],
    'tag2': ['id1', 'id2'],
};

function addArticle(article) {
    const tags = article.tags;
    articles[article.id] = articles;

    tags.map(tagKey => tagsIndex[tagKey])
        .forEach(tag => tag.push(article.id));
}

function removeArticle(article) {
    const id = article.id;
    articles[id] = null;
    delete articles[id];

    clearArticleTags(article);
}

function clearArticleTags(article) {
    const tags = article.tags;

    function fixTagsIndex (articles) {
        const id = article.id;
        const index = articles.indexOf(id);
        articles.splice(index, 1);
    }

    tags.map(tagKey => tagsIndex[tagKey])
        .forEach(tagArticles => fixTagsIndex);
}

function modifyArticle(article) {
    const id = article.id;
    const oldArticle = articles[id];

    clearArticleTags(oldArticle);
    addArticle(article);
}

function searchArticles(tag) {
    const ids = tagsIndex[tag] || orderIndex;
    return ids.map(id => articles[id]);
}