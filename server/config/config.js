//import { url } from "inspector";

/*
 * Puerto 
 */

process.env.PORT = process.env.PORT || 3000;

/*
 * Entorno
 */

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

/*
 * Vencimiento del token
 * 60 * 60 * 24 * 30
 */

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;
/*
 * Vencimiento del token
 * 60 * 60 * 24 * 30
 */

process.env.SEED = 'este-es-el-seed-desarrollo';






/*
 * Base de datos 
 */

let urlDB

if (process.env.NODE_ENV === 'dev') {

    urlDB = 'mongodb://localhost:27017/cafe';

} else {

    urlDB = 'mongodb+srv://innome:hHzdo2REoxH4v3dE@cluster0-ifysd.mongodb.net/test';

}

process.env.urlDB = urlDB;