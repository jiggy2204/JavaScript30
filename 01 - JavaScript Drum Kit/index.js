document.onload = function(){
    const soundKeys = document.querySelectorAll("div[data-key]");
    console.log(soundKeys);

    const soundArray = Array.from(soundKeys);

    console.log(soundArray.length);
}