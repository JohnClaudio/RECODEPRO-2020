const app = require('./config/server')
const PORT = 3000;

app.listen(PORT,()=>{console.log('SERVIDOR LIGADO NA PORTA: ' + PORT)})