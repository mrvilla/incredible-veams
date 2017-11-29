/**
 * Represents a button with custom click handlers.
 *
 * @module CTA
 * @version v3.0.2
 *
 * @author Sebastian Fitzner
 * @author Andy Gutsche
 */

/**
 * Requirements
 */
import {Veams} from 'app';
import VeamsComponent from 'veams/src/js/common/component';
const $ = Veams.$;

class CTA extends VeamsComponent {
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
			activeClass: 'is-active',
			clickHandler: 'click',
			closedLabel: null,
			ctaContent: '[data-js-item="cta-content"]',
			globalEvent: 'cta:click',
			openedLabel: null
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
			version: '3.0.2',
			vc: true,
			mod: false // set to true if source was modified in project
		};
	}

	/**
	 * Get and set the active state.
	 *
	 * @param {boolean} state - active state
	 */
	get active() {
		return this._active;
	}

	set active(state) {
		this._active = state;
	}

	/** =================================================
	 * EVENTS
	 * ================================================ */
	get events() {
		return {
			'{{this.options.clickHandler}}': 'onClick'
		};
	}

	/** =================================================
	 * STANDARD METHODS
	 * ================================================= */
	/**
	 * Initialize the view and merge options
	 *
	 */
	initialize() {
		this.$ctaContent = $(this.options.ctaContent, this.$el);

		if (this.options.closedLabel && !this.options.openedLabel ||
			!this.options.closedLabel && this.options.openedLabel) {
			console.warn('CTA: You have to set closedLabel and openedLabel or none.');
		}
		else {
			if (this.options.closedLabel && this.options.openedLabel && !this.$ctaContent.length) {
				console.warn('CTA: Labels set, but ' + this.options.ctaContent +
					' not found, please make sure settings.ctaContentJsItem is set to true for c-cta__content.');
			}
		}

		if (this.$el.is('.' + this.options.activeClass)) {
			this.active = true;
		}
	}

	render() {
		return this;
	}
	/** =================================================
	 * CUSTOM CTA METHODS
	 * ================================================= */
	/**
	 * Close method
	 *
	 * Remove the active class, set label and trigger global event
	 *
	 * @public
	 */
	close() {
		if (this.options.closedLabel) {
			this.$ctaContent.text(this.options.closedLabel);
			this.$el.attr('title', this.options.closedLabel);
		}

		this.$el.removeClass(this.options.activeClass);
		this.active = false;
	}

	/**
	 * Open method
	 *
	 * Add the active class, set label and trigger global event
	 *
	 * @public
	 */
	open() {
		if (this.options.openedLabel) {
			this.$ctaContent.text(this.options.openedLabel);
			this.$el.attr('title', this.options.openedLabel);
		}

		this.$el.addClass(this.options.activeClass);
		this.active = true;
	}

	/**
	 * Click event method
	 *
	 * This method should be overriden when you want to use the button view
	 * @see button-init.js
	 *
	 * @param {event} e - event object
	 */
	onClick(e) {
		console.log('ready');
		e.preventDefault();

		if (typeof this.clickHandler === 'function') {
			if (this.active) {
				this.close();
			}
			else {
				this.open();
			}

			this.clickHandler.apply(this, arguments);
		} else {
			console.warn('CTA: You need to inherit from ' + this +
				' and override the onClick method or pass a function to ' +
				this + '.clickHandler !');
		}
	}

	/**
	 * Click handler
	 *
	 * This method is public and can be overridden by
	 * other instances to support a generic button module
	 *
	 * @public
	 */
	clickHandler() {
		Veams.Vent.trigger(this.options.globalEvent, {
			el: this.el,
			isActive: this.active,
			options: this.options
		});
	}
}

export default CTA;
