
export default class Conexion{
    static async obtenerConexion(url, options){
        let result = null
        let data = null

        if( options){
            if( options.method == 'GET'){
                result = await fetch( url, options)
                data = await result.json()
            }else if( options.method == 'PUT'){
                result = await fetch( url, options)
                return 
            }
        }

        return data
    }
}