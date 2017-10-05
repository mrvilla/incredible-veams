### Include: Page

``` hbs
{{! @INSERT :: START @id: pagination, @tag: component-partial }}
{{#with pagination-bp.simple}}
	{{> c-pagination}}
{{/with}}
{{! @INSERT :: END }}
```

### Include: SCSS

``` scss
// @INSERT :: START @tag: scss-import
@import "components/_c-pagination";
// @INSERT :: END

// @INSERT :: START @tag: scss-self-contained-import //
@import "../templating/partials/components/pagination/scss/_c-pagination";
// @INSERT :: END //
```