export default class CheckFormContato {

    constructor() {
        this.form = document.querySelector('.form-contato');
        this.btnSubmit = this.form.querySelector('button[type="submit"]');

        this.submit = this.submit.bind(this);

    }

    showToggleSuccess() {
        const modal = document.querySelector('.form-modal-sucesso');
        modal.classList.add('active');

        setInterval(() => {
            modal.classList.remove('active');
        }, 2000);
        
    }

    showToggleError(message) {
        alert(message);
    }

    submit(e){
        e.preventDefault();

        const formData = new FormData(this.form);
        const data = {
            nome: formData.get('nome'),
            email: formData.get('email'),
            descricao: formData.get('descricao')
        }

        fetch(this.form.action, {
            method: 'POST',
            body: JSON.stringify(data),
            mode: 'cors',
            headers: {
                "Content-type":"application/json; charset=UTF-8"
            }
        }).then(res => {
            this.form.reset();
            this.showToggleSuccess()
        }).catch(err => {
            this.showToggleError();
            console.log(err + 'porra');
        });  


    }

    addEvents() {
        this.form.addEventListener('submit', this.submit);
    }

    init() {
        if(this.form && this.btnSubmit) this.addEvents();
    }

    

}