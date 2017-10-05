// Global dependencies
import {App, Veams} from './app';

console.log('JS initialized in version:', App.version);
console.log('Veams initialized in version:', Veams.base.version);

// Imports

import Slider from '../templating/partials/components/slider/js/slider';
import Accordion from '../templating/partials/components/accordion/js/accordion';

import Toggler from '../templating/partials/components/toggler/js/toggler';


import CTA from '../templating/partials/components/cta/js/cta';


import FormAjax from '../templating/partials/components/form/js/form-ajax';
import FormDatepicker from '../templating/partials/components/form/js/form-datepicker';


import Comparer from '../templating/partials/components/comparer/js/comparer';


import Overlay from '../templating/partials/components/overlay/js/overlay';


import SlideFox from '../templating/partials/components/slide-fox/js/slide-fox';

// @INSERTPOINT :: @ref: js-self-contained-import, @keep: true //

// Initialize modules with Veams
Veams.modules.register([
    /**
     * Init Slider
     */
    {
        namespace: 'slider',
        module: Slider
    },
 	// Init Accordion
 	{
 		namespace: 'accordion',
 		module: Accordion
 	},
	// Init Toggler //
	{
		domName: 'toggler',
		module: Toggler,
	},
 	// Init Call-To-Action
 	{
 		namespace: 'cta',
 		module: CTA
 	}
    ,
    /**
     * Init AJAX Form
     */
    {
        namespace: 'form-ajax',
        module: FormAjax
    }
    ,
    /**
     * Init Form Datepicker
     */
    {
	    namespace: 'form-datepicker',
	    module: FormDatepicker
    }

 	,
 	// Init Comparer
 	{
 		namespace: 'comparer',
 		module: Comparer
 	}




    ,
    /**
     * Init SlideFox
     */
    {
        namespace: 'slide-fox',
        module: SlideFox
    }

    // @INSERTPOINT :: @ref: js-init-v5, @keep: true //
]);



/**
 * Init Overlay
 */
new Overlay({
    appInstance: Veams
});

// @INSERTPOINT :: @ref: js-init-once-v5, @keep: true //
