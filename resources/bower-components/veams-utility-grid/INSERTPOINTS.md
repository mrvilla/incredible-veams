## Usage

### Include: Page

``` hbs
{{! @INSERT :: START @id: grid, @tag: utility-partial }}
{{! WrapWith START: Grid Row }}
{{#wrapWith "u-grid-row" settings=grid.settings}}
    {{! WrapWith START: Col }}
    {{#wrapWith "u-grid-col" colClasses="is-col-mobile-s-6 is-col-mobile-l-3" }}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consectetur corporis cum, deleniti dignissimos ducimus ea eligendi, fugiat fugit illum molestias natus necessitatibus perferendis quasi quidem reiciendis similique ullam voluptatum!
    {{/wrapWith}}
    {{! WrapWith END: Col }}
    {{! WrapWith START: Col }}
    {{#wrapWith "u-grid-col" colClasses="is-col-mobile-s-6 is-col-mobile-l-3" }}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consectetur corporis cum, deleniti dignissimos ducimus ea eligendi, fugiat fugit illum molestias natus necessitatibus perferendis quasi quidem reiciendis similique ullam voluptatum!
    {{/wrapWith}}
    {{! WrapWith END: Col }}
    {{! WrapWith START: Col }}
    {{#wrapWith "u-grid-col" colClasses="is-col-mobile-s-6 is-col-mobile-l-3" }}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consectetur corporis cum, deleniti dignissimos ducimus ea eligendi, fugiat fugit illum molestias natus necessitatibus perferendis quasi quidem reiciendis similique ullam voluptatum!
    {{/wrapWith}}
    {{! WrapWith END: Col }}
    {{! WrapWith START: Col }}
    {{#wrapWith "u-grid-col" colClasses="is-col-mobile-s-6 is-col-mobile-l-3" }}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consectetur corporis cum, deleniti dignissimos ducimus ea eligendi, fugiat fugit illum molestias natus necessitatibus perferendis quasi quidem reiciendis similique ullam voluptatum!
    {{/wrapWith}}
	{{! WrapWith END: Col }}
{{/wrapWith}}
{{! WrapWith END: Grid Row }}
{{! @INSERT :: END }}
```

### Include: SCSS

``` scss
// @INSERT :: START @tag: scss-import //
@import "utilities/_u-grid";
// @INSERT :: END

// @INSERT :: START @tag: scss-self-contained-import //
@import "../templating/partials/utilities/grid/scss/_u-grid";
// @INSERT :: END
```