const btnStart=document.querySelector('.btn-start')

// xử lý đăng nhập
const formLogin=document.querySelector('.form-login')
const btnLogin=document.querySelector('.btn-login')
const inputName=document.querySelector('#fullName')
const inputPass=document.querySelector('#password')
const formMessage1=document.querySelector('.form-message1')
const formMessage2=document.querySelector('.form-message2')


// hàm hiện lên from
function showFormLogin(){
    btnStart.classList.add('hide')
    formLogin.classList.add('open')
} 

btnStart.addEventListener('click',showFormLogin);

// hàm ẩn
function hideFormLogin(){
    btnStart.classList.remove('hide')
    formLogin.classList.remove('open')
}

let acc={
    name:'admin',
    pass:'admin'
}
btnLogin.addEventListener('click',(e)=>{
    const name=inputName.value;
    const pass=inputPass.value;
    e.preventDefault();
    if(name.trim()===''){
        formMessage1.textContent = "bạn chưa nhập tên tài khoản"
    }
    
    else if(name.trim()!=='' && name.trim()!==acc.name){
        formMessage1.textContent = "tên tài khoản sai, vui lòng nhập lại!!!"
        inputName.value=''
    }
    else{
        formMessage1.textContent = ""
    }

    if(pass.trim()===''){
        formMessage2.textContent = "bạn chưa nhập mật khẩu tài khoản"
    }
    else if(pass.trim()!=='' && pass.trim()!==acc.pass){
        formMessage2.textContent = "mật khẩu tài khoản sai, vui lòng nhập lại!!!"
        inputPass.value=''
    }
    else{
        formMessage2.textContent = ""
    }

    if(name.trim()===acc.name && pass.trim()===acc.pass){
        btnLogin.innerHTML="Loading..."
        setTimeout(()=>{
            hideFormLogin()
            btnStart.innerHTML="Đăng nhập thành công"
            btnLogin.innerHTML="Login"
            inputName.value=''
            inputPass.value=''
        },3000)
    }
})

// xử lý quên mật khẩu
const formMessage3=document.querySelector('.form-message3')
const linkChange=document.querySelector('.link-change')
const formChange=document.querySelector('.form-change')
const btnSave=document.querySelector('.btn-save')
const inputOldp=document.querySelector('#oldPassword')
const inputNewp=document.querySelector('#newPassword')
const formMessage4=document.querySelector('.form-message4')
const formMessage5=document.querySelector('.form-message5')

// hiện form
    function showFormChange(){
        formChange.classList.add('open')
        formLogin.classList.remove('open');
    }

    linkChange.addEventListener('click',showFormChange);

    function hideFormChange(){
        formChange.classList.remove('open')
        formLogin.classList.add('open')
    }

    btnSave.addEventListener('click',(e)=>{
        const oldPass=inputOldp.value;
        const newPass=inputNewp.value;
        e.preventDefault();

        if(oldPass.trim()===''){
            formMessage4.textContent = "bạn chưa nhập mật khẩu cũ"
        }
        
        else if(oldPass.trim()!=='' && oldPass.trim()!==acc.pass){
            formMessage4.textContent = "mật khẩu cũ của bạn sai, vui lòng nhập lại!!!"
            inputOldp.value=''
        }
        else{
            formMessage4.textContent = ""
        }
    
        if(newPass.trim()===''){
            formMessage5.textContent = "bạn chưa nhập mật khẩu mới"
        }
        
        else if(newPass.trim()!=='' && newPass.trim()===acc.pass){
            formMessage5.textContent = "mật khẩu mới không được trùng với mật khẩu cũ, nhập lại!!!"
            inputNewp.value=''
        }
        else{
            formMessage5.textContent = ""
        }
    
        if(oldPass.trim()===acc.pass && newPass.trim()!==acc.pass && newPass.trim()!==''){
            
            setTimeout(()=>{
                hideFormChange()
                showFormLogin()
                formMessage3.textContent="bạn đã đổi mật khẩu thành công"
                inputOldp.value=''
                inputNewp.value=''
            },1000)
            formMessage3.textContent=""
                acc={
                name:'admin',
                pass:newPass
            }
        }

    })