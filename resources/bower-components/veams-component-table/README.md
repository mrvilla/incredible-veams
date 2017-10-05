<p align="right">
    <a href="https://badge.fury.io/bo/veams-component-table"><img src="https://badge.fury.io/bo/veams-component-table.svg" alt="Bower version" height="20"></a>
    <a href="https://gitter.im/Sebastian-Fitzner/Veams?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge"><img src="https://badges.gitter.im/Sebastian-Fitzner/Veams.svg" alt="Gitter Chat" /></a>
</p>

# Table

## Description

The `<table>` element represents data with more than one dimension, in the form of a table.

The specs says:

> Tables have rows, columns, and cells given by their descendants. The rows and columns form a grid; a table's cells must completely cover that grid without overlap.

Tables must not be used as layout aids

-----------

## Installation

### Installation with Veams

`veams install vc table`

### Installation with Bower

`bower install veams-component-table --save`

-----------

## Fields

### `c-table.hbs`

#### Settings
- settings.tableContextClass {`String`} [default] - _Context class of component._
- settings.tableClasses {`String`} - _Modifier classes for component._

#### Content
- content.tableCaption {`String`} - _A caption for the table._
- content.tableHeader {`Object`} - _An object which contains the headings._
- content.tableHeader.tableRows {`Array`} - _Rows in header._
- content.tableBody {`Object`} - _An object which contains the body._
- content.tableBody.tableRows {`Array`} - _Rows in body._

### `c-table__row.hbs`

#### Settings
- settings.trClass {`String`} - _Row classes._

#### Content
- content.tableCells {`Array`} - _Table cells._

### `c-table__cell.hbs`

#### Settings
- settings.thTag {`Boolean`} - _Definition of th or td._
- settings.cellClass {`String`} - _Cell classes._

#### Content
- content.cellContent {`String`} - _Cell content._