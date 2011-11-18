$(document).ready(function(){
    $("#filter").keyup(function(){
 
        var filter = $(this).val(), count = 0;
 
        $(".profilelist li").each(function(){
 
            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).hide();
 
            } else {
                $(this).show();
                count++;
            }
        });
 
        var numberItems = count;
        $("#filter-count").text("Number of Comments = "+count);
    });
});