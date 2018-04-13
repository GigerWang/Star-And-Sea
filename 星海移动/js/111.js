$(function() {
$(".school_ja_title_down .d_school_box_on").click(function() {
var a = $(".school_ja_title_down .d_school_box_on").index($(this));
$(".school_ja_title_down .d_school_box").eq(a).removeClass("d_school_box_none");
$(".school_ja_title_down .d_school_box_on").eq(a).hide();
$(".school_ja_title_down .d_school_box_off").eq(a).show();
})
$(".school_ja_title_down .d_school_box_off").click(function() {
var a = $(".school_ja_title_down .d_school_box_off").index($(this));
$(".school_ja_title_down .d_school_box").eq(a).addClass("d_school_box_none");
$(".school_ja_title_down .d_school_box_off").eq(a).hide();
$(".school_ja_title_down .d_school_box_on").eq(a).show();
})
})