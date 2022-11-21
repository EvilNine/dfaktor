const preventLinksActions = () => {
    const links = document.querySelectorAll('a')
    for( let i = 0; i < links.length; i++ ) {
        links[i].addEventListener('click', (e)=>{
            e.preventDefault()
            if(document.querySelector('.active')) document.querySelector('.active').classList.remove('active')
            e.target.classList.add('active')
        })
    }
    
}

export default preventLinksActions;