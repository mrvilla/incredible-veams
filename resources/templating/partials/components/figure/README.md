<p align="right">
    <a href="https://badge.fury.io/bo/veams-component-figure"><img src="https://badge.fury.io/bo/veams-component-figure.svg" alt="Bower version" height="20"></a>
    <a href="https://gitter.im/Sebastian-Fitzner/Veams?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge"><img src="https://badges.gitter.im/Sebastian-Fitzner/Veams.svg" alt="Gitter Chat" /></a>
</p>

# Figure

## Description

The `<figure>` element is intended to be used in conjunction with the `<figcaption>` element to mark up diagrams, illustrations, photos code examples and other things. The specs says this:

> The HTML `<figure>` element represents self-contained content, frequently with a caption (`<figcaption>`), and is typically referenced as a single unit. 

The Figure component contains the picture and video component as dependency and prints out every necessary field for html figures. 

-----------

## Requirements

- [veams-component-picture](https://github.com/Veams/veams-component-picture) - _Picture component in Veams._
- [veams-component-video](https://github.com/Veams/veams-component-video) - _Video component in Veams._

-----------

## Installation 

### Installation with Veams

`veams install vc figure`

### Installation with Bower

`bower install veams-component-figure --save`

----------- 

## Fields

#### Settings

- settings.figureContextClass {`String`} [default] - _Context class of the rte._
- settings.figureClasses {`String`} - _Modifier classes for the rte._
- settings.figureId {`String`} - _Just pass a custom string when using an id for the figure._

#### Content 

- content.figureCaption (`Object`) - _Contains multiple elements_
- content.figureCaption.figureCaptionClasses (`String`) - _Modifier classes_
- content.figureCaption.captionHeadline (`String`) - _Headline_
- content.figureCaption.captionContent (`String`) - _Content_

##### Nested Data Fields

- content.figurePicture (Object) - @see [requirements](#requirements)
- content.figureVideo (Object) - @see [requirements](#requirements)

