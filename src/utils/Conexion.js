
export default class Conexion{
    static async obtenerConexion(url, parametros = {}){
        let result = await fetch( url, parametros)
        let data = await result.json()

        return data
    }
}