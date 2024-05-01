const BoxLogin = () => {
  return (
    <div className="flex flex-col justify-center bg-white w-96 items-center m-2 rounded-md gap-4 py-5 shadow-2xl">

      <div className="flex flex-col gap-4">

        <input className="border-solid border border-gray-400 w-80 h-14 rounded-md px-3" type="email" name="email" id="input-email" placeholder="Email ou telefone"/>    

        <input className="border-solid border border-gray-400 w-80 h-14 rounded-md px-3" type="password" name="password" id="input-password" placeholder="Senha" />  
        </div>

        <button className="bg-blue-facebook hover:brightness-90 text-white border-none rounded-md w-80 h-12 p-2 text-xl">Entrar</button>
        <a href="" className="">Esqueceu a senha?</a> 
        <span className="w-5/6 bg-slate-300 h-px"></span>

        <button className="bg-green-facebook text-white border-none rounded-md px-4 py-3 text-base font-bold hover:brightness-90">Criar nova conta</button>
    </div>
  )
}

export default BoxLogin

