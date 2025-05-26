import Swal from 'sweetalert2';

export const notification = (title, message, type) => {
    Swal.fire({
        title,
        message,
        icon: type,
        confirmButtonText: 'Aceptar'
    });
}

export const timerNotification = title => {
    let timerInterval;

    Swal.fire({
        title,
        html: 'Serás redireccionado en <strong></strong> segundos.',
        timer: 1500,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            timerInterval = setInterval(() => {
                const content = Swal.getHtmlContainer();
                if (content) {
                    const strong = content.querySelector('strong');
                    if (strong) {
                        strong.textContent = Swal.getTimerLeft();
                    }
                }
            }, 100);
        },
        willClose: () => {
            clearInterval(timerInterval);
        }
    }).then(result => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer.')
        }
    });
}