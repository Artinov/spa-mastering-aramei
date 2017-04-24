var page = {
    pages: [],
    active: ""
}

$(document).ready(function() {
    $("#navigation a").click(function(e) {
        e.preventDefault();
        var pageName = $(e.currentTarget).attr("href").split("/").pop();
        if (pageName.length == 0) {
            $("#test > div").hide();
            return;
        };

        if (page.pages.indexOf(pageName) != -1) {
            if (pageName == "" || pageName == page.active) {
                return;
            };

            $("#test > div:not([data-page='" + pageName + "'])").hide();
            $("#test > div[data-page='" + pageName + "']").show();

            page.active = pageName;
        } else {
            page.pages.push(pageName);

            $.get("./pages/" + pageName + ".html").then(function(res) {
                var wrapperDiv = document.createElement("div");
                $(wrapperDiv).attr("data-page", pageName).html(res);
                $("#test").append(wrapperDiv);

                if (pageName == "" || pageName == page.active) {
                    return;
                };

                $("#test > div:not([data-page='" + pageName + "'])").hide();

                page.active = pageName;
            });
        };

    });
});

function changePage(pageName) {
    if (page.pages.indexOf(pageName) != -1) {
        if (pageName == "" || pageName == page.active) {
            return;
        };

        $("#test > div:not([data-page='" + pageName + "'])").hide();
        $("#test > div[data-page='" + pageName + "']").show();

        page.active = pageName;
    } else {
        page.pages.push(pageName);

        $.get("./pages/" + pageName + ".html").then(function(res) {
            var wrapperDiv = document.createElement("div");
            $(wrapperDiv).attr("data-page", pageName).html(res);
            $("#test").append(wrapperDiv);

            if (pageName == "" || pageName == page.active) {
                return;
            };

            $("#test > div:not([data-page='" + pageName + "'])").hide();

            page.active = pageName;
        });
    };
};

