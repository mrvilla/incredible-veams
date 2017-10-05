### Include: Page

``` hbs
{{! @INSERT :: START @id: quote, @tag: component-partial }}
{{#with quote-bp.variations.simple}}
	{{> c-quote }}
{{/with}}

{{#with quote-bp.variations.full}}
	{{> c-quote }}
{{/with}}
{{! @INSERT :: END }}
```

### Include: SCSS

``` scss
// @INSERT :: START @tag: scss-import
@import "components/_c-quote";
// @INSERT :: END

// @INSERT :: START @tag: scss-self-contained-import //
@import "../templating/partials/components/quote/scss/_c-quote";
// @INSERT :: END //
```