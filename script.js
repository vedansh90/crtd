function moveFocus(currentInput, nextInputId) {
    if (currentInput.value.length === 1) {
        document.getElementById(nextInputId).focus();
    }
}

function submitOtp() {
    const otp = [
        document.getElementById('otp1').value,
        document.getElementById('otp2').value,
        document.getElementById('otp3').value,
        document.getElementById('otp4').value
    ].join('');

    if (otp.length === 4) {
        console.log('OTP Submitted:', otp);
        alert('OTP Submitted: ' + otp);
    }
}
