//Admin Panel Password Protection 
function toggleAdminPanel(){
    let pass = prompt("Enter Admin Pssword");
    if(pass ==="Tatanasma2020") 
        { let panel = document.getElementById('adminPanel');
        panel.style.display = panel.style.display === 'block' ? 'none' :'block';
    } else if (pass !== null){
        alert("incorrect password! Access denied.");
    }
}