function Home () {
    const [form,setForm] = React.useState({});

    const handleChange= (e) =>{
       setForm({
        ...form,
        [e.target.name]:e.target.value

       })
     }

    const handleSubmit= (e) =>{
       e.preventDefault();
       google.script.run.withSuccessHandler(res=> {
         console.log(res)

       }).saveGoogle(form)
       alert("Formulario Enviado");
    }
     return (
         <div>
              <h1>Hola Soy Home</h1>

              <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Ingrese Nombre" name="name" onChange={handleChange} />
                    <input type="text" placeholder="Ingrese Phone" name="phone" onChange={handleChange}/>
                    <button type="submit">Enviar a GAS</button>
              </form>

        </div>
 
    );
};