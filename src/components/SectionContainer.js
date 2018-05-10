import React, { Component } from 'react';


import { Card, CardImg, CardBody, CardTitle,
  CardSubtitle, CardText, Row, Col} from 'reactstrap';

export default class SectionContainer extends Component {

  viewStoryDetails = (storyUrl) => {
    this.props.loadStoryDetails(storyUrl);
  };

  displayCardImage = (item) => {
    if (item.media && item.media[0] && 
          item.media[0]['media-metadata'] && 
                    item.media[0]['media-metadata'][1]) {
      const itemMedia = item.media[0]['media-metadata'][1];
      return (<CardImg top src={itemMedia.url}/>);
    }
  };

	render() {
    const storyCards = this.props.sectionStories.map((item) => {
    if (item.url && item.title && item.abstract) {
      return (
        <Col key={item.id} md={3} style={ {paddingTop: '30px'} }>
          <a href="#/details">
            <Card onClick={() => this.viewStoryDetails(item.url)}>
              {this.displayCardImage(item)}
              <CardBody>
                <CardTitle>{item.title}</CardTitle>
                <CardText>{item.abstract}</CardText>
              </CardBody>
            </Card>
          </a>
        </Col>
        );
      }
    }); 

		return(
      <Row>
        {storyCards}
      </Row>);
	}
}
