
### Include: Page

``` hbs
{{! @INSERT :: START @id: accordion, @tag: component-partial }}
{{#with accordion-bp.variations.simple}}
    {{! WrapWith START: Accordion }}
    {{#wrapWith "c-accordion" settings=this.settings}}
    {{! WrapWith START: Item }}
        {{#each content.items}}
            {{#wrapWith "c-accordion__item" accItemId=this.itemId accButton=itemBtnText}}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid assumenda, ducimus facilis inventore iste labore laborum libero nam necessitatibus neque nulla numquam perspiciatis rem, repudiandae sed soluta veniam vero.
            {{/wrapWith}}
        {{/each}}
    {{! WrapWith END: Item }}
    {{/wrapWith}}
    {{! WrapWith END: Accordion }}
{{/with}}
{{! @INSERT :: END }}
```

### Include: SCSS

``` scss
// @INSERT :: START @tag: scss-import //
@import "components/_c-accordion";
// @INSERT :: END //

// @INSERT :: START @tag: scss-self-contained-import //
@import "../templating/partials/components/accordion/scss/_c-accordion";
// @INSERT :: END //
```

### Include: JavaScript

#### Import
``` js
// @INSERT :: START @tag: js-import //
import Accordion from './modules/accordion/accordion';
// @INSERT :: END //

/ @INSERT :: START @tag: js-self-contained-import //
import Accordion from '../templating/partials/components/accordion/js/accordion';
// @INSERT :: END //
```

#### Initializing in Veams V5
``` js
// @INSERT :: START @tag: js-init-v5 //
 	,
 	// Init Accordion
 	{
 		namespace: 'accordion',
 		module: Accordion
 	}
// @INSERT :: END //
```

#### Custom Events
``` js
// @INSERT :: START @tag: js-events //
/**
 * Events Accordion
 */
EVENTS.accordion = {
	openAll: 'accordion:openAll',
	closeAll: 'accordion:closeAll'
};
// @INSERT :: END //
```