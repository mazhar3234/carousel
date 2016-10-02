/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function () {

    var owl = $("#owl-demo");

    owl.owlCarousel({
        autoplay: true,
        autoplayTimeout: 2000,
        autoplaySpeed: 1500,
        loop: true,
        margin: 10,
        singleItem: true,
        slideSpeed: 500,
        rewindSpeed: 500,
        nav: true,
        navText: [
            "<span class='fa fa-chevron-left'></span>",
            "<span class='fa fa-chevron-right'></span>"
        ],
        pagination: true,
        responsiveRefreshRate: 200,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
});