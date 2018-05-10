import update from 'immutability-helper';
import { LOAD_SECTION_STORIES, ACTIVE_SECTION, SECTIONS,
        LOAD_STORY_DETAILS } from '../Constants'

const initialState = {
  sectionStories: [],
  activeSection: SECTIONS[0],
  storyDetailsUrl: ''
};

export const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_SECTION_STORIES: return update(state, {
			sectionStories: {$set: action.stories}
  		});
  	case ACTIVE_SECTION : return update(state, {
			activeSection: {$set: action.section}
  	});
    case LOAD_STORY_DETAILS: return update(state, {
      storyDetailsUrl: {$set: action.storyUrl}
    });
  	default: return state;
	}
};