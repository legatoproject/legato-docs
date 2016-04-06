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

$(document).ready(function() {


     $("#autocomplete").click(function(){
        $("#search_result").show();
    });
     
    var $content = $('.content');
    var is_mobile = screen.width <= 719;

    if (!is_mobile) {
        $("#left").perfectScrollbar();
    }
    else
    {
        $("#left").detach().appendTo('#top');
        $("#resizable").remove();
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

// perform a search.
// ctx: context of current page, e.g. "Build Apps"
function getdata(ctx) {
    var domain = "";
    var invoke_url = "https://x6khds7mia.execute-api.us-west-2.amazonaws.com/prod";
    if (ctx == "Legato Documentation")
        ctx = "";
    var keyword = $('#autocomplete').val();
    var ac = $("#autocomplete").autocomplete({
        delay: 10,
        autoFocus: true,
        source: function(request, response) {
            $.ajax({
                url: invoke_url,
                dataType: "json",
                data: new function() {
                    this.q = request.term;
                    this.size = 15;
                    if (ctx != "")
                        this.fq = "context:'" + ctx + "'"; //only include "context:" filter if ctx isnt empty
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
                        results.push({
                            value: "javascript:void(0);",
                            label: "No results found :("
                        });
                    } else
                        for (i = 0; i < hits.length; i++) {
                            var result = new Object();
                            result.value = hits[i].id;
                            result.cat = hits[i].fields.category;
                            if (result.cat === undefined)
                                result.cat = "Root"

                            result.label = "" + result.cat + "<br/><b>" + hits[i].fields.title + "</b>";

                            result.title = hits[i].fields.title;
                            results.push(result);
                        }
                    response(results);
                }
            });

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
        $.each(items, function(index, item) {
            that._renderItemData(ul, item);
        });
    };

}
/***** NAVIGATION TREE ******/

function setupTree(treeURL) {
    if (treeURL != "") {


        $(document).ready(function() {
            String.prototype.endsWith = function(suffix) {
                return this.indexOf(suffix, this.length - suffix.length) !== -1;
            };
            $.getJSON(
                treeURL,
                function(data) {
                    $tree = $('#tree1');
                    $tree.tree({
                        data: data.children ? data.children : data,
                        saveState: false,
                        useContextMenu: false,
                        slide:false,
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

                    // we want to get 
                    var path = window.location.pathname; // path = /docs/filename.html
                    var page = path.split("/").pop(); // page = filename.html
                    var anchor = window.location.hash.substr(1); // anchor = section
                    if(anchor)
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
                    

                }
            );

        });
    }
}