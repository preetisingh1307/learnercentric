$(document).ready(function () {
	(function ($) {
		'use strict';

		jQuery.validator.addMethod(
			'answercheck',
			function (value, element) {
				return this.optional(element) || /^\bcat\b$/.test(value);
			},
			'type the correct answer -_-'
		);

		// validate contactForm form
		$(function () {
			$('#contactForm').validate({
				rules: {
					name: {
						required: true,
						minlength: 4,
					},
					skills: {
						required: true,
						minlength: 4,
					},
					subject: {
						required: true,
						minlength: 6,
					},
					number: {
						required: true,
						minlength: 10,
					},
					email: {
						required: true,
						email: true,
					},
					message: {
						required: true,
						minlength: 10,
					},
				},
				messages: {
					name: {
						required: 'Please enter your name to identify you?',
						minlength: 'your name must consist of at least 4 characters',
					},
					subject: {
						required: 'Pl?',
						minlength: 'your subject must consist of at least 6 characters',
					},
					number: {
						required: "come on, you have a number, don't you?",
						minlength: 'Enter valid contact number',
					},
					email: {
						required: 'no email, no message',
					},
					message: {
						required:
							'um...yea, you have to write something to send this form.',
						minlength: 'thats all? really?',
					},
				},
				submitHandler: function (form) {
					console.log(sumitted);
					$(form).ajaxSubmit({
						type: 'POST',
						data: $(form).serialize(),
						url: '/contct',
						beforeSend: function () {
							$('.loading').fadeIn();
						},
						success: function () {
							console.log('success');
							$('.loading').fadeOut();
							$('.sent-message').fadeIn();
							setTimeout(() => {
								$('.sent-message').fadeOut();
							}, 5000);
							$('#contactForm')
								.find('input:not(input[type=submit]), textarea')
								.val('');
						},
						error: function () {
							$('#contactForm')
								.find('input:not(input[type=submit]), textarea')
								.val('');
							$('.loading').fadeOut();
							$('.error-message').fadeIn();
							setTimeout(() => {
								$('.error-message').fadeOut();
							}, 5000);
						},
					});
				},
			});
		});
	})(jQuery);
});
