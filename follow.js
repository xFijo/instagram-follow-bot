// paste this script into your console while on "suggested" tab to auto follow all the showed accounts.

(() => {
    let i = 0;
    const followInterval = setInterval(() => {
        if (i >= 30) {
            clearInterval(followInterval);
            return;
        }
        const buttons = document.querySelectorAll('button');
        const nextButton = buttons[i];
        nextButton.click();
        i ++;
    }, 1000);
    console.log("intervalID => ",followInterval);
})();
