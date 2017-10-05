### Include: Page

``` hbs
{{! @INSERT :: START @id: slide-fox, @tag: component-partial }}
<h2>We need some demo text to see the slide fox in action!</h2>
{{#times 20}}
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum explicabo facilis, ipsum itaque necessitatibus nisi nulla ut veniam veritatis voluptate. Blanditiis consectetur, error excepturi exercitationem facilis ipsum labore nobis odit.</p>
{{/times}}

{{#with slide-fox-bp.variations.default}}
	{{#wrapWith "c-slide-fox" settings=this.settings}}
		<a href="#">Link to another page.</a>
	{{/wrapWith}}
{{/with}}
{{! @INSERT :: END }}
```

### Include: SCSS

``` scss
// @INSERT :: START @tag: scss-import //
@import "components/_c-slide-fox";
// @INSERT :: END //

// @INSERT :: START @tag: scss-self-contained-import //
@import "../templating/partials/components/slide-fox/scss/_c-slide-fox";
// @INSERT :: END //
```

### Include: JavaScript

#### Import
``` js
// @INSERT :: START @tag: js-import //
import SlideFox from './modules/slide-fox/slide-fox';
// @INSERT :: END //

/ @INSERT :: START @tag: js-self-contained-import //
import SlideFox from '../templating/partials/components/slide-fox/js/slide-fox';
// @INSERT :: END //
```

#### Initializing
``` js
// @INSERT :: START @tag: js-init-v5 //
    ,
    /**
     * Init SlideFox
     */
    {
        namespace: 'slide-fox',
        module: SlideFox
    }
// @INSERT :: END //
```