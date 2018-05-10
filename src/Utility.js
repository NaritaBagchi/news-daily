export function transformationData(dataSet) {
	return dataSet.map((dataItem) => {
	    const story = {
	      url: dataItem.web_url,
	      title: dataItem.headline.main,
	      abstract: dataItem.snippet,
	      id: dataItem._id
	    };
	    return story;
	});
}