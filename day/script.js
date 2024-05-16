$(function() {
    // Set date format and default date
    $("#start-date, #end-date").datepicker({
        dateFormat: "dd/mm/yy",
        onSelect: function(dateText) {
            $(this).val(dateText);
        }
    }).datepicker("setDate", new Date());

    // Calendar icon click event
    $(".calendar-icon").click(function() {
        $(this).prev("input").datepicker("show");
    });

    // Calculate days difference
    $("#calculate").click(function() {
        const startDate = $("#start-date").datepicker("getDate");
        const endDate = $("#end-date").datepicker("getDate");

        if (startDate && endDate) {
            const diffTime = Math.abs(endDate - startDate);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
            $("#result").text(` ${diffDays} Days`);
        } else {
            $("#result").text("Please select both dates.");
        }
    });
});

