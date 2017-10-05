# toggler

 Represents a simple toggler with global event binding.

-----------

## Requirements
- `Veams >= v5.0.0` - Veams Framework.

-----------

## Installation

### Installation with Veams

`veams install vc toggler`

### Installation with Bower

`bower install veams-component-toggler --save`

-------------

## SASS

### Variables

- $toggler-animation-duration-std {`String`} ['200ms'];
- $toggler-animation-easing-std {`Function`} [ease-in-out];

-------------

## Fields

### toggler

#### Settings

- settings.togglerContextClasses {`String`} [default] - _Context class._
- settings.togglerClasses {`String`} - _Modifier classes._
- settings.togglerJsOptions {`Object`} - _Options object which gets stringified._
- settings.togglerJsModule {`Boolean`} - _Specify if component is a Javascript module or not.
- settings.togglerJsModuleWithContext {`String`} - _Reference to specific Javascript module toggler context._
- settings.togglerId {`String`} - _Id to reference specific toggler component instance._
- settings.attributes {`Array`} - _List of attributes that consist of name value pairs._

#### Content

- content.togglerField {`String`} - _Add description._



-------------

## JavaScript Options

The module gives you the possibility to override default options:

- a11yFocusKeyClass {`String`} ['a11y-focus-key'] - _Class for the accessibility focus key._
- calculatingClass {`String`} ['is-calculating'] - _Class used to display calculating state._
- closeClass {`String`} ['is-closed'] - _Class when toggler is closed._
- context {`Boolean`} [false] - _Context property that gets passed to toggler open event._
- dataMaxAttr {`String`} ['data-js-height'] - _Dynamic max height attribute._
- globalEvent {`String`} [''] - _Reference to global event that when triggered calls toggle method._
- globalEventId {`String`} [''] - _Compare toggler's globaleventid with the globaleventid of the object that triggered the toggle method to determine if toggle should be run or aborted._
- openClass {`String`} ['is-open'] - _Class when toggler is open._
- setOverflow {`Boolean`} [false] - _Specify if overflow should be set or not._
- toggleTabindexElems {`String`} [''] - _Selector that targets elements to toggle tab-index._

-------------