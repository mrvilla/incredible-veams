
### Include: Page

``` hbs
{{! @INSERT :: START @id: cta, @tag: component-partial }}
{{#with cta-bp.variations.simple}}
    {{! WrapWith START: CTA }}
    {{#wrapWith "c-cta" settings=this.settings content=this.content}}
        {{> c-cta__content this.content}}
    {{/wrapWith}}
    {{! WrapWith END: CTA }}
{{/with}}
{{! @INSERT :: END }}
```

### Include: SCSS

``` scss
// @INSERT :: START @tag: scss-import //
@import "components/_c-cta";
// @INSERT :: END

// @INSERT :: START @tag: scss-self-contained-import // 
@import "../templating/partials/components/cta/scss/_c-cta";
// @INSERT :: END
```

### Include: JavaScript

#### Import
``` js
// @INSERT :: START @tag: js-import //
import CTA from './modules/cta/cta';
// @INSERT :: END

// @INSERT :: START @tag: js-self-contained-import //
import CTA from '../templating/partials/components/cta/js/cta';
// @INSERT :: END
```

#### Initializing in Veams V5
``` js
// @INSERT :: START @tag: js-init-v5 //
 	,
 	// Init Call-To-Action
 	{
 		namespace: 'cta',
 		module: CTA
 	}
// @INSERT :: END //
```