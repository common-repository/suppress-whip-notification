jQuery(document).ready(function($) {
	$(".error").each(function() {
		var str=$(this).html();
		if (str.search("Your site could be faster and more secure with a newer PHP version") !== -1) {
			$(this).hide();
		}
	})
})
