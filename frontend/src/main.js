import {Router} from "./router.js";

export class Main {
    constructor() {

        this.dropDown();
        const incomeChart = document.getElementById('income-chart');
        const expensesChart = document.getElementById('expenses-chart');

        new Chart(incomeChart, {
            type: 'pie',
            data: {
                labels: ['Blue', 'Red', 'Orange', 'Yellow', 'Green'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 3],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: false,
                        text: 'Доходы'
                    },
                    colors: {
                        forceOverride: true
                    }
                }
            }
        });

        new Chart(expensesChart, {
            type: 'pie',
            data: {
                labels: ['Blue', 'Red', 'Orange', 'Yellow', 'Green'],
                datasets: [{
                    label: '# of Votes',
                    data: [2, 2, 3, 5, 3],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: false,
                        text: 'Доходы'
                    },
                    colors: {
                        forceOverride: true
                    }
                }
            }
        });

    }

    dropDown() {
        const myDropdown = document.getElementById('categories')
        myDropdown.addEventListener('show.bs.dropdown', event => {
            // do something...
        })
    }
}


