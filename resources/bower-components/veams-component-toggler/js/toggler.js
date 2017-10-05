/**
 * Represents a simple toggler with global event binding.
 *
 * @module Toggler
 * @version v3.0.3
 *
 * @author Andy Gutsche
 */

// Global dependencies
import {Veams} from 'app';

import VeamsComponent from 'veams/src/js/common/component';

const $ = Veams.$;
const Helpers = Veams.helpers;

class Toggler extends VeamsComponent {


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
			a11yFocusKeyClass: 'a11y-focus-key',
			calculatingClass: 'is-calculating',
			closeClass: 'is-closed',
			context: false,
			dataMaxAttr: 'data-js-height',
			globalEvent: '',
			globalEventId: '',
			openClass: 'is-open',
			setOverflow: false,
			toggleTabindexElems: ''
		};

		super(obj, options);
	}


	/**
	 * Get module information
	 */
	static get info() {
		return {
			version: '3.0.3',
			vc: true,
			mod: false // set to true if source was modified in project
		};
	}


	get height() {
		return this._height;
	}


	set height(height) {
		this._height = height;
	}


	get isOpen() {
		return this._isOpen;
	}


	set isOpen(bool) {
		this._isOpen = bool;
	}


	/**
	 * Get global events
	 *
	 */
	get subscribe() {

		return {
			'{{Veams.EVENTS.resize}}': 'onResize'
		};
	}


	/**
	 * Initialize the view and merge options
	 *
	 */
	initialize() {
		let selfInit = this.$el.attr('data-js-module') && this.$el.attr('data-js-module').indexOf('toggler') > -1;

		if (selfInit && !this.options.globalEvent) {
			console.info('Toggler: this.options.globalEvent not set.');
		}

		this.isOpen = this.$el.hasClass(this.options.openClass);

		this.calculateHeight().then(() => {

			if (!this.isOpen) {
				this.setHeight(0);
			}
		});
	}


	/**
	 * Bind events
	 *
	 * Listen to open and close events
	 */
	bindEvents() {

		// Global events
		if (this.options.globalEvent) {
			this.registerEvent('{{this.options.globalEvent}}', 'toggle', true);
		}
	}

	/**
	 * handle on resize event
	 *
	 * close the toggler
	 *
	 */
	onResize() {

		// give browser some tie to recalculate
		setTimeout(() => {

			this.calculateHeight().then(() => {
				this.setHeight();
			});
		}, 200);
	}


	/**
	 * Enable calc mode.
	 *
	 * @private
	 */
	enableCalcMode() {

		if (!this.isOpen) {
			this.$el.addClass(this.options.openClass);
			this.$el.removeClass(this.options.closeClass);
		}

		this.$el.addClass(this.options.calculatingClass);
	}


	/**
	 * Disable calc mode.
	 *
	 * @private
	 */
	disableCalcMode() {

		this.$el.removeClass(this.options.calculatingClass);

		if (!this.isOpen) {
			this.$el.addClass(this.options.closeClass);
			this.$el.removeClass(this.options.openClass);
		}
		else {
			this.setHeight();
		}
	}


	/**
	 * Set height of current view element to given value or latest calculated value.
	 *
	 * @private
	 * @param {Number} [height] - height
	 */
	setHeight(height) {
		this.$el.css('height',
			typeof height === 'number' ? height + 'px' : this.$el.attr(this.options.dataMaxAttr) + 'px');
	}


	/**
	 * Calc the height of current view element.
	 *
	 * @private
	 */
	calcHeight() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				let wantedHeight = this.$el.outerHeight();

				this.$el.attr(this.options.dataMaxAttr, wantedHeight);
				this.height = wantedHeight !== this.height ? wantedHeight : this.height;

				resolve();
			}, 10);
		});
	}


	/**
	 * Save all styles from current view element
	 *
	 * @private
	 */
	saveStyles() {
		this.savedStyles = this.$el.attr('style');
	}


	/**
	 * Restore all styles from current view element
	 *
	 * @private
	 */
	restoreStyles() {
		this.$el.attr('style', this.savedStyles);
		delete this.savedStyles;
	}


	/**
	 * Toggles content
	 *
	 * @public
	 *
	 * @param {Object} obj - the event data
	 * @param {Boolean} obj.isActive - indicates if panel should open or close itself
	 * @param {String} obj.options.setFocus - element to set focus on open
	 */
	toggle(obj) {

		// if globalEventId is set on both (cta and toggler)
		if (this.options.globalEventId && obj.options && obj.options.globalEventId) {

			// stop here if global event id don't match
			if (this.options.globalEventId !== obj.options.globalEventId) {
				return;
			}
		}


		if (obj.isActive) {
			this.open(obj);
		}
		else {
			this.close();
		}
	}


	/**
	 * Open current view element
	 *
	 * @public
	 *
	 * @param {Object} [obj] - the event object
	 * @param {Boolean} [obj.isActive] - indicates if panel should open or close itself
	 * @param {String} [obj.options.setFocus] - element to set focus on open
	 */
	open(obj) {
		this.$el.css('height', this.$el.attr(this.options.dataMaxAttr) + 'px')
			.attr('aria-hidden', false)
			.removeClass(this.options.closeClass)
			.addClass(this.options.openClass);

		if (obj && obj.focusEl) {

			this.$el.on(Helpers.transitionEndEvent(), () => {
				obj.focusEl.focus();
				this.$el.off(Helpers.transitionEndEvent());
			});
		}

		Veams.Vent.trigger(Veams.EVENTS.toggler.open, {
			context: this.options.context
		});

		if (this.options.setOverflow) {

			this.$el.on(Helpers.transitionEndEvent(), () => {
				this.$el.css('overflow', 'visible');
				this.$el.off(Helpers.transitionEndEvent());
			});
		}

		if (this.options.toggleTabindexElems) {
			$(this.options.toggleTabindexElems, this.el).attr('tabindex', 0);
		}

		this.isOpen = true;
	}


	/**
	 * Close current view element
	 *
	 * @public
	 */
	close() {
		this.$el.css('height', 0)
			.removeAttr('style')
			.attr('aria-hidden', 'true')
			.removeClass(this.options.openClass)
			.addClass(this.options.closeClass);

		if (this.options.setOverflow) {
			this.$el.css('overflow', 'hidden');
		}

		if (this.options.toggleTabindexElems) {
			$(this.options.toggleTabindexElems, this.el).attr('tabindex', -1);
		}

		this.isOpen = false;
	}


	/**
	 * calculateHeight class
	 */
	calculateHeight() {
		return new Promise((resolve, reject) => {
			if (this.el && this.el.hasAttribute('style')) {
				this.saveStyles();
			}

			this.enableCalcMode(true);

			this.calcHeight().then(() => {
				if (this.savedStyles) {
					this.restoreStyles();
				}

				this.disableCalcMode();

				resolve();
			});
		});
	}
}

export default Toggler;