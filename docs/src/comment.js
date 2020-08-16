
window.onload=()=>{
    const windowWidth=window.innerWidth;
    let comment;
    if (windowWidth>854+32){
        comment=new NicommentJS('comment',854,480);
    } else {
        const width=windowWidth-32;
        const height=width/16*9;
        $('#comment').css({height:`${height}px`,width:`${width}px`})
        comment=new NicommentJS('comment',width,height);
    }
    $('#naka').on('click',handleClick);
    $('#shita').on('click',handleClick);
    $('#ue').on('click',handleClick);
    $('#deleteComment').on('click',()=>{
        comment.clear();
    })

    function handleClick(e){
        const id=e.target.id
        const text=getComment();
        if (text){
            switch (id){
                case 'ue':
                    postComment(text,'ue','blue');
                    console.dir(comment.layers.get('base').ue)
                    break;
                case 'shita':
                    postComment(text,'shita','red');
                    break;
                default:
                    postComment(text,'naka','#fff');
            }
            console.log(text)
        }
    }

    function getComment(){
        return $('#commentBox').val();
    }

    function postComment(text,type,color){
        comment.send(text,{type:type,color:color});
    }
}