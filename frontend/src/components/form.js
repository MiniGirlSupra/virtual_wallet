export class Form {

    constructor() {

        this.fields = [
            // {
            //     name: 'name',
            //     id: 'name',
            //     element: null,
            //     regex:/^[А-ЯЁ][а-яё]*([-][А-ЯЁ][а-яё]*)?\s[А-ЯЁ][а-яё]*\s[А-ЯЁ][а-яё]*$/,
            // },
            {
                name: 'email',
                id: 'email',
                element: null,
                regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            },
            {
                name: 'password',
                id: 'password',
                element: null,
                regex: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
            },
        ];

        const that = this;
        this.fields.forEach(item => {
            item.element = document.getElementById(item.id);
            item.element.onchange = function () {
                that.validateField.call(that, item, this);
            }
        });
    }


    validateField(field, element) {
        if (!element.value) {
            element.parentNode.style.borderColor = 'red';
        } else {
            element.parentNode.removeAttribute('style');
        }
    }
}
