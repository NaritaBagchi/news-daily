import { MOST_VIEWED_TODAY_URL, SEARCH_STORIES_URL, LOAD_SECTION_STORIES, 
        ACTIVE_SECTION, LOAD_STORY_DETAILS, SECTIONS} from '../Constants';

import { transformationData } from '../Utility';

export function loadStoryDetails(storyUrl) {
  return {
    type: LOAD_STORY_DETAILS,
    storyUrl
  };
}

export function setActiveSection(section) {
  return {
    type: ACTIVE_SECTION,
    section
  };
}

function loadSectionStories(data) {
  return {
    type: LOAD_SECTION_STORIES,
    stories: data
  };
}

export function fetchSectionStories(selectedSection = SECTIONS[0]) {
  return function (dispatch) {
    const sectionName = (selectedSection.trim().length === 0 ? SECTIONS[0] : selectedSection);
    const mostRecentTodayUrl = MOST_VIEWED_TODAY_URL.replace('<sectionName>', sectionName);
    fetch(mostRecentTodayUrl)
      .then(function(resp) { return resp.json(); })
      .then(function(data) {
          dispatch(loadSectionStories(data.results));
          dispatch(setActiveSection(sectionName));
      });
    };
}

export function searchStories(searchKey) {
  return function (dispatch) {
    const searchUrl = SEARCH_STORIES_URL.replace('<searchKey>', searchKey);
    fetch(searchUrl)
    .then(function(resp) { return resp.json(); })
      .then(function(data) {
          const stories = transformationData(data.response.docs);
          dispatch(loadSectionStories(stories));
          dispatch(setActiveSection(''));
      });
    };
}