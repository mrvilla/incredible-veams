<p align="right">
    <a href="https://badge.fury.io/bo/veams-component-pagination"><img src="https://badge.fury.io/bo/veams-component-pagination.svg" alt="Bower version" height="20"></a>
    <a href="https://gitter.im/Sebastian-Fitzner/Veams?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge"><img src="https://badges.gitter.im/Sebastian-Fitzner/Veams.svg" alt="Gitter Chat" /></a>
</p>

# Pagination

## Description

Simple pagination component.

-----------

## Requirements

### Sass
`Veams-Sass >= v2.0.0` - Basic Sass library.

-----------

## Installation

### Installation with Veams

`veams install vc pagination`

### Installation with Bower

`bower install veams-component-pagination --save`

-----------

## Fields

### `c-pagination.hbs`

#### Settings
- settings.pagContextClass {`String`} [default] - _Context class of component._
- settings.pagClasses {`String`} - _Modifier classes for component._

#### Content
- content.pagButtons {`Object`} - _Object with multiple elements._
- content.pagButtons.pagDescription {`String`} - _Description for buttons._
- content.pagButtons.previous {`String`} - _Description for previous button._
- content.pagButtons.next {`String`} - _Description for next button._
- content.pagCurrent {`String`} - _Description for current element._
- content.pagMax {`Number`} - _Last number in pagination._