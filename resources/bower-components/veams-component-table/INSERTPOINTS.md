
### Include: Page

``` hbs
{{! @INSERT :: START @id: table, @tag: component-partial }}
{{#with table-bp.variations.tableWithHead}}
    {{> c-table content=this.content settings=this.settings}}
{{/with}}
{{! @INSERT :: END }}
```

### Include: SCSS

``` scss
// @INSERT :: START @tag: scss-import
@import "components/_c-table";
// @INSERT :: END

// @INSERT :: START @tag: scss-self-contained-import
@import "../templating/partials/components/table/scss/_c-table";
// @INSERT :: END
```