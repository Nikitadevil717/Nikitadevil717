let logged;

function sendAnalytics(data: string): void {
    console.log(data);
    logged = true;
}

sendAnalytics('The data');