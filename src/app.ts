import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello world!')
});

app.get('/employees', (req, res) => {
    const employess = [
        "João", "Samorano", "Jessica", "Alvaro"
    ];

    res.send(employess)
});

app.get('/sum', (req, res) => {
    const a = 10, b = 20;
    const sum = a + b;
    res.send(`${sum}`)
})

app.get('/cep', (req, res) => {
    const cep = "endereço"
    res.send(`${cep}`)
})

const port = 3001;
app.listen(port, () => {
    console.log(`server running on ${port}`);
});
