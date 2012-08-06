/*jslint white: true */
/*global jQuery, Markdown, Anglebars */

var anglebars, data;

;(function ( $, Anglebars, Markdown ) {

	'use strict';

	var converter = new Markdown.Converter();

	$(function () {
		
		$.ajax({
			url: 'assets/basic.html',
			success: function ( template ) {
				anglebars = new Anglebars({
					el: 'anglebars',
					data: {
						title: 'Lorem Ipsum',
						subtitle: 'placeholder subtitle',
						description: "Bobbar eeh. Ah'll gi' thee a thick ear where's tha bin soft lad face like a slapped arse. Ee by gum t'foot o' our stairs.\n\nTell thi summat for nowt tha knows any rooad will 'e 'eckerslike bloomin' 'eck gerritetten. Ee by gum. Where there's muck there's brass dahn t'coil oil nobbut a lad. What's that when it's at ooam soft southern pansy. Shurrup where's tha bin.",
						person: {
							firstname: 'Brian',
							lastname: 'Blessed',
							age: 67
						},
						itemtype: 'big',
						color: 'red',
						triple: '<p>Here is some <strong>HTML</strong></p>',
						section: {
							nested: 'world'
						},
						toplevel: 'hello',
						a: {
							one: 1
						},
						b: {
							two: 2
						},
						c: {
							three: 3
						},
						list: [
							{ text: 'The quick brown fox...', licolor: 'red' },
							{ text: '...jumped over...', licolor: 'green' },
							{ text: '...the lazy dog', licolor: 'blue' }
						]
					},
					template: template,
					formatters: {
						uppercase: function ( val ) {
							return val.toUpperCase();
						},
						markdown: function ( val ) {
							return converter.makeHtml( val );
						}
					}
				});

				data = anglebars.data;

				data.set('title', 'Lorem Ipsum')
			}
		});
	});



}( jQuery, Anglebars, Markdown ));