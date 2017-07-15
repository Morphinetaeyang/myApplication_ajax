var __M_ = jQuery.noConflict()

window.myApplication = { 
   submit: function (options) {

        if (this.isMyApplication(options)) {

            __M_.ajax({

                url: options.url,
                data: options.data,

                dataType: options.dataType || ('JSON'),
                type: options.type || ('GET'),

                success: options.success,
                error: options.error,
            })
        } else {
            console.log('no object' + '\n' + '\n' + 'no Array')
        }
    }, 
}
