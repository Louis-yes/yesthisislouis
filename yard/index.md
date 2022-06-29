Welcome to Louis' yard!  
stay as long as you like, relax  
the weather's nice, there's a cool breeze, you're feeling peaceful  
click about, or don't  
who cares   

<section class="lawn">
 
[Heart of Bart residency](./heartofbart.html)  
[free at last - a bee epic](./finallybeefree/)  
[erase](../erase)  
[seeking resonance over distance](../resonance)  
[i'm tired](../godiamtired)  
[wow...more links!](../chain)  
<!-- [ask an orange](./wronganswer.html) -->

</section>

<script>
    document.querySelectorAll('.lawn a').forEach((el) => {
        // el.after(aBladeOfGrass());
        // scatter(el);
    })

    // blowWind();

    // function blowWind(){
    //     document.querySelectorAll('.lawn a').forEach((el,i) => {
    //         blow(el,i);
    //     })  
    //     document.querySelectorAll('.lawn p').forEach((el,i) => {
    //         blow(el,i);
    //     })
    //     window.requestAnimationFrame(function(){
    //         blowWind();
    //     })
    // }
    function aBladeOfGrass(){
        // let grass = ["g","r","a","s","s",",,,","'''","...","*","~"]
        let grass = ["🌱","🌷"]
        let blade = document.createElement('p')
        blade.className = "grass";
        blade.innerHTML = grass[Math.floor(Math.random()*grass.length)]
        scatter(blade);
        return blade    
    }
    function scatter(el){
        el.style.display = "table";
        el.style.width = "auto";
        el.style.position = "relative";
        el.style.left = (Math.random() * (100 - ((el.clientWidth / window.innerWidth)*100))) + "%";
    }
    function blow(el, i){
        const delta = new Date().getTime();
        el.style.transform = "translateX("+ Math.sin(delta/3000 + i)*20 + "px)";
    }

    

</script>