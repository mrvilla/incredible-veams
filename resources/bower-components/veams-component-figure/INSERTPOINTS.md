
### Include: Page

``` hbs
{{! @INSERT :: START @id: figure, @tag: component-partial }}
{{#with figure-bp.simple}}
	{{> c-figure}}
{{/with}}

{{#with figure-bp.caption}}
	{{> c-figure}}
{{/with}}

{{#with figure-bp.video}}
	{{> c-figure}}
{{/with}}
{{! @INSERT :: END }}
```

### Include: SCSS

``` scss
// @INSERT :: START @tag: scss-import //
@import "components/_c-figure";
// @INSERT :: END //

// @INSERT :: START @tag: scss-self-contained-import //
@import "../templating/partials/components/figure/scss/_c-figure";
// @INSERT :: END //
```
