var stopVideo = function () 
{
    console.log("I'm a code that works OK!");
    
    var iframe = document.querySelector( 'iframe');
    var video = document.querySelector( 'video' );

    if ( iframe !== null ) 
    {
        console.log("Here lemme show you")
        var iframeSrc = iframe.src;
        iframe.src = iframeSrc;
    }
    if ( video !== null ) 
    {
        console.log("Here lemme show you")
        video.pause();
    }
}
console.log("huh? Said anythin'?");