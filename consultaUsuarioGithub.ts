const axios = require('axios');
const main = async () => {
    const request = await axios.get(`https://api.github.com/users/leoh18`, {
        headers: {
            'accept': 'application/vnd.github+json',
            'authorization': 'Bearer <YOUR-TOKEN>',
            'x-GitHub-api-version':'2022-11-28'
        }
    });

    console.log(`O nome de usuario e: ${request.data.login}`);
    console.log(`O link do Url da pagina e: ${request.data.url}`);
    console.log(`O link do GitHub e: ${request.data.html_url}`);
    console.log(`Este e o total de numeros de repositorios publicos: ${request.data.public_repos}`);
 
}

main();

export {};