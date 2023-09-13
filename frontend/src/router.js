import {Form} from "./components/form.js";
import {Main} from "./main.js";

export class Router {
    constructor() {
        this.routes = [
            {
                route: '#/',
                id: 'signUp',
                title: 'Вход',
                template: 'templates/form.html',
                styles: 'styles/common.css',
                load: () => {
                    new Form('form');
                }
            },
            {
                route: '#/main',
                id: 'main',
                title: 'Главная',
                template: 'templates/main.html',
                styles: 'styles/main.css',
                load: () => {
                    new Main('main');
                }
            },
            {
                route: '#/all',
                id: 'all',
                title: 'Доходы и расходы',
                template: 'templates/all.html',
                styles: 'styles/main.css',
                load: () => {
                    new Main('all');
                }
            },
            {
                route: '#/income',
                id: 'income',
                title: 'Доходы',
                template: 'templates/income.html',
                styles: 'styles/common.css',
                load: () => {
                    new Main('income');
                }
            },
        ]
    }

    async openRoute() {
        const newRoute = this.routes.find(item => {
            return item.route === window.location.hash;
        });

        if (!newRoute) {
            window.location.href = '#/';
            return;
        }
        let content = document.getElementById('content');
        if (newRoute.id === 'signUp') {
            content.style.position = 'static';
            content.style.padding = '0px';
            document.getElementById('sidebar').style.display = 'none';
        }

        //подсвечиваем активный пункт меню
        let menuItems = document.getElementsByClassName('navigation-item');
        for (var i = 0; i < menuItems.length; i++) {
            menuItems[i].addEventListener('click', function () {
                var x = document.getElementsByClassName('navigation-item');
                Array.prototype.forEach.call(x, function (el) {
                    el.classList.remove('active');
                });
                this.classList.add('active');
            });
        }


        document.getElementById('content').innerHTML =
            await fetch(newRoute.template).then(response => response.text());
        document.getElementById('styles').setAttribute('href', newRoute.styles);
        document.getElementById('title').innerText = newRoute.title;
        newRoute.load();
    }


}