var invoke_url = "https://sj3kp3pd4g.execute-api.us-west-2.amazonaws.com/prod"; // cloudsearch api endpoint
var restrict_to_ctx = false; // restrict search to current context?



var sq = getUrlParameter('sq');
var noSH;
try {
    /*** get rid of ?sq= parameter ASAP ***/
    if (sq && sq !== undefined) {
        var re = new RegExp("(\\?|&)sq=" + escapeRegExp(encodeURIComponent(sq)));
        var newurl = location.href.replace(re, '');
        if (~newurl.indexOf('&') && !~newurl.indexOf('?')) {
            newurl = newurl.replace('&', '?');
        }
        window.history.replaceState({}, '', newurl);
    }

} catch (err) {
    console.log("Couldn't replaceState! Oh well, not a big deal.");
    console.error(err);
}


! function(l, e, g, a, t, o) {
    l.GoogleAnalyticsObject = g;
    l[g] || (l[g] = function() {
        (l[g].q = l[g].q || []).push(arguments)
    });
    l[g].l = +new Date;
    t = e.createElement(a);
    o = e.getElementsByTagName(a)[0];
    t.src = '//www.google-analytics.com/analytics.js';
    o.parentNode.insertBefore(t, o)
}(window, document, 'ga', 'script');

ga('create', 'UA-78024926-1', 'auto');
ga('send', 'pageview');



/****** DOM STUFF *********/

// adjusts altitude of content and navbar, in case header size changes.
function nav_altitude() {

    var h = $('#menudocumentation').height();
    if ($("#menudocumentation").css("position") != "fixed") {
        $('#resizable').css("top", 0);
    } else {
        $('#resizable').css("top", h);
    }
    $('.content').css("padding-top", h + 40);

    if (!$('#resizable').is(":visible")) {
        $('.content').css('padding-left', 15);
    } else {
        $('.content').css('padding-left', parseInt($('#resizable').css('width')) + 100);
    }

}

function updateSearchHighlight() {
    var root = $('.contents');
    if (noSH) {
        root.removeHighlight();
    } else {
        sq.replace(/[^\w\s\*]/g, '').split(" ").forEach(function(term) {
            root.highlight(term);
        });


        var el = $("span.search-highlight");
        if (el.length > 0) {
            var top = el.first().offset().top - (window.innerHeight / 2);
            window.scrollTo(0, top);

        }

    }
}
$(document).ready(function() {
    noSH = $.cookie("no-sh");
    // don't replace searchbox if it already contains something (from going back a page)
    if ($("#searchbox").val() == "")
        $("#searchbox").val(sq);
    // Contains = case insensitive version of 'contains'
    $.expr[":"].Contains = jQuery.expr.createPseudo(function(arg) {
        return function(elem) {
            return jQuery(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
        };
    });



    /*** highlight previous search query on page ****/
    if (sq !== undefined) {
        var $div = $('<div id="sh_options"><span>Search term highlight - <a id="toggle_highlight">' + (noSH ? '[off]' : '[on]') + '</a></span></div>').appendTo('body');
        $div.find('#toggle_highlight').on('click', function() {
            noSH = !noSH;
            updateSearchHighlight();
            $(this).text((noSH ? '[off]' : '[on]'));
            if (noSH)
                $.cookie("no-sh", 1);
            else
                $.removeCookie("no-sh");
        });
        updateSearchHighlight();

    }

    $("#searchbox").keyup(function(e) {
        // alphanumeric or enter
        if (e.keyCode >= 48 && e.keyCode <= 90 || e.keyCode == 13) {
            onSearchRequested();
        }
    });
    $("#searchbox").focus(function() {
        onSearchRequested();
    });
    var $content = $('.content');
    var is_mobile = screen.width <= 719;

    if (is_mobile) {
        $("#left").detach().appendTo('#top');
        $("#resizable").remove();
    } else {
        $("#left").perfectScrollbar();
    }

    nav_altitude();
    $(window).resize(nav_altitude);
    // closing and opening of hamburger
    $("#menu-trigger").click(function() {
        $("#top")[this.opened ? "removeClass" : "addClass"]("menu-open");
        $(this)[this.opened ? "removeClass" : "addClass"]("trigger-open");
        this.opened = !this.opened;
    });
    $(".content").click(function() {
        $("#top").removeClass("menu-open");
        $("#menu-trigger").removeClass("trigger-open");
        $("#menu-trigger")[0].opened = false;
    });
    $("#top a").click(function() {
        $("#top").removeClass("menu-open");
        $("#menu-trigger").removeClass("trigger-open").get(0).opened = false;

    });

    var cookieName = 'navwidth';
    var width = parseInt($.cookie(cookieName)) || 300;

    var preventNextClick = false; // so resize doesn't trigger click

    function adjust_content_padding(w) {
        $content.css('padding-left', w + 100 + 'px');
    }

    $('#resizable').css('width', width + 'px');
    adjust_content_padding(width);

    $('#resizable').resizable({
        handles: 'e',
        maxWidth: 500,
        minWidth: 5,
        resize: function(event, ui) {

            adjust_content_padding(ui.size.width);
            $.cookie(cookieName, ui.size.width);
            width = ui.size.width;

        },
        stop: function(event, ui) {
            if ($(".ui-resizable-e").is(":hover"))
                preventNextClick = true;
        }
    });
    $(".ui-resizable-e").click(function() {
        if (preventNextClick) {
            preventNextClick = false;
            return;
        }
        var $p = $(this).parent();
        if ($p.width() < width) {
            $p.width(width);
        } else if ($p.width() == 5) {
            width = 300;
            $p.width(300);
        } else {
            $p.width(5);
        }
        adjust_content_padding($p.width());
    })
});


/******* SEARCHING *******/

/**
 * Fetches search results from the backend.
 * @param search_query - The string to be searched.
 * @param callback - The callback that handles the results.
 * @param context - A context string (e.g. "Build Apps") that can be either be set
 *                  to restrict search results, or left empty to search all contexts.
 **/
function fetchSearchResults(search_query, callback, context) {
    $.ajax({
        url: invoke_url,
        dataType: "json",
        // the reason that 'data' isn't an object is the conditional inclusion of the 'fq' parameter.
        data: new function() {
            this.q = search_query;
            this.size = 25;
            // restrict search results to specific context
            if (context != "")
                this.fq = "context:'" + context + "'"; //only include "context:" filter if context isnt empty
            this.sort = "_score desc";
            this.return = "category,title,context,id";
        },
        change: function(e, ui) {
            console.log(e.target.value);
        },
        success: function(data) {
            var hits = data.hits.hit;
            var results = []
            if (hits.length == 0) {
                // if there aren't any results even with a wildcard, let the user know
                if (search_query.trim().endsWith("*"))
                    results.push({
                        value: "javascript:void(0);",
                        label: "No results found :("
                    });
            } else
                for (i = 0; i < hits.length; i++) {
                    var result = new Object();
                    if (window.location.protocol == "file:")
                        result.value = hits[i].id; // don't do highlighting on local filesystem, since we can't do url rewrites
                    else // append search query as a url parameter (for highlighting)
                        result.value = addParameter(hits[i].id, 'sq', search_query, false);
                    result.filename = hits[i].id;
                    result.cat = hits[i].fields.category;
                    if (result.cat === undefined)
                        result.cat = "Root";

                    result.label = "" + result.cat + "<br/><b>" + hits[i].fields.title + "</b>";

                    result.title = hits[i].fields.title;
                    results.push(result);
                }
            // if query doesnt end with wildcard, do a prefix search as well, and then call the callback with both sets of results together
            if (!search_query.trim().endsWith("*")) fetchSearchResults(search_query + "*", function(results2) {
                callback(uniqueSearchResults(results.concat(results2)));
            }, context);
            else
                //otherwise just call the callback
                callback(results);

        }
    });
}

function onSearchRequested() {
    ctx = $('html').data('context'); // e.g. "Build Apps"
    if (ctx == "Legato Documentation")
        ctx = "";
    var keyword = $('#searchbox').val();
    var ac = $("#searchbox").autocomplete({
        delay: 10,
        autoFocus: true,
        source: function(request, response) {
            fetchSearchResults(request.term, response, restrict_to_ctx ? ctx : "");
        },

        minLength: 1,
        focus: function(event, ui) {
            event.preventDefault(); // so the textbox's value doesn't get replaced.
        },
        select: function(event, ui) {
            event.preventDefault();
            if (ui.item) {
                window.location = ui.item.value;
            }
        },
        open: function() {
            $(this).removeClass("ui-corner-all").addClass("ui-corner-top");
            $("#search_result").css({
                top: "+=1"
            });

        },
        close: function() {
            $(this).removeClass("ui-corner-top").addClass("ui-corner-all");
        }
    });

    ac.data("ui-autocomplete")._renderItem = function(ul, item) {
        var anchor = $("<a>").attr("href", item.value).html(item.label);
        var li = $("<li>");
        anchor.appendTo(li)
        return li.appendTo(ul);
    };

    ac.data("ui-autocomplete")._renderMenu = function(ul, items) {
        var that = this;
        ul.attr('id', "search_result");
        ul.attr('class', "ui-autocomplete ui-front ui-menu ui-widget ui-widget-content");
        //ul.attr('data-resultcount',items.length + " results.");
        $.each(items, function(index, item) {
            that._renderItemData(ul, item);
        });
    };
    $("#searchbox").autocomplete("search", keyword);
}


function uniqueSearchResults(array) {
    var seen = {};

    return array.filter(function(elem) {
        href = elem.filename;
        if (seen[href]) return false;
        seen[href] = true;
        return true;
    });
}

/***** NAVIGATION TREE ******/

setupTree = function(data) {
    $(document).ready(function() {
        String.prototype.endsWith = function(suffix) {
            return this.indexOf(suffix, this.length - suffix.length) !== -1;
        };
        $tree = $('#tree1');
        $tree.tree({
            data: data.children ? data.children : data,
            saveState: false,
            useContextMenu: false,
            slide: false,
            closedIcon: "+",
            openedIcon: "-",
            keyboardSupport: false,

            onCreateLi: function(node, $li) {
                var a = $li.find('span')[0];
                a.outerHTML = '<a href="' + node.href + '">' + a.outerHTML + '</a>';
            },


        });

        $tree.tree('selectNode', null); //unselect nodes

        $("#left").perfectScrollbar('update');

        $tree.bind(
            'tree.close',
            function(e) {
                $("#left").perfectScrollbar('update');
            }
        );
        $tree.bind(
            'tree.open',
            function(e) {
                $("#left").perfectScrollbar('update');
            }
        );
        var path = window.location.pathname; // path = /docs/filename.html
        var page = path.split("/").pop(); // page = filename.html
        var anchor = window.location.hash.substr(1); // anchor = section
        if (anchor)
            page += "#" + anchor; // page = filename.html#section

        // find node of current page and select it
        $tree.tree('getTree').iterate(
            function(node, level) {
                if (node.href === page) {
                    $tree.tree('openNode', node);
                    $tree.tree('selectNode', node);
                    return false;
                }
                return true;
            }
        );
        $('#tree1').tree('setOption', 'slide', true); // now that only the user will be opening nodes, we can turn the animation back on.
        // needed when clicking an anchor, and thus staying on the same page
        $tree.bind(
            'tree.click',
            function(event) {
                $tree.tree('setOption', 'selectable', true);
                $tree.tree('selectNode', event.node);
                $tree.tree('setOption', 'selectable', false);
            }
        );

        $('#tree1').tree('setOption', 'selectable', false);


    });
}
/*** utils ***/


// http://stackoverflow.com/a/6954277/765210
function addParameter(url, parameterName, parameterValue, atStart /*Add param before others*/ ) {
    replaceDuplicates = true;
    if (url.indexOf('#') > 0) {
        var cl = url.indexOf('#');
        urlhash = url.substring(url.indexOf('#'), url.length);
    } else {
        urlhash = '';
        cl = url.length;
    }
    sourceUrl = url.substring(0, cl);

    var urlParts = sourceUrl.split("?");
    var newQueryString = "";

    if (urlParts.length > 1) {
        var parameters = urlParts[1].split("&");
        for (var i = 0;
            (i < parameters.length); i++) {
            var parameterParts = parameters[i].split("=");
            if (!(replaceDuplicates && parameterParts[0] == parameterName)) {
                if (newQueryString == "")
                    newQueryString = "?";
                else
                    newQueryString += "&";
                newQueryString += parameterParts[0] + "=" + (parameterParts[1] ? parameterParts[1] : '');
            }
        }
    }
    if (newQueryString == "")
        newQueryString = "?";

    if (atStart) {
        newQueryString = '?' + parameterName + "=" + parameterValue + (newQueryString.length > 1 ? '&' + newQueryString.substring(1) : '');
    } else {
        if (newQueryString !== "" && newQueryString != '?')
            newQueryString += "&";
        newQueryString += parameterName + "=" + (parameterValue ? parameterValue : '');
    }
    return urlParts[0] + newQueryString + urlhash;
};
// http://stackoverflow.com/a/21903119/765210
function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
}

function escapeRegExp(str) {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}


/*

highlight v5

Highlights arbitrary terms.

<http://johannburkard.de/blog/programming/javascript/highlight-javascript-text-higlighting-jquery-plugin.html>

MIT license.

Johann Burkard
<http://johannburkard.de>
<mailto:jb@eaio.com>

(modified to use word boundaries)

*/

jQuery.fn.highlight = function(pat) {
    function innerHighlight(node, pat) {
        var skip = 0;
        if (node.nodeType == 3) {
            var prefix_match = pat.endsWith('*');
            if (prefix_match)
                pat = pat.slice(0, -1); // remove wildcard from the end
            // if it's not a prefix match, we add \\b to the end to match word-final boundaries
            // in order to match whole words
            var pos = node.data.toUpperCase().search(new RegExp('\\b' + pat + (prefix_match ? '' : '\\b')));
            pos -= (node.data.substr(0, pos).toUpperCase().length - node.data.substr(0, pos).length);
            if (pos >= 0) {
                var spannode = document.createElement('span');
                spannode.className = 'search-highlight';
                var middlebit = node.splitText(pos);
                var endbit = middlebit.splitText(pat.length);
                var middleclone = middlebit.cloneNode(true);
                spannode.appendChild(middleclone);
                middlebit.parentNode.replaceChild(spannode, middlebit);
                skip = 1;
            }
        } else if (node.nodeType == 1 && node.childNodes && !/(script|style)/i.test(node.tagName)) {
            for (var i = 0; i < node.childNodes.length; ++i) {
                i += innerHighlight(node.childNodes[i], pat);
            }
        }
        return skip;
    }
    return this.length && pat && pat.length ? this.each(function() {
        innerHighlight(this, pat.toUpperCase());
    }) : this;
};

jQuery.fn.removeHighlight = function() {
    return this.find("span.search-highlight").each(function() {
        this.parentNode.firstChild.nodeName;
        with(this.parentNode) {
            replaceChild(this.firstChild, this);
            normalize();
        }
    }).end();
};
