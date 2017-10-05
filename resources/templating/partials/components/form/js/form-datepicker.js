/**
 * form component datepicker
 *
 * @module FormDatepicker
 * @version v1.0.0
 *
 * @author Sang-In Haetzel
 * @author Sebastian Fitzner
 */
require('moment');
import { Veams } from 'app';
import VeamsComponent from 'veams/src/js/common/component';
const $ = Veams.$;
const Pikaday = require('pikaday');

class FormDatepicker extends VeamsComponent {
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
		let options = {};
		super(obj, options);
	}

	/**
	 * Get module information
	 */
	static get info() {
		return {
			name: 'FormDatepicker',
			version: '1.0.0'
		};
	}

	/**
	 * GETTERS AND SETTERS
	 */
	/**
	 * Get and set date
	 */

	/**
	 * Date
	 */
	set date(date) {
		this._date = date;
		this.datetimepicker.setDate(this._date, true);
	}

	get date() {
		return this._date;
	}

	/**
	 * i18n
	 */
	get i18nFallback() {
		return {
			previousMonth: 'Previous Month',
			nextMonth: 'Next Month',
			months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
			weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
			calendarFormat: 'DD.MM.YYYY'
		}
	}

	/**
	 * Initialize class
	 */
	initialize() {
		let i18n = Veams.i18n && Veams.i18n.datepicker ? Veams.i18n.datepicker : this.i18nFallback;

		let _this = this;
		this.$input = $('input', this.$el);
		this.dateFormat = i18n.calendarFormat;
		this.datetimepicker = new Pikaday({
			field: this.$input[0],
			i18n: i18n,
			container: this.el,
			onSelect: function () {
				_this.date = this.getMoment().format(_this.dateFormat);
				_this.$input.val(_this.date);
			}
		});
	}
}
// Returns constructor
export default FormDatepicker;