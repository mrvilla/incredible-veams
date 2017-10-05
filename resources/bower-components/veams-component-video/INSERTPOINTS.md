### Include: Page

``` hbs
{{! @INSERT :: START @id: video, @tag: component-partial }}
{{#with video-bp.variations.default}}
    {{> c-video settings=this.settings content=this.content}}
{{/with}}
{{! @INSERT :: END }}
```

### Include: SCSS

``` scss
// @INSERT :: START @tag: scss-import //
@import "components/_c-video";
// @INSERT :: END //

// @INSERT :: START @tag: scss-self-contained-import // 
@import "../templating/partials/components/video/scss/_c-video";
// @INSERT :: END //
```