document.addEventListener('deviceready', function() {
    /* Javascript here... */
    console.log('\n-------------\nDEVICE READY');

    //example function
    function changeSomeText() {
        document.getElementById('change').innerHTML = "this text was changed by javascript";
    }

    //run the example function
    changeSomeText();
});