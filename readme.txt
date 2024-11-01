=== Suppress WHIP Notification ===
Contributors: desmith
Donate link: http://example.com/
Tags: whip
Requires at least: 4.5
Tested up to: 4.9.4
Stable tag: 1.0
License: WTFPL
License URI: http://www.wtfpl.net/txt/copying/

This plugin will suppress the "WHIP" PHP upgrade notifications on the WordPress dashboard.

== Description ==

If you or your Web host are currently using PHP 5.2.x or 5.3.x, some plugins (most notably Yoast SEO) use a mechanism called "WHIP" to encourage you to upgrade your version of PHP. They do this with a large, ugly notification that cannot be permanently dismissed. This plugin uses a simple piece of JavaScript to search for, and quickly hide, these notifications.

Note that if, in the future, any such plugin is modified so that it now actually requires features not supported in your version of PHP, this plugin will NOT magically make those plugins work! It is up to YOU to make sure your sites don't suddenly break because of updates.


== Installation ==

Upload and activate, using the standard WordPress techniques. No additional configuration is required.

== Changelog ==

= 1.0 =
* Initial version.
