const currentPage = location.pathname
const menuItems = document.querySelectorAll(".link a")

for (item of menuItems) {

    if(currentPage.includes(item.getAttribute("href"))) {
        
        console.log(item)
    
    }

}