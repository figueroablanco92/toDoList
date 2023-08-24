
export default class Conexion{
    static async obtenerConexion(url, parameters){
        let result = null
        let data = null

        if( parameters){
            if( parameters.method == 'GET'){
                result = await fetch( url, parameters)
                data = await result.json()
            }
        }

        return data
    }
}