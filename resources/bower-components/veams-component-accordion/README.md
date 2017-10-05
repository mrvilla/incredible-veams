<p align='right'>
    <a href='https://badge.fury.io/bo/veams-component-accordion'><img src='https://badge.fury.io/bo/veams-component-accordion.svg' alt='Bower version' height='20'></a>
    <a href='https://gitter.im/Sebastian-Fitzner/Veams?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge'><img src='https://badges.gitter.im/Sebastian-Fitzner/Veams.svg' alt='Gitter Chat' /></a>
</p>

# Accordion

## Description

The component represents a simple accordion with `transitions` and `max-height`. 

Accordions are elements used to expand and collapse content that is broken into logical sections, much like tabs.

The accordion is based on the blueprint of Veams-Components and is a wrap-with component to support flexible content with predefined surrounded markup.

The accordion is jQuery-free (we use Veams-Query) and contains some accessiblity functionality.

-----------

## Requirements
- `Veams >= v5.0.0` - Veams Framework.

-----------

## Installation 

### Installation with Veams

`veams install vc accordion`

### Installation with Bower

`bower install veams-component-accordion --save`

----------- 

## Fields

### `c-accordion.hbs`

#### Settings
- settings.accContextClass {`String`} [default] - _Context class of component._
- settings.accClasses {`String`} - _Modifier classes for component._
- settings.accJsOptions {`Object`} - _JavaScript options which gets stringified._

### `c-accordion__item.hbs`

#### Settings
- settings.accNoWrapper {`Boolean`} - _Hide wrapper div `.accordion__item`._

#### Further Parameters 
- accItemId {`String`} - _Id of the accordion item._
- accButton {`String`} - _Button text for accordion item._

-------------

## JavaScript Options

The module gives you the possibility to override default options: 

- activeClass {`String`} ['is-active'] - _Define the active class for active elements._
- accordionBtn {`String`} ['[data-js-item='accordion-btn']'] - _Define the element for accordion buttons._
- accordionContent {`String`} ['[data-js-item="accordion-content"]'] - _Define the element for accordion content items._
- calculatingClass {`String`} ['is-calculating'] - _Define the calculating class for the initial calculation cycle._
- clickHandler {`String`} ['click'] - _Define a click handler for the buttons._
- closeClass {`String`} ['is-closed'] - _Define the closing class for accordion content items._
- dataMaxAttr {`String`} ['data-js-height'] - _Define the attribute in which the calculated height is saved._
- openAllOnInit {`Boolean`} [false] - _If set to true, all panels stays open on render._
- openByHash {`Boolean`} [false] - _If set to true, panel can be opened by url hash referencing the id of the panel._
- openClass {`Boolean`} ['is-open'] - _Define the opening class for accordion content items._
- openIndex {`Number`} [null] - _Index of panel to be opened on init (zero based)._
- openOnViewports {`Array`} [ ['desktop', 'tablet-large', 'tablet-small'] ] - _Viewports on which the openIndex panel is opened on init._
- singleOpen {`Boolean`} [false] - _If set to true, only one panel can be opened at the same time._
- tabMode {`Boolean`} [false] - _If set to true, the accordion behaves like a tab module (click on active button will not close corresponding panel)._
- unresolvedClass {`String`} ['is-unresolved'] - _Define the unresolved class for the whole accordion which will be deleted after `initialize()` and `render()` is finished._

------------

## Sass Options

There are multiple global variables which you can change: 
- $accordion-toggle-duration [`300ms !default`] - _Speed of toggling._
- $accordion-transition-method [`ease !default`] - _Transition method of toggle effect._
- $accordion-icon-color [`#666 !default`] - _+ icon color._
- $accordion-icon-width [`30px !default`] - _+ icon width._
- $accordion-icon-height [`2px !default`] - _+ icon height._
- $accordion-btn-color `[$accordion-icon-color !default`] - _Accordion button color._
- $accordion-btn-bg-color [`rgba(255, 255, 255, 0.5) !default`] - _Background color of the accordion button._
- $accordion-padding [`1rem !default`] - _Default padding which will be used in the accordion._
