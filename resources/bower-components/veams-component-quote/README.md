<p align="right">
    <a href="https://badge.fury.io/bo/veams-component-quote"><img src="https://badge.fury.io/bo/veams-component-quote.svg" alt="Bower version" height="20"></a>
    <a href="https://gitter.im/Sebastian-Fitzner/Veams?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge"><img src="https://badges.gitter.im/Sebastian-Fitzner/Veams.svg" alt="Gitter Chat" /></a>
</p>

# Quote

## Description

A simple quote component. The specs says:

> The `<blockquote>` element represents a section that is quoted from another source.
Content inside a `<blockquote>` must be quoted from another source, whose address, if it has one, may be cited in the cite attribute

-----------

## Installation

### Installation with Veams

`veams install vc quote`

### Installation with Bower

`bower install veams-component-quote --save`

-----------

## Fields

### Settings
- settings.quoteContextClass {`String`} [default] - _Context class of component._
- settings.quoteClasses {`String`} - _Modifier classes for component._

### Content
- content.quoteContent {`String`} - _Content text in blockquote._
- content.quoteAuthor {`String`} - _Author of quote._