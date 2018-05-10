export const API_KEY = 'api-key=8e6e48bfafae4f528831fe9c79a7863b';
export const SERVER_URL = 'https://api.nytimes.com/svc/';

export const MOST_VIEWED_TODAY_URL = `${SERVER_URL}mostpopular/v2/mostviewed/<sectionName>/1.json?${API_KEY}`;
export const SEARCH_STORIES_URL = `${SERVER_URL}search/v2/articlesearch.json?${API_KEY}&q=<searchKey>&sort=newest&fl=snippet, web_url, headline, _id`;

export const LOAD_STORY_DETAILS = 'LOAD_STORY_DETAILS';
export const LOAD_SECTION_STORIES = 'LOAD_SECTION_STORIES';
export const ACTIVE_SECTION = 'ACTIVE_SECTION';

export const SECTIONS = [ 'World', 'U.S.', 'Business Day', 'Your Money',
						'Sports', 'Times Insider', 'Science', 'Technology',
						'Health', 'Books', 'Opinion', 'Travel'];