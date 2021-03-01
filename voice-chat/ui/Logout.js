let btn = document.createElement('div')
btn.classList.add('logout')
btn.innerText = 'Logout'
btn.addEventListener('click',()=>{
    localStorage.removeItem('name');
    location.reload();
})
let showLogoutBtn = () =>{
    document.body.appendChild(btn)
}
export default showLogoutBtn