module.exports = function(Handlebars) {

window["App"] = window["App"] || {};
window["App"]["Templates"] = window["App"]["Templates"] || {};

window["App"]["Templates"]["OVERLAY"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"c-overlay--default\" data-css=\"c-overlay\" data-js-item=\"overlay\">\n	<div class=\"overlay__wrapper\">\n		<button class=\"overlay__close\" data-js-item=\"overlay-close\"></button>\n		<div class=\"overlay__content\">\n			<div class=\"overlay__inner\" data-js-item=\"overlay-content\">\n\n			</div>\n		</div>\n	</div>\n	<div class=\"overlay__mask\" data-js-item=\"overlay-mask\"></div>\n</div>";
},"useData":true});

return window["App"]["Templates"];

};