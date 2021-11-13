const scrollPage = () => {
	const pageHeight = window.outerHeight;
	document.querySelectorAll('.invisible').forEach((invis) => {
		invis.classList.add('fadeIn');
		if (pageHeight >= invis.getBoundingClientRect().top + 0.1 * pageHeight) {
			invis.classList.toggle('invisible', false);
		}
	});
};

const applyBranding = (brand) => {
	clearBranding();
	document.querySelector('body').classList.add(brand);
};

const clearBranding = () => {
	document.querySelector('body').classList.remove('mailchimp', 'yikyak', 'razorfish');
};

window.addEventListener('DOMContentLoaded', () => {
	window.addEventListener('scroll', scrollPage);
	scrollPage();

	document.querySelectorAll('[data-brand]').forEach((link) => {
		link.addEventListener('mouseenter', () => {
			applyBranding(link.dataset.brand);
		});
		link.addEventListener('mouseleave', () => {
			clearBranding();
		});
	});
});
