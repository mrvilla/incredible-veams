/**
 * Const for events (pub/sub)
 *
 * @author: Sebastian Fitzner
 */

/**
 * Events Global
 */

const EVENTS = {};



/**
 * Events for Slider
 */
EVENTS.slider = {
	slideStart: 'slide:start'
};


/**
 * Events Accordion
 */
EVENTS.accordion = {
	openAll: 'accordion:openAll',
	closeAll: 'accordion:closeAll'
};


/**
 * Events for Toggler
 */
EVENTS.toggler = {
	eventName: 'toggler:eventName'
};


/**
 * Events Form
 */
EVENTS.form = {
	complete: 'form:complete',
	reset: 'form:reset'
};


/**
 * Events Overlay
 */
EVENTS.overlay = {
	open: 'overlay:open'
};

// @INSERTPOINT :: @ref: js-events

export default EVENTS;