Welcome to Louis' yard!  
stay as long as you like, relax  
the weather's nice, there's a cool breeze, you're feeling peaceful  
click about, or don't  
who cares   

<section class="lawn">
 
[Heart of Bart residency](./heartofbart.html)
[free at last - a bee epic](./finallybeefree/)
<!-- [ask an orange](./wronganswer.html) -->
[erase](../erase)
[seeking resonance over distance](../resonance)
[i'm tired](../godiamtired)
[wow...more links!](../chain)
[smells](./smelly.txt)  
[2022 zinefest](festivalofthephotocopier2022)  

[cool video about making a slingshot (not mine)](https://www.youtube.com/watch?v=PmHSQPWHvfU)
</section>

<script>
    document.querySelectorAll('.lawn a').forEach((el) => {
        el.after(aBladeOfGrass());
        scatter(el);
    })
    function aBladeOfGrass(){
        let grass = ["g","r","a","s","s",",,,","'''","...","*","~"]
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
</script>