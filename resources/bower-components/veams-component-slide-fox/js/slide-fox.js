/**
 * Represents an element that slides into view when it's scrolled into viewport.
 *
 * @module SlideFox
 * @version v3.0.1
 *
 * @author Andy Gutsche
 * @refactoring Sebastian Fitzner
 */

import { Veams } from 'app';
import VeamsComponent from 'veams/src/js/common/component';
import isInViewport from 'veams/src/js/utils/helpers/is-in-viewport';

const $ = Veams.$;
const Helpers = Veams.helpers;

class SlideFox extends VeamsComponent {
	/**
	 * Constructor for our class
	 *
	 * @see module.js
	 *
	 * @param {Object} obj - Object which is passed to our class
	 * @param {Object} obj.el - element which will be saved in this.el
	 * @param {Object} obj.options - options which will be passed in as JSON object
	 */
	constructor(obj) {
		let options = {
			visibleClass: 'is-visible'
		};

		super(obj, options);
	}

	/** =================================================
	 * GETTER & SETTER
	 * ================================================ */

	/**
	 * Get module information
	 */
	static get info() {
		return {
			version: '3.0.1',
			vc: true,
			mod: false // set to true if source was modified in project
		};
	}

	/** =================================================
	 * EVENTS
	 * ================================================ */

	get subscribe() {
		return {
			'{{Veams.EVENTS.scroll}}': 'render'
		};
	}

	/** =================================================
	 * STANDARD METHODS
	 * ================================================= */

	render() {
		isInViewport(this.el) ? this.showSlideFox() : this.hideSlideFox();
	}

	/** =================================================
	 * CUSTOM SLIDEFOX METHODS
	 * ================================================= */

	showSlideFox() {
		this.$el.addClass(this.options.visibleClass);
	}

	hideSlideFox() {
		this.$el.removeClass(this.options.visibleClass);
	}


}

// Returns the constructor
export default SlideFox;
