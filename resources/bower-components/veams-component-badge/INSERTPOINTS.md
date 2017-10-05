## Usage

### Include: Page

``` hbs
{{! @INSERT :: START @id: badge, @tag: component-partial }}
{{#with badge-bp.variations.default}}
    {{> c-badge content=this.content settings=this.settings}}
{{/with}}
{{! @INSERT :: END }}
```

### Include: SCSS

``` scss
// @INSERT :: START @tag: scss-import //
@import "components/_c-badge";
// @INSERT :: END //

// @INSERT :: START @tag: scss-self-contained-import //
@import "../templating/partials/components/badge/scss/_c-badge";
// @INSERT :: END //
```