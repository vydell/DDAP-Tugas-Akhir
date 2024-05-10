const ctx2 = document.getElementById('doughnut2');

new Chart(ctx2, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [32, 59, 183],
            borderColor: 'rgba(0, 0, 0, 0)',
            backgroundColor: [
                'rgba(51, 87, 51, 1)',
                'rgba(118, 165, 117, 1)',
                'rgba(222, 139, 62, 1)'
            ]
        }],
    
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            '2021',
            '2022',
            '2023'
        ]
    },
    
    options: {
        animation: {
            duration: 3000,
        },
    },
});
