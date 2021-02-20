document.getElementById('searchInput').addEventListener('keyup', function(event) {
    let searchQuery = event.target.value.toLowerCase();
    let allNamesDOMCollection = document.querySelectorAll('.name')

    for (let i = 0; i < allNamesDOMCollection.length; i++) {
        const currentName = allNamesDOMCollection[i].textContent.toLowerCase();


        if (currentName.includes(searchQuery)) {
            allNamesDOMCollection[i].style.display = 'block'
        } else {
            allNamesDOMCollection[i].style.display = 'none'
        }
    }
})

/*
    Task: Comparing the search query vs. the DOM names
    1. Create a conditional that checks if currentName is equal to the user's search query!
    2. If our conditional returns true, set the display style on 'allNamesDOMCollection[counter]' 
    to be a block element
    3. If our conditional falls into the else, we have no match! So set the display style to 'none'
    
    Helpers: use the methods 'includes' for objective 1
    - The includes() method determines whether one string may be found within another string, 
    returning true or false as appropriate.
*/