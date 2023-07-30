import jwt, { decode } from 'jsonwebtoken';

const token = jwt.sign({email:'aaa@mail.com', id:101, name:'aaa'}, "12345", {expiresIn:'60s'});

// console.log(token);

const old_token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFhYUBtYWlsLmNvbSIsImlkIjoxMDEsIm5hbWUiOiJhYWEiLCJpYXQiOjE2OTA3MTc3ODMsImV4cCI6MTY5MDcxNzg0M30.EV7Dm_hzmcP-tzLMUDDDcbqQ3GGCMYcokHNf_iWC9iU`;

jwt.verify(token, '12345', (err,decoded) => {
    if(err) return console.log(err);

    console.log(decoded);
})