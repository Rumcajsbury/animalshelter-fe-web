import toastr from 'toastr'
import 'toastr/build/toastr.min.css'
const ToastrService = {
    success(message){
        this.setOptions();
        toastr.success(message)
    },
    error(message){
        this.setOptions();
        toastr.error(message)
    },
    setOptions(){
        toastr.options = {
            positionClass : 'toast-bottom-right',
            hideDuration: 300,
            timeOut: 60000
          }
    }
};

export default ToastrService;