$(document).ready(function(){
    function updateHref(browser) {
        switch(browser) {
            case 'chrome':
                return 'https://www.google.com/search?q=';
            case 'firefox':
                return 'https://www.mozilla.org/en-US/';
            case 'safari':
                return 'https://www.apple.com/safari/';
            case 'opera':
                return 'https://www.opera.com/';
            case 'brave':
                return 'https://search.brave.com/search?q=';
            case 'internet-explorer':
                return 'https://www.microsoft.com/en-us/edge';
            default:
                return '#';
        }
    }
    $('[data-browser]').each(function(){
        var browser = $(this).data('browser');
        var href = updateHref(browser);
        $(this).attr('href', href);
    });
});
