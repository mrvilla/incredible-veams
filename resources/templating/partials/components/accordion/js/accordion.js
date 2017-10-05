/**
 * Represents a simple accordion with transitions and max-height.
 *
 * @module Accordion
 * @version v3.0.2
 *
 * @author Sebastian Fitzner
 * @author Andy Gutsche
 */

/**
 * Requirements
 */
import { Veams } from 'app';
import VeamsComponent from 'veams/src/js/common/component';

const $ = Veams.$;
const Helpers = Veams.helpers;

/**
 * Class Accordion
 */
class Accordion extends VeamsComponent {
	constructor(obj) {
		let options = {
			activeClass: 'is-active',
			accordionBtn: '[data-js-item="accordion-btn"]',
			accordionContent: '[data-js-item="accordion-content"]',
			calculatingClass: 'is-calculating',
			clickHandler: 'click',
			closeClass: 'is-closed',
			dataMaxAttr: 'data-js-height',
			openAllOnInit: false,
			openByHash: false,
			openClass: 'is-open',
			openIndex: null,
			openOnViewports: [
				'tablet-small',
				'tablet-large',
				'desktop'
			], // array: viewport names - eg.: ['mobile', 'tablet', 'desktop-small', 'desktop']
			removeStyles: false, // TODO
			singleOpen: false,
			tabMode: false,
			unresolvedClass: 'is-unresolved'
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
			name: 'Accordion',
			version: '3.0.2',
			vc: true,
			mod: false // set to true if source was modified in project
		};
	}

	set $accordionContents(items) {
		this._$accordionContents = items;
	}

	get $accordionContents() {
		return this._$accordionContents;
	}

	set $accordionBtns(items) {
		this._$accordionBtns = items;
	}

	get $accordionBtns() {
		return this._$accordionBtns;
	}

	set $target(item) {
		this._$target = item;
	}

	get $target() {
		return this._$target;
	}

	set $btn(item) {
		this._$btn = item;
	}

	get $btn() {
		return this._$btn;
	}

	/** =================================================
	 * EVENTS
	 * ================================================ */
	get events() {
		return {
			'{{this.options.clickHandler}} {{this.options.accordionBtn}}': 'handleClick'
		}
	}

	get subscribe() {
		return {
			'{{Veams.EVENTS.resize}}': 'render',
			'{{Veams.EVENTS.accordion.closeAll}}': 'closeAll',
			'{{Veams.EVENTS.accordion.openAll}}': 'openAll'
		}
	}

	/** =================================================
	 * STANDARD METHODS
	 * ================================================= */

	/**
	 * Init method to save all necessary references.
	 */
	initialize() {
		this.$accordionContents = $(this.options.accordionContent, this.$el);
		this.$accordionBtns = $(this.options.accordionBtn, this.$el);
		this.$target = null;
		this.$btn = null;
		this.openIndex = this.options.openIndex;

		if (this.options.openByHash) {
			let idx = this.getIndexByHash();

			this.openIndex = typeof idx === 'number' ? idx : this.options.openIndex;
		}
		else if (this.options.tabMode && !this.options.openIndex) {
			this.openIndex = 0;
		}
	}

	/**
	 * Bind all events
	 */
	bindEvents() {
		let fnOnHashChange = this.onHashChange.bind(this);

		// Global events
		if (this.options.openByHash) {
			$(window).on(Veams.EVENTS.hashchange, fnOnHashChange);
		}
	}

	render() {
		if (!Veams.currentMedia) {
			console.warn('Accordion: Veams.currentMedia is necessary to support the slider module!');
			return;
		}

		this.removeStyles();
		this.saveHeights(this.$accordionContents);
		this.closeAll();

		if (this.options.openAllOnInit) {
			this.openAll();
		}

		// Open on index if set in options
		if (typeof this.openIndex === 'number') {
			if (this.options.tabMode || this.options.openOnViewports.indexOf(Veams.currentMedia) !== -1) {
				this.activateBtn(this.$accordionBtns.eq(this.openIndex));
				this.slideDown(this.$accordionContents.eq(this.openIndex));
			}
		}

		if (this.$el.hasClass(this.options.unresolvedClass)) {
			this.$el.removeClass(this.options.unresolvedClass);
		}
	}

	/** =================================================
	 * CUSTOM ACCORDION METHODS
	 * ================================================= */

	/**
	 * Get index of accordion content referenced by hash
	 *
	 * @return {number|boolean} - index of element or false if no match
	 */
	getIndexByHash() {
		let hash = document.location.hash.split('#');
		let retVal = false;
		let i = 0;

		if (hash < 2) {
			return false;
		}

		for (i; i < this.$accordionContents.length; i++) {
			if (this.$accordionContents[i].id === hash[1]) {
				retVal = i;
				break;
			}
		}

		return retVal;
	}

	/**
	 * Open accordion content referenced by hash
	 *
	 * @param {object} e - event object
	 */
	onHashChange(e) {
		let idx = this.getIndexByHash();

		if (typeof idx === 'number') {

			if (this.options.singleOpen) {
				this.closeAll();
			}

			this.activateBtn(this.$accordionBtns.eq(idx));
			this.slideDown(this.$accordionContents.eq(idx));

		}
	}

	/**
	 * Save heights of all accordion contents.
	 *
	 * @param {Array} items - array of items
	 */
	saveHeights(items) {
		Helpers.forEach(items, (idx, item) => {
			this.saveHeight(item);
		});
	}

	/**
	 * Save the height of the node item.
	 *
	 * @param {Object} item - item to calculate the height
	 */
	saveHeight(item) {
		let $el = $(item);

		// the el is hidden so:
		// making the el block so we can measure its height but still be hidden
		$el.addClass(this.options.calculatingClass);

		let wantedHeight = $el.outerHeight();

		// reverting to the original values
		$el.removeClass(this.options.calculatingClass);

		// save height in data attribute
		$el.attr(this.options.dataMaxAttr, wantedHeight);
	}

	/**
	 * Handle the click,
	 * get the id of the clicked button and
	 * execute the toggleContent method.
	 *
	 * @param {Object} e - event object
	 * @param {object} currentTarget - Target to which listener was attached.
	 */
	handleClick(e, currentTarget) {
		this.$btn = currentTarget ? $(currentTarget) : $(e.currentTarget);
		let targetId = this.$btn.attr('href');

		e.preventDefault();

		if (this.options.tabMode && this.$btn.hasClass(this.options.activeClass)) {
			return;
		}

		this.toggleContent(targetId);
	}

	/**
	 * Toggle the accordion content by using the id of the accordion button.
	 *
	 * @param {String} id - id of the target
	 *
	 * @public
	 */
	toggleContent(id) {
		this.$target = this.$el.find(id);

		if (this.$target.hasClass(this.options.openClass)) {
			this.slideUp(this.$target);
			this.deactivateBtn(this.$btn);
		} else {

			if (this.options.singleOpen || this.options.tabMode) {
				this.closeAll();
			}

			this.activateBtn(this.$btn);
			this.slideDown(this.$target);
		}
	}

	/**
	 * Mimics the slideUp functionality of jQuery by using height and transition.
	 *
	 * @param {Object} $item - jQuery object of item
	 */
	slideUp($item) {
		$item
			.css('height', 0)
			.removeAttr('style')
			.attr('aria-expanded', 'false')
			.removeClass(this.options.openClass)
			.addClass(this.options.closeClass);
	}

	/**
	 * Mimics the slideDown functionality of jQuery by using height and transition.
	 *
	 * @param {Object} $item - jQuery object of item
	 */
	slideDown($item) {
		$item
			.css('height', $item.attr('data-js-height') + 'px')
			.attr('aria-expanded', 'true')
			.removeClass(this.options.closeClass)
			.addClass(this.options.openClass);
	}

	/**
	 * Adds active class to the clicked button.
	 *
	 * @param {Object} $item - jQuery object of button
	 */
	activateBtn($item) {
		$item.addClass(this.options.activeClass);
	}

	/**
	 * Removes active class from the button.
	 *
	 * @param {Object} $item - jQuery object of button
	 */
	deactivateBtn($item) {
		$item.removeClass(this.options.activeClass);
	}

	/**
	 * Remove all styles of the accordion content elements
	 */
	removeStyles() {
		this.$accordionContents.removeAttr('style');
	}

	/**
	 * Close all accordion contents and active buttons
	 *
	 * @public
	 */
	closeAll() {
		Helpers.forEach(this.$accordionContents, (idx, item) => {
			this.slideUp($(item));
		});
		Helpers.forEach(this.$accordionBtns, (idx, item) => {
			this.deactivateBtn($(item));
		});
	}

	/**
	 * Close all accordion contents and active buttons
	 *
	 * @public
	 */
	openAll() {
		Helpers.forEach(this.$accordionContents, (idx, item) => {
			this.slideDown($(item));
		});
		Helpers.forEach(this.$accordionBtns, (idx, item) => {
			this.activateBtn($(item));
		});
	}
}

// Returns constructor
export default Accordion;