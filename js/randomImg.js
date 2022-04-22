function RandomImg(){
    this.$img_s =  $('.img_s');
    this.$img_m =  $('.img_m');
    this.$img_l =  $('.img_l');
    this.$item_img = $('.item_img')
}

RandomImg.prototype.random = function(number){
    let arr = [];

    for(let i =0;i<number;i++){
        arr.push(i+1)
    }

    arr.sort(function () {
        return Math.random() - 0.5;
    });
    
    return arr;
    
}


RandomImg.prototype.randomWidget = function(){
    const arr_s = this.random(5);
    const arr_m = this.random(5);
    const arr_l = this.random(5);

    this.$img_s.each(function(idx){
        
        $(this).children().attr('src',`./img/widget/s_${arr_s[idx]}.jpg`);
    })
    this.$img_m.each(function(idx){
  
        $(this).children().attr('src',`./img/widget/m_${arr_m[idx]}.jpg`);
    })
    this.$img_l.each(function(idx){
    
        $(this).children().attr('src',`./img/widget/l_${arr_l[idx]}.jpg`);
    })
}

RandomImg.prototype.randomIcons = function(){
    const arr = this.random(50);
    this.$item_img.each(function(idx){
        var Img = new Image();
        var temp = `./img/appicon/appicon_${arr[idx]}.png`;
        Img.src = temp;
        Img.onload = function(){
            $(this).children().attr('src',temp);
            $(this).css({
                backgroundColor:"transparent"
            })
        }.bind(this)
        
    })
    
}
