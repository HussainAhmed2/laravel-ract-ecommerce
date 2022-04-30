import Swal from "sweetalert2";

const failedSweetAlert = (message) => {
    return Swal.fire({
        icon: "error",
        title: "Error",
        text: message,
        button: false,
        timer: 2000,
    });
};

export default {
    failedSweetAlert,
};
