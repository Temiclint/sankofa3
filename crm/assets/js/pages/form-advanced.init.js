jQuery(document).ready(function () {
    $("#my_multi_select3").multiSelect({
        selectableHeader: "<input type='text' class='form-control search-input' autocomplete='off' placeholder='search...'>",
        selectionHeader: "<input type='text' class='form-control search-input' autocomplete='off' placeholder='search...'>",
        afterInit: function (e) {
            var t = this,
                a = t.$selectableUl.prev(),
                n = t.$selectionUl.prev(),
                s = "#" + t.$container.attr("id") + " .ms-elem-selectable:not(.ms-selected)",
                r = "#" + t.$container.attr("id") + " .ms-elem-selection.ms-selected";
            t.qs1 = a.quicksearch(s).on("keydown", function (e) {
                if (40 === e.which) return t.$selectableUl.focus(), !1
            }), t.qs2 = n.quicksearch(r).on("keydown", function (e) {
                if (40 == e.which) return t.$selectionUl.focus(), !1
            })
        },
        afterSelect: function () {
            this.qs1.cache(), this.qs2.cache()
        },
        afterDeselect: function () {
            this.qs1.cache(), this.qs2.cache()
        }
    }), $(".select2").select2(), $(".select2-limiting").select2({
        maximumSelectionLength: 2
    })
}), $(".vertical-spin").TouchSpin({
    verticalbuttons: !0,
    buttondown_class: "btn btn-primary",
    buttonup_class: "btn btn-primary"
});
var vspinTrue = $(".vertical-spin").TouchSpin({
    verticalbuttons: !0
});
vspinTrue && $(".vertical-spin").prev(".bootstrap-touchspin-prefix").remove(), $("input[name='demo1']").TouchSpin({
    min: 0,
    max: 100,
    step: .1,
    decimals: 2,
    boostat: 5,
    maxboostedstep: 10,
    buttondown_class: "btn btn-primary",
    buttonup_class: "btn btn-primary",
    postfix: "%"
}), $("input[name='demo2']").TouchSpin({
    min: -1e9,
    max: 1e9,
    stepinterval: 50,
    buttondown_class: "btn btn-primary",
    buttonup_class: "btn btn-primary",
    maxboostedstep: 1e7,
    prefix: "$"
}), $("input[name='demo3']").TouchSpin({
    buttondown_class: "btn btn-primary",
    buttonup_class: "btn btn-primary"
}), $("input[name='demo3_21']").TouchSpin({
    initval: 40,
    buttondown_class: "btn btn-primary",
    buttonup_class: "btn btn-primary"
}), $("input[name='demo3_22']").TouchSpin({
    initval: 40,
    buttondown_class: "btn btn-primary",
    buttonup_class: "btn btn-primary"
}), $("input[name='demo5']").TouchSpin({
    prefix: "pre",
    postfix: "post",
    buttondown_class: "btn btn-primary",
    buttonup_class: "btn btn-primary"
}), $("input[name='demo0']").TouchSpin({
    buttondown_class: "btn btn-primary",
    buttonup_class: "btn btn-primary"
}), jQuery("#timepicker").timepicker({
    defaultTIme: !1,
    icons: {
        up: "mdi mdi-chevron-up",
        down: "mdi mdi-chevron-down"
    }
}), jQuery("#timepicker2").timepicker({
    showMeridian: !1,
    icons: {
        up: "mdi mdi-chevron-up",
        down: "mdi mdi-chevron-down"
    }
}), jQuery("#timepicker3").timepicker({
    minuteStep: 15,
    icons: {
        up: "mdi mdi-chevron-up",
        down: "mdi mdi-chevron-down"
    }
}), $(".colorpicker-default").colorpicker({
    format: "hex"
}), $(".colorpicker-rgba").colorpicker(), jQuery("#datepicker").datepicker(), jQuery("#datepicker-autoclose").datepicker({
    autoclose: !0,
    todayHighlight: !0
}), jQuery("#datepicker-inline").datepicker(), jQuery("#datepicker-multiple-date").datepicker({
    format: "mm/dd/yyyy",
    clearBtn: !0,
    multidate: !0,
    multidateSeparator: ","
}), jQuery("#date-range").datepicker({
    toggleActive: !0
}), $(".input-daterange-datepicker").daterangepicker({
    buttonClasses: ["btn", "btn-sm"],
    applyClass: "btn-secondary",
    cancelClass: "btn-primary"
}), $(".input-daterange-timepicker").daterangepicker({
    timePicker: !0,
    format: "MM/DD/YYYY h:mm A",
    timePickerIncrement: 30,
    timePicker12Hour: !0,
    timePickerSeconds: !1,
    buttonClasses: ["btn", "btn-sm"],
    applyClass: "btn-secondary",
    cancelClass: "btn-primary"
}), $(".input-limit-datepicker").daterangepicker({
    format: "MM/DD/YYYY",
    minDate: "06/01/2016",
    maxDate: "06/30/2016",
    buttonClasses: ["btn", "btn-sm"],
    applyClass: "btn-secondary",
    cancelClass: "btn-primary",
    dateLimit: {
        days: 6
    }
}), $("#reportrange span").html(moment().subtract(29, "days").format("MMMM D, YYYY") + " - " + moment().format("MMMM D, YYYY")), $("#reportrange").daterangepicker({
    format: "MM/DD/YYYY",
    startDate: moment().subtract(29, "days"),
    endDate: moment(),
    minDate: "01/01/2016",
    maxDate: "12/31/2016",
    dateLimit: {
        days: 60
    },
    showDropdowns: !0,
    showWeekNumbers: !0,
    timePicker: !1,
    timePickerIncrement: 1,
    timePicker12Hour: !0,
    ranges: {
        Today: [moment(), moment()],
        Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
        "Last 7 Days": [moment().subtract(6, "days"), moment()],
        "Last 30 Days": [moment().subtract(29, "days"), moment()],
        "This Month": [moment().startOf("month"), moment().endOf("month")],
        "Last Month": [moment().subtract(1, "month").startOf("month"), moment().subtract(1, "month").endOf("month")]
    },
    opens: "left",
    drops: "down",
    buttonClasses: ["btn", "btn-sm"],
    applyClass: "btn-success",
    cancelClass: "btn-secondary",
    separator: " to ",
    locale: {
        applyLabel: "Submit",
        cancelLabel: "Cancel",
        fromLabel: "From",
        toLabel: "To",
        customRangeLabel: "Custom",
        daysOfWeek: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        firstDay: 1
    }
}, function (e, t, a) {
    console.log(e.toISOString(), t.toISOString(), a), $("#reportrange span").html(e.format("MMMM D, YYYY") + " - " + t.format("MMMM D, YYYY"))
}), $("input#defaultconfig").maxlength({
    warningClass: "badge badge-success",
    limitReachedClass: "badge badge-danger"
}), $("input#thresholdconfig").maxlength({
    threshold: 20,
    warningClass: "badge badge-success",
    limitReachedClass: "badge badge-danger"
}), $("input#moreoptions").maxlength({
    alwaysShow: !0,
    warningClass: "badge badge-success",
    limitReachedClass: "badge badge-danger"
}), $("input#alloptions").maxlength({
    alwaysShow: !0,
    warningClass: "badge badge-success",
    limitReachedClass: "badge badge-danger",
    separator: " out of ",
    preText: "You typed ",
    postText: " chars available.",
    validate: !0
}), $("textarea#textarea").maxlength({
    alwaysShow: !0,
    warningClass: "badge badge-success",
    limitReachedClass: "badge badge-danger"
}), $("input#placement").maxlength({
    alwaysShow: !0,
    placement: "top-left",
    warningClass: "badge badge-success",
    limitReachedClass: "badge badge-danger"
}), $('[data-plugin="switchery"]').each(function (e, t) {
    new Switchery($(this)[0], $(this).data())
}), $('[data-plugin="multiselect"]').multiSelect($(this).data()), $(document).ready(function () {
    $('[data-toggle="input-mask"]').each(function (e, t) {
        var a = $(t).data("maskFormat"),
            n = $(t).data("reverse");
        null != n ? $(t).mask(a, {
            reverse: n
        }) : $(t).mask(a)
    })
});