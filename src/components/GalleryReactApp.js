'use strict';

var React = require('react/addons');
// var ReactTransitionGroup = React.addons.TransitionGroup;

// CSS
require('normalize.css');
require('../styles/main.scss');

//get image data
var imageDatas = require('../data/imageDatas.json');

// var imageURL = require('../images/yeoman.png');

function getImageURL(imageDataArr) {
  // body...
  for (var i = 0, j = imageDataArr.length; i < j; i++){
    var singleImageData = imageDataArr[i];
    singleImageData.imageURL = require('../images/' + singleImageData.fileName);
    imageDataArr[i] = singleImageData;
    return imageDataArr;
  }
}

imageDatas = getImageURL(imageDatas);

var GalleryReactApp = React.createClass({
  render: function() {
    return (
      <section className="stage">
        <section className="img-sec">
        </section>
        <nav className="controller-nav"></nav>

      </section>
    );
  }
});
React.render(<GalleryReactApp />, document.getElementById('content')); // jshint ignore:line

module.exports = GalleryReactApp;
