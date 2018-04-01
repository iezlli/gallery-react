'use strict';

var React = require('react/addons');
// var ReactTransitionGroup = React.addons.TransitionGroup;

// CSS
require('normalize.css');
require('../styles/main.scss');

//get image data
var imageDatas = require('../data/imageDatas.json');

// 利用自执行函数， 将图片名信息转成图片URL路径信息
imageDatas = (function genImageURL(imageDatasArr) {
    for (var i = 0, j = imageDatasArr.length; i < j; i++) {
        var singleImageData = imageDatasArr[i];

        singleImageData.imageURL = require('../images/' + singleImageData.fileName);

        imageDatasArr[i] = singleImageData;
    }

    return imageDatasArr;
})(imageDatas);

var ImgFigure = React.createClass({
  render: function(){
    return (
      <figure>
        <img src={this.props.data.imageURL} alt={this.props.data.title}
        />
        <figcaption>
          <h2>{this.props.data.title}</h2>
        </figcaption>
      </figure>
      );
  }
});

var GalleryReactApp = React.createClass({
  render: function() {

    var controllerUnits = [],
    imgFigures = [];

    imageDatas.forEach(function(value){
      imgFigures.push(<ImgFigure data={value}/>);
    });


    return (
      <section className="stage">
        <section className="img-sec">
          {imgFigures}
        </section>
        <nav className="controller-nav">
            {controllerUnits}
        </nav>

      </section>
    );
  }
});
React.render(<GalleryReactApp />, document.getElementById('content')); // jshint ignore:line

module.exports = GalleryReactApp;
