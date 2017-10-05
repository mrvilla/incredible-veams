<p align="right">
    <a href="https://badge.fury.io/bo/veams-component-slide-fox"><img src="https://badge.fury.io/bo/veams-component-slide-fox.svg" alt="Bower version" height="20"></a>
    <a href="https://gitter.im/Sebastian-Fitzner/Veams?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge"><img src="https://badges.gitter.im/Sebastian-Fitzner/Veams.svg" alt="Gitter Chat" /></a>
</p>

# Slide Fox

## Description

Represents an element that slides into view when it's scrolled into viewport.

-----------

## Requirements
- `Veams >= v5.0.0` - Veams Framework.

-----------

## Installation

### Installation with Veams

`veams install vc slide-fox`

### Installation with Bower

`bower install veams-component-slide-fox --save`

-----------

## Fields

### `c-slide-fox.hbs`

The partial is a `wrapWith` partial.

#### Settings
- settings.slideFoxContextClass {`String`} [default] - _Context class of component._
- settings.slideFoxClasses {`String`} - _Modifier classes for component._
- settings.slideFoxJsOptions {`Object`} - _JavaScript options which gets stringified._

-------------

## JavaScript Options

The module gives you the possibility to override default options:

- visibleClass {`String`} ['is-visible'] - _Class to be set when Slide Fox becomes visible._