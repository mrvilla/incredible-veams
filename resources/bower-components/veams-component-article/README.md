<p align="right">
    <a href="https://badge.fury.io/bo/veams-component-article"><img src="https://badge.fury.io/bo/veams-component-article.svg" alt="Bower version" height="20"></a>
    <a href="https://gitter.im/Sebastian-Fitzner/Veams?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge"><img src="https://badges.gitter.im/Sebastian-Fitzner/Veams.svg" alt="Gitter Chat" /></a>
</p>

# Article

## Description

The article component is a `wrap-with` partial to give you the possibility to put in every content you need. 

----------- 

## Installation 

### Installation with Veams

`veams install vc article`

### Installation with Bower

`bower install veams-component-article --save`

----------- 

## Fields

### Settings
- settings.articleContextClass {`String`} [default] - _Context class of component._
- settings.articleClasses {`String`} - _Modifier classes for component._
- settings.articleHeader.articleHeaderClasses {`String`} - _Classes for header element._
- settings.articleContentClasses {`String`} - _Classes for content div._
- settings.articleFooter.articleFooterClasses {`String`} - _Classes for footer element._


### Content 
- content.articleHeader {`Object`} - _Object which contains multiple elements_
- content.articleHeader.articleDate {`String`} - _Date string_
- content.articleHeader.articleDatetime {`String`} - _Date attribute_
- content.articleHeader.articleH1 {`String`} - _Header H1_
- content.articleHeader.articleH2 {`String`} - _Header H2_
- content.articleHeader.articleH3 {`String`} - _Header H3_
- content.articleHeader.articleIntro {`String`} - _Header Intro_
- content.articleFooter {`Object`} - _Object which contains multiple elements_
- content.articleFooter.articleFooterLink {`String`} - _Footer link_
