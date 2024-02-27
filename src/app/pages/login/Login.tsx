import { useCallback, useEffect, useMemo, useState } from "react";

export const Login = () => {
    const [password, setPassword] = useState('');
     const [email, setEmail] = useState('');

   //useMemo
     const emailLenght =useMemo(()=>{
        return email.length*12;
    },[email.length]);
    
    // useEffect
       useEffect(()=>{
        if (window.confirm('voce e homem ')) {
            console.log('homem'); }
        else{
            console.log('mulher'); } 
    },[]);

    useEffect(()=>{
        console.log(email); //recuperar valores que sao digitados pelo usuario
        console.log(password);
    },[email, password]); //este useEffect sera executado sempre que alteramos email e password


    //  const handleEntrar = ()=>{
    //     console.log(email); //recuperar valores que sao digitados pelo usuario
    //     console.log(password);
    //  };


    //usecalbak ela devolve um void
        const handleEntrar =useCallback(()=>
        {
            console.log(email);
            console.log(password);
            
            
        },[email, password])

        return (
              <div>
                <form>
                    <p>Quantidade de caractere de email :{emailLenght}</p>

                    <label>
                        <span>Email</span>
                        <input value={email} onChange={e => setEmail(e.target.value)} />
                    </label>

                    <label>
                        <span>Senha</span>
                        <input type="password" value={password} onChange={e=> setPassword(e.target.value)}/>

                    </label>
                    <button type="button" onClick={handleEntrar}>
                        Entrar
                    </button>
                </form>
            </div>
          
        );
    };

