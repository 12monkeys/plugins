window.addEvent("domready", function () {

    $(document.body).addEvents({

        'input:relay(.clearable)': function () {
            this.toggleClass('x', this.value);
        },

            'mousemove:relay(.x)': function (e) {
            this.toggleClass('onX', this.getSize().x - 18 < e.client.x - this.getBoundingClientRect().left);
        },

            'click:relay(.onX)': function () {
            this.removeClass('x').removeClass('onX').set('value', '');
        }
    });
});