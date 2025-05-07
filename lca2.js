
console.log("JS loaded. Add interactions here if needed.");
<script>
  const scrollContent = document.getElementById('scrollContent');
  // Duplicate content dynamically (optional enhancement)
  scrollContent.innerHTML += scrollContent.innerHTML;
</script>
 const mainPic = document.getElementById("mainpic");
 mainPic.addEventListener("click", imageClick);
 
 function imageMouseover(event){
    console.log("the image has been hovered over");
    mainPic.classList.toggle("image_mouseovered");
    mainPic.style.opacity = "0.5"
 }
 