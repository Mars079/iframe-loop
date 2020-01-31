    let tag = document.createElement('script');
    let externalTag = document.getElementById('myTag')
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.insertBefore(tag, externalTag)


    //Set up Youtube Iframe API.
    let player;
    function onYouTubeIframeAPIReady(){
      player = new YT.Player('player', {
        height: '290',
        width: '540',
        videoId: 'YourVideoID',
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });
    }
    
    function onPlayerStateChange(event){
        //Player changes listener.
      }

    function onPlayerReady(event){
        //Loads player.
        event.target.stopVideo();
        document.getElementById('btn').onclick = () => {
          loadVideo()
        }

        function loadVideo(){
          //Gets the desired reproduction seconds from input.
          let startTime = document.getElementById('start').value;
          let endTime = document.getElementById('stop').value;

          //Loads looping video.
          player.loadVideoById({
              videoId: 'YourVideoID',
              startSeconds: Number(startTime),
              endSeconds: Number(endTime)
          });

          //If player is not paused, loops video.
          if(player.loadVideoById){
              setTimeout(() => {
                  let myPlayerState = player.getPlayerState();
                  if(myPlayerState != 2){
                      loadVideo()
                 }
              }, Number(endTime) * 1000)
            }
          }
       }
    
  

  


  


     
