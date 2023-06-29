const searchWrapper = document.querySelector('.pesquisarBox');
const inputBox = searchWrapper.querySelector('input');
const sugestBox = searchWrapper.querySelector('.list');
const icon = searchWrapper.querySelector('.icon')
let linkTag = searchWrapper.querySelector('a');
let webLink;

inputBox.onkeyup =(e)=>{
    let userData = e.target.value;
    let emptyArray = [];

    if(e.key === 'Enter'){
        if(userData){
            window.open(`https://www.google.com/search?q=${userData}`, '_blank');
        }
    }
    if (userData){
        icon.onclick = ()=>{
            webLink=`https://www.google.com/search?q=${userData}`;
            linkTag.setAttribute('href', webLink);
            linkTag.click();
        }
    }
}
